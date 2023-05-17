console.log(React)
console.log(ReactDOM)
console.log(Document)

const reactContentRoot = document.getElementById("root")

const myFirstElement = React.createElement(
    "ul", 
    null, 
    [React.createElement("li", null, "item1"), React.createElement("li", null, "item2")]
    )

ReactDOM.render(myFirstElement, reactContentRoot)