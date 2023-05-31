import React from 'react'
import CountButton from './CountButton/CountButton'

const App = (props) => {
    return (
        <div>
            <ul>
                <li>item123</li>
                <li>{props.love}</li>
                <li>{props.myItem}</li>
            </ul>
            <CountButton increment={1} />
            <CountButton increment={2}/>
        </div>
    )
}

export default App