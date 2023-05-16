console.log(React)
console.log(ReactDOM)
console.log(Document)

const reactContentRoot = document.getElementById("root")

const myFirstElement = React.createElement('li', null, 'item1')

ReactDOM.render(myFirstElement, reactContentRoot)