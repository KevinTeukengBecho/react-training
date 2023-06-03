import React, { useEffect, useState } from 'react'
import CountButton from './CountButton/CountButton'
import Button from './Button/button'
import SearchBar from './SearchBar/SearchBar'


const products = [
    "tooth brush",
    "tooth paste",
    "mouth wash",
    "dental floss"
]

const App = (props) => {
    const [productState, setProductState] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductState(newProductsState)
            })
    }, [])
    
    return (
        <div>
            { productState.length > 0 ? <SearchBar products={productState}/> : 'Loading' }
            {/* <CountButton increment={1} currentCount={1}/> */}
            <Button>
                <CountButton increment={1} currentCount={1}/>
            </Button>
        </div>
    )
}

export default App