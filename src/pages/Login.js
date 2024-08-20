import React from 'react'
import './Login.css'
const Login=()=>{
    return (<>
        <h1>Login</h1>
        <div className="login-form-wrapper" >
            <div className="form-group">
                <input type="text"  class="form-field" name="email" placeholder='enter email' autocomplete="new-password"/>
            </div>
            <div className="form-group">
                <input type="password" class="form-field" name="password" placeholder='enter password' autocomplete="new-password"/>
            </div>
            <div className="btn-wrapper">
                <button>submit</button>
            </div>
        </div>
    </>)
}

export default Login;