import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navs from './navbar'
import { BsKeyFill, BsEnvelope, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

function Login () {
    const [showPassword, setShowPassword] = useState(true);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
        <Navs />
        <div className="d-flex vh-100 justify-content-center align-items-center p-3 formcontainer">
            <div className="p-3 wrapper">
                <form action="" className="form">
                    <h1>Login HealthLog</h1>
                    <div className="mb-3 input-box">
                        <input type="email" placeholder="Email" required />
                        <BsEnvelope className="icon"/>
                    </div>
                    <div className="mb-3 input-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            required
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            onChange={(e) => setPassword(e.target.value)}/>
                    {password ? (        
                        <div onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <BsEyeSlashFill className="icon"/> : <BsEyeFill className="icon"/>}
                        </div>) : (<BsKeyFill className="icon"/>)}    
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>Remember me</label>
                        <Link to="" className="forgotlink">Forgot Pasword?</Link>
                    </div>
                    <button className="btn btn-success" type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't Have an Account? <Link to="/register" className="register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};
export default Login;