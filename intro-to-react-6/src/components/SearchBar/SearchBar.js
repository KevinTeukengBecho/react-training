import React, {useState, useEffect} from 'react'
import './SearchBar.css'


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    console.log("search bar updated")

    const shouldDisplayButton = searchValue.length > 0

    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange}/>
            {shouldDisplayButton && <button onClick={() => setSearchValue("")}>clear</button>}
            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default SearchBar