import React from 'react'
import './Product.css'
export default function Product(props) {
    const {product, onAdd} = props;
    return (
        <div className='wrapper'>
            <div>
              <img className='container' onClick={()=> alert(product.description)} src={product.image} alt={product.name}></img>  
            </div>
                <button class = "button" onClick={()=>onAdd(product)}>Pin Item</button> 
        </div>
        
    )
}
