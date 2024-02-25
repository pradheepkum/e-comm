import React, { useEffect, useState } from 'react'
import './Login.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const nav = useNavigate();
  useEffect(() => {

    let token = localStorage.getItem('token');
    if(token){
      nav('/home');
    }

  }, [])

  const login = () => {

    // toast.success('Hello World');
    if (!password || !username ){
        toast.error('Enter valid user credentials');
    }
    
    fetch('https://fakestoreapi.com/auth/login', {

        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(
            {
              username,
              password
            }
        ),
    }).then( (res) => res.json()).then( response => {

      localStorage.setItem('token', response.token);      
      nav('/home');

    } ).catch(reason => { 
      
      console.log(reason);

    })
    ;

    // const resultjson = await result.text();
    // toast.error(resultjson);

  };



  return (
    <div className='login__container'>
        <div className='login__card'>
            <img src='./icon.png' alt="Can't load"/>
            <div className='login__form'>
                <input placeholder='User Name' value={username} onChange={(event) => setUsername(event.target.value)}/>
                <input placeholder='Password' type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                <button onClick={() => login()}>Login</button>
            </div>
        </div>
        <Toaster  position="bottom-left"
                  reverseOrder={true} />
    </div>
  )
}

export default Login