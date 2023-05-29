import React, { useState } from 'react'


const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(100)
    
    console.log(useState)

    const handleClick = () => {
        setCurrentCount(currentCount + parseInt(props.increment))
    }
    
    console.log("Component re-rendered")

    return (
        <div>
            <button onClick={handleClick}>{currentCount}</button>
            <p>{currentCount}</p>
        </div>
    )
}

export default CountButton