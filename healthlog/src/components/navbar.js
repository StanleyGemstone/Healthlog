import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcom } from '@fortawesome/react-fontawesome';
// import { FaNotesMedical } from '@fortawesome/free-sold-svg-icons';
import { BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs';
import '../styles/navbar.css';

function Navs (OpenSidebar) {
    return (
        <nav>
            <header className='header'>
                <div className='menu-icon'>
                    <BsJustify className='icon' onClick={OpenSidebar}/>
                </div>
                <div className='header-left'>
                    <BsPersonCircle className='icon'/>
                    HealthLog
                </div>
                <div className='center'>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/login" className="nav-item">Login</Link>
                    <Link to="/register" className="nav-item">Register</Link>
                </div>
                <div className='header-right'>
                    <BsSearch  className='icon'/>
                    
                </div>
            </header>
        </nav>
    );
};

export default Navs;