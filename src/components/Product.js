import React from 'react'
import "./Product.css"

function Product(props) {
  return (
    <div className='product'> 
        <img src={props.imgurl}/>
        <h4>{props.title}</h4>
        <p className='product__category'>{props.category}</p>
        <p>${props.price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product