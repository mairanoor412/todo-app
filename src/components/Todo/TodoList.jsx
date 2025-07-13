import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export const TodoList = ({elm, index, handleDelete, toggleComplete}) => {
    return (
        <div key={index} className="input-group mb-3">
            <input
                type="text"
                value={elm.text}
                readOnly
                aria-label="Text input with checkbox"
                className={`item-list form-control ${elm.completed ? "text-decoration-line-through" : ""}`}
            />

            <MdOutlineDeleteForever onClick={() => handleDelete(index)} className='delete badge rounded-pill ' />
            <FaCheck onClick={() => toggleComplete(index)} className='tick badge rounded-pill ' />

        </div>
    )
}