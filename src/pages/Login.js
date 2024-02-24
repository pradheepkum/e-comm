import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login__container'>
        <div className='login__card'>
            <img src='./icon.png' alt="Can't load"/>
            <div className='login__form'>
                <input placeholder='User Name'/>
                <input placeholder='Password' type='password'/>
                <button>Login</button>
            </div>

        </div>
    </div>
  )
}

export default Login