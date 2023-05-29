import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


console.log(React)
console.log(ReactDOM)
console.log(Document)

const reactContentRoot = document.getElementById("root")
ReactDOM.render(<App myItem="mike" love="love"/>, reactContentRoot) // could take myFirstElement instead of myJSXElement