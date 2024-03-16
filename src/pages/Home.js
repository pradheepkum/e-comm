import React, { useState } from 'react'
import Header from '../components/Header'
import Product from '../components/Product'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css'
function Home() {
  const [product, setProduct] = useState([]);  
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const nav = useNavigate();
  useEffect(() => {

    let token = localStorage.getItem('token');
    if(!token){
      nav('/');
    }

  }, [])

  useEffect(() => {
      async function getProduct(){
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((Res)=>setProduct(Res))
      };
      getProduct();
  },[])
  return (
    <div className='home'>
      <Header/>
      <div className='home__container'>
        <div className='home__Filter'>
          <input placeholder='Search for products' value={query} onChange={(a)=>{setQuery(a.target.value)}}/>
          <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
              <option value='All'>
                  All Category
              </option>
              <option value='electronics'>
                  Electronics
              </option>
              <option value="women's clothing">
                  Women's clothing
              </option>
              <option value="men's clothing">
                  Men's clothing
              </option>
              <option value="jewelery">
                  Jewelery 
              </option>
          </select>
        </div>
        <div className='home__Products'>
          {
            (category==='All' ? query==='' ? product : product.filter((a)=>a.title.toLowerCase().includes(query.toLowerCase())) : product.filter((a)=>a.category === category))
            .map((a , i)=>(<Product key={a.id} imgurl={a.image} title={a.title} category={a.category} price={a.price}/>))
          }
        </div>
      </div>
    </div>

  )
}

export default Home