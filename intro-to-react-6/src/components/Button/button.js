import React from "react";

const Button = (props) => {

    console.log(props)
    return(
        <div style={{color: "blue"}}>{props.children}</div>
    )

}

export default Button