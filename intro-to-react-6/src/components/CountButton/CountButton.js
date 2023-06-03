import React, { useState, useEffect } from 'react'
import './CountButton.css'


const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(props.currentCount ?? 0)


    const handleClick = () => {
        setCurrentCount(currentCount + props.increment)
    }

    useEffect(()=>{
        console.log("in effect")
        if(currentCount === 10) {
            alert("The count is 10")
            setCurrentCount(0)
        }
    }, [currentCount])
    
    return (
        <div>
            <button onClick={handleClick}>{currentCount}</button>
            <p>{currentCount}</p>
        </div>
    )
}

export default CountButton