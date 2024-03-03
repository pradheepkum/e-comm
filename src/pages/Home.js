import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Home.css'
function Home() {
  const nav = useNavigate();
  useEffect(() => {

    let token = localStorage.getItem('token');
    if(!token){
      nav('/');
    }

  }, [])
  return (
    <div className='home'>
      <Header/>
      <div className='home__container'></div>
    </div>

  )
}

export default Home