import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Cart.css'
import { useLocation } from 'react-router-dom'

function Cart() {

  const loc = useLocation();

  function calTotal(){
    let total = 0;
    loc.state.cart.map((a) => total+=a.price);
    return total;
  }

  return (
    <div className='cart'>
      <Header cart={loc.state.cart} />
      <div className='cart__container'>
        <div className='cart__items'>
          {loc.state.cart.map((a) => (
            <div className='cart__item'>
              <img src={a.img} />
              <div>
                <p><b>{a.title}</b></p>
                <span>{a.category}</span>
                <br /><br />
                <span>${a.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='cart__summary'>
          <h2>Cart Summary</h2>
          <div className='summary_list'>
            {loc.state.cart.map((a) => (
              <div className='cart_summary_item'>
                <p><b>{a.title}</b></p>
                <span>${a.price}</span>
              </div>
            ))}
            <div className='cart_total_amount'>
              <p>Total Amount : </p>
              <span><b>${calTotal()}</b></span>
            </div>
            <button>Pay now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart