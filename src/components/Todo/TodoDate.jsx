import { useState, useEffect } from "react";

export const TodoDate = () => {

     // date and time
        const [date, setDate] = useState("")
        const [time, setTime] = useState("");
    
        useEffect(() => {
            const intervalID = setInterval(() => {
                const currentDate = new Date().toLocaleDateString('en-GB');
                const currentTime = new Date().toLocaleTimeString();
                setDate(currentDate);
                setTime(currentTime);
            }, 1000)
    
            return () => clearInterval(intervalID);
        }, [])

    return (
        <div className='d-flex justify-content-center gap-2'>
            <p className='text-white text'> {date} </p>
            <p className='text-white text'> - </p>
            <p className='text-white text'> {time} </p>
        </div>
    )
}