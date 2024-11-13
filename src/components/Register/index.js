import React, {useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";

import './index.css'

const Register = () => {
    const [error, setError] = useState("")
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const onHandling = (event) => {
        event.preventDefault();
        if (username.current.value !== "" && password.current.value !== ""){
            localStorage.setItem("newuser", username.current.value)
            localStorage.setItem("newpassword", password.current.value)
            navigate('/login')
        } else{
            setError("error")
        }
    }

    return (
        <div className='reg-container'>
            <h1 className='register'>Register</h1>
            <form className='form-control' onSubmit={onHandling}>
                <div className='input-form'>
                    <label className='label-card' htmlFor="name">
                        Name
                    </label>
                    <input 
                      type="text"
                      placeholder='Name'
                      ref = {username}
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
                      ref = {password}
                      id="password"
                      className='input'
                    />
                </div>
                <button className='reg-btn' type="submit">Register</button>
                <p className='error'>{error}</p>
            </form>
        </div>
    )
}

export default Register
