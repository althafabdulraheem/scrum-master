import React,{useState} from 'react'
import './Login.css'
const Login=()=>{

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    return (<>
        <h1>Scrum Mater</h1>
        <div className="login-form-wrapper">
            <h1>Login</h1>
            <div className="form-group">
                <input type="text"  onChange={(e)=>setEmail(e.target.value)} class="form-field" name="email" placeholder='enter email' autocomplete="new-password"/>
            </div>
            <div className="form-group">
                <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-field" name="password" placeholder='enter password' autocomplete="new-password"/>
            </div>
            <div className="btn-wrapper">
                <button>submit</button>
            </div>
        </div>
    </>)
}

export default Login;