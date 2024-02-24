import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
              
          
      </Routes>
   </BrowserRouter>
  )
}

export default App