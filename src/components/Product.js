import React from 'react'
import "./Product.css"

function Product(props) {

  function addToBasket(a){
    let cartItems = props.cart.slice();    
    cartItems.push(a);
    props.updateCart(cartItems);



  }
  return (
    <div className='product'> 
        <img src={props.imgurl}/>
        <h4>{props.title}</h4>
        <p className='product__category'>{props.category}</p>
        <p>${props.price}</p>
        <button onClick={()=>{
          let item = { id: props.id,
                       title: props.title,
                       category: props.category,
                       price: props.price, 
                       img: props.imgurl}
                       ;
          addToBasket(item);

        }}>Add to Cart</button>
    </div>
  )
}

export default Product