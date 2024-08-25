import React,{useState,useEffect} from 'react'
import './Login.css'
import useAuthHook from '../hooks/AuthFunction';
import { toast } from "react-toastify";

const Login=()=>{

    const {Login,checkToken} =useAuthHook();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    
    useEffect(()=>{
        checkToken()
    },[checkToken])
    
    const submit=()=>{
        if(email.length > 0 && password.length > 0)
        {
            Login(email,password);
        }
        else{
            toast.error('missing required parameters');
        }   
    }
    return (<>
        <h1>Scrum Mater</h1>
        <div className="login-form-wrapper">
            <h1>Login</h1>
            <div className="form-group">
                <input type="text"  onChange={(e)=>setEmail(e.target.value)} className="form-field" name="email" placeholder='enter email' autoComplete="new-password"/>
            </div>
            <div className="form-group">
                <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-field" name="password" placeholder='enter password' autoComplete="new-password"/>
            </div>
            <div className="btn-wrapper">
                <button onClick={submit}>submit</button>
            </div>
        </div>
    </>)
}

export default Login;