import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginName, setLoginName] = useState('')
    const [loginPassword, setLoginPassword] = useState();
    const [nerror, setnerror] = useState('');
    const oldName = localStorage.getItem("newuser");
    const oldPassword = localStorage.getItem("newpassword");
    const navigate = useNavigate();

    const onHandlingLogin = (e) => {
        e.preventDefault();
        if (oldName === loginName && oldPassword === loginPassword){
            navigate('/todo')
        }
        else if (oldName === loginName && oldPassword !== loginPassword){
            setnerror("Password Error")
        }
        else if (oldName !== loginName && oldPassword === loginPassword){
            setnerror("Username Error")
        }
        else{
            setnerror("Username and Password Error")
        }
    }

    return (
        <div className='reg-container'>
           <h1 className='register'>Login</h1>
           <form className='form-control' onSubmit={onHandlingLogin}>
              <div className='input-form'>
                  <label className='label-card' htmlFor="name">
                    Name
                  </label>
                  <input 
                    type="text"
                    placeholder='Name'
                    value={loginName}
                    onChange = {(e) => setLoginName(e.target.value)}
                    id="name"
                    className='input'
                  />
               </div>
              <div className='input-form'>
                <label className='label-card' htmlFor="password">
                    Password
                </label>
                <input 
                  type="password"
                  placeholder='Password'
                  value = {loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  id="password"
                  className='input'
                />
              </div>
              <button className='reg-btn' type="submit">Login</button>
              <p className='error'>{nerror}</p>
           </form>
        </div>
    )
}

export default Login
