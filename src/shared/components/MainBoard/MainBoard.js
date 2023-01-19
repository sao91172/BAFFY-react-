import React from 'react'
import Product from './Product';

function MainBoard(props) {
  const {products,onAdd} = props;
  return (
    <React.Fragment>
      <p> Click an image to view its description.</p>
       <div classname = "wrapper"> 
        <div classname = "container">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div> 
       </div>
           
        
    </React.Fragment>

  )
}

export default MainBoard