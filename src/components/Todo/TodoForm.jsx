

export const TodoForm = ({ task, setTask, handleTask, inputRef }) => {
    

    return (
        <section>
            <form>
                <div className="input-group inputs ">
                    <input
                        ref={inputRef}
                        onChange={(e) => setTask(e.target.value)}
                        value={task}
                        type="text"
                        placeholder="Enter your items..."
                        aria-label="Recipient’s username"
                        aria-describedby="button-addon2"
                        className="form-control input rounded-start-4 p-lg-3"
                    />
                    <button onClick={handleTask} class="btn btn-info text-white" type="button" id="button-addon2"> Add </button>
                </div>
            </form>
        </section>
    )
}