import { useState, useRef, useEffect } from 'react';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { ClearAll } from './ClearAllButton';
import { getLocalStorageLocalData, setLocalStorageLocalData } from './TodoLocalStorage';



export const TodoApp = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    // handle input
    const [task, setTask] = useState("")
    const [items, setItems] = useState(() => getLocalStorageLocalData());

    const handleTask = () => {
        if (task !== "") {
            setItems([...items, { text: task, completed: false }]);
            setTask("");
            inputRef.current.focus();
        }
    };


    // Todo add data to lacal storage
    setLocalStorageLocalData(items)


    // delete items
    const handleDelete = (indexToDelete) => {
        const filteredItems = items.filter((_, index) => index !== indexToDelete);
        setItems(filteredItems);
    };

    // tick
    const toggleComplete = (indexToToggle) => {
        const updatedItems = items.map((item, index) => {
            if (index === indexToToggle) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setItems(updatedItems);
    };

    return (
        <div >
            <div className='container-fluid bg-black min-vh-100 bg-light d-flex justify-content-center pt-5 '>
                <div className='row '>
                    <div className='col'>
                        <div>
                            <h1 className="heading d-flex justify-content-center text-white"> Todo App </h1>
                        </div>

                        {/* date and time */}
                        <TodoDate />

                        {/*Form input field */}
                        <TodoForm inputRef={inputRef} task={task} setTask={setTask} handleTask={handleTask} />

                        {/*items list */}
                        <div>
                            {items.map((elm, index) => {
                                return (
                                    <TodoList elm={elm} index={index} handleDelete={handleDelete} toggleComplete={toggleComplete} />
                                )
                            })}
                        </div>


                        {/* clear all button */}
                        <ClearAll setItems={setItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}
