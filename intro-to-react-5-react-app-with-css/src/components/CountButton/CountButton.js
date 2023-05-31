import React, { useState } from 'react'
import './CountButton.css'


const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(100)

    const divStyle = {
        borderRadius: "10px",
        border: "2px solid blue",
        width: "50px"
    }
    
    console.log(useState)

    const handleClick = () => {
        setCurrentCount(currentCount + props.increment)
    }
    
    console.log("Component re-rendered")

    return (
        <div style={divStyle}>
            <button onClick={handleClick}>{currentCount}</button>
            <p className={"count-display"}>{currentCount}</p>
        </div>
    )
}

export default CountButton