import React, { useRef } from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef(null)
    const passRef = useRef(null)

    const importedImages = [];
    const adminGallerys = [];
    const ADMIN_NAME= 'admin';

    const login = () => {

        const userName = userRef.current.value;
        const userPassword = passRef.current.value;

        if (userName=== 'admin') {
            localStorage.setItem('loginDetails', JSON.stringify({userName:ADMIN_NAME, adminGallerys, userPassword}))
            navigate("/testproject");
        } 
        if(userName !== '' ) {
        localStorage.setItem('loginDetails', JSON.stringify({userName, userPassword, importedImages}));
        navigate("/testproject");
        }
    }


  return (
    <div className='login'>
        <div className='input'>
            <h1 className='loginButton'>Login</h1>
            <div className='inputContainer'>
            <label className='labelField' htmlFor='username'>Username</label>
            <input type='text' name='username' ref={userRef} placeholder='Enter Your Username' className='inputText'/>
            </div>
            <div className='inputContainer'>
            <label className='labelField' htmlFor='password'>Password</label>
            <input type='password' ref={passRef} name='password' placeholder='Enter Your Password' className='inputText'/>
            </div>
            <button className='btnForm' onClick={login}>Login</button>
            
            
        </div>
   
    </div>
  )
}

export default Login;