console.log(React)
console.log(ReactDOM)
console.log(Document)

const reactContentRoot = document.getElementById("root")

const App = (props) => {
    return (
        <ul>
            <li>item123</li>
            <li>{props.love}</li>
            <li>{props.myItem}</li>
        </ul>
    )
}


ReactDOM.render(<App myItem="mike" love="love"/>, reactContentRoot) // could take myFirstElement instead of myJSXElement