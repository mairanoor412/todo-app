export const ClearAll = ({setItems}) => {
    return (
        <div className='d-flex justify-content-center pt-3'>
            <button onClick={() => setItems([])} className='btn btn-color text-white '> Clear All </button>
        </div>
    )
}