import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navs from './navbar'
import { BsKeyFill, BsEnvelope, BsPerson, BsHospital, BsTelephone, BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/register.css'

function Register () {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const [phoneNumbers, setPhoneNumbers] = useState(['']);
    const [newPhoneNumbers, setNewPhoneNumbers] = useState('');

    // toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Add more Phone number
    const handleAddPhoneNumber = () => {
      setPhoneNumbers([...phoneNumbers, '']);
    };

    const handlePhoneNumberInputChange = (index, value) => {
        const newNumbers = [...phoneNumbers];
        newNumbers[index] = value;
        setPhoneNumbers(newNumbers);
    };

    // connecting to nodejs
    const [values, setValues] = useState({
        hos_email: '',
        hos_address: '',
        password: '',
        hos_name: '',
        hos_telephone: '',
    });

    const handleChange = (event) => {
       setValues({...values, [event.target.name]:event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://authentication-system-sai8.onrender.com/api/auth/signup', values)
        .then((res) => {
            console.log('Registered Successfully!!!');
            setValues({
                hos_email: '',
                hos_address: '',
                password: '',
                hos_name: '',
                hos_telephone: '',
        });
    })
    .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Registration failed with status:', error.response.status);
          
          if (error.response.status === 400) {
            // Display a user-friendly message for a Bad Request
            alert('Invalid registration data. Please check your input and try again.');
          } else if (error.response.status === 401) {
            alert('Unauthorized: Invalid credentials.');
          } else {
            alert('Registration failed. Please try again later.');
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          alert('No response received. Please check your internet connection.');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Request setup error:', error.message);
          alert('An error occurred during registration. Please try again later.');
        }
      });      
};
    
    const typePassword = (e) => {
        setPassword(e.target.value);
    }
      
    return (
        <>
        <Navs />
        <div className="d-flex vh-100 justify-content-center align-items-center p-3 formcontainer">
            <div className="p-3 wrapper">
                <form action="" className="form" onSubmit={handleSubmit}> 
                    <h1>Register HealthLog</h1>

                    <div className="mb-3 input-box">
                        <input type="text" placeholder="Hospital Name" name='hos_name' required onChange={handleChange}/>
                        <BsPerson className="icon" />
                    </div>

                    <div className="mb-3 input-box">
                        <input type="text" placeholder="Hospital Address" name='hos_address' required onChange={handleChange}/>
                        <BsHospital className="icon"/>
                    </div>

                    <div className="mb-3 input-box">
                        <input type="email" placeholder="Hospital Email" name='hos_email'required onChange={handleChange}/>
                        <BsEnvelope className="icon"/>
                    </div>

                    {phoneNumbers.map((phoneNumber, index) => (
                        <div className="mb-3 input-box" key={index}>
                            <input
                                type="text"
                                placeholder="Telephone"
                                
                                onChange={(e) => handlePhoneNumberInputChange(index, e.target.value) }
                                value={phoneNumber}
                                name='hos_telephone'
                                required />
                            <BsTelephone className="icon"/>
                        </div>
                    ))}

                    <div className="addTel">
                        <p className="addPhone" onClick={handleAddPhoneNumber}>Add Another Phone</p>
                    </div>

                    <div className="mb-3 input-box">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            required
                            name='password'
                            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                            onChange={ typePassword }/>
                    {password ? (        
                        <div onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <BsEyeSlashFill className="icon"/> : <BsEyeFill className="icon"/>}
                        </div>) : (<BsKeyFill className="icon"/>)}    
                    </div>

                    <button className="btn btn-success" type="submit" >Register</button>
                    <div className="register-link">
                        <p>Already Have an Account? <Link to="/login" className="register">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Register;