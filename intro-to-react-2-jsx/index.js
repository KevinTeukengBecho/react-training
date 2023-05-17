console.log(React)
console.log(ReactDOM)
console.log(Document)

const reactContentRoot = document.getElementById("root")

const myFirstElement = React.createElement(
    "ul", 
    null, 
    [React.createElement("li", null, "item1"), React.createElement("li", null, "item2")]
)

const myItem = "mike"


const myJSXElement = (
    <ul>
        <li>item123</li>
        <li>item2</li>
        <li>{myItem}</li>
    </ul>
)

ReactDOM.render(myJSXElement, reactContentRoot) // could take myFirstElement instead of myJSXElement