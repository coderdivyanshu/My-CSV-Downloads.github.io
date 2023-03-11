import React from 'react'
import './app.css'
import { useState  } from 'react';
// import {Link} from "react-router-dom";
import image from './img.png';
import {useNavigate} from 'react-router-dom' ;



function Login() {
    const [email , setemail] = useState();
    const [password , setpassword] = useState();

    const navigate = useNavigate();


    // useEffect(()=>{
    //      pleaselogin();
    // }  , []);

    function generate() {
      let length = 10;
      let result = ' ';
      for(let i = 0; i < length; i++) {
          result += 
          String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }
      return result
  }

    const pleaselogin=()=>{

    console.log(email , password);
    
    if(email.length<10 || password.length<5){
        alert("please enter correct detials")
    }
    else 
    {
        sessionStorage.setItem('token'  , JSON.stringify(generate())
        );
        navigate('Detail');
    }



    }

  return (
    <div className='container'>
      <input type='email' placeholder='Email' className='email' 
      onChange={(e)=>setemail(e.target.value)}
      />
      <input type='password' placeholder='Password' className='password'
      onChange={(e)=>setpassword(e.target.value)}
      />
      
      <div className='sinup'>
      Don't have a account ? signup instead 
      </div>

      <button type='submit' className='submit' onClick={pleaselogin}>Submit</button>

      <div className='or'>OR</div>

      <div className='google'>
        <img src={image} alt="this is about"></img>
        Login with Google</div>


    </div>
  )
}

export default Login
