import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsWhatsapp, BsX, BsTelegram } from 'react-icons/bs';
import Navs from './navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
function Home () {
    return (
        <div>
            <Navs />
            <section className="mp-3 text-white text-center py-5 headr">
                <div className="mp-3 headrdiv">
                    <h1>WELCOME TO HEALTHLOG</h1>
                    <h5>Manage patient records, staff information, and more with ease.</h5>
                    <Link to="/register" className="homebutton">Register</Link>
                    <Link to="/login" className="homebutton">Login</Link>
                </div>
            </section>
            <About />
            <footer className="text-center thefooter">
                <BsFacebook className='icons'/>
                <BsWhatsapp className='icons'/>
                <BsX className='icons'/>
                <BsTelegram className='icons'/>
            </footer>
        </div>
        
    );
};

export default Home;

function About () {
    return (
        <div className="container text-center content-justify mp-3 conAbout">
            <div className="mp-3 innerconAbout">
            <h3>About</h3>
            <p>Welcome to HealthLog, where innovation meets healthcare excellence.
            We empower hospitals to streamline their operations, providing a comprehensive platform to manage patient records,
            optimize staff workflows, and enhance overall efficiency.</p>
            <p>At HealthLog, we believe in the power of technology to transform healthcare delivery.
            Our user-friendly interface ensures seamless navigation, while robust security measures
            prioritize the confidentiality of patient information.</p>
            <p>Join us in revolutionizing the way healthcare institutions operate.
            Together, let's build a healthier future with HealthLog.</p>
            </div>

            <div className="mp-3 innerconAbout">
            <h3>About</h3>
            <p>Welcome to HealthLog, where innovation meets healthcare excellence.
            We empower hospitals to streamline their operations, providing a comprehensive platform to manage patient records,
            optimize staff workflows, and enhance overall efficiency.</p>
            <p>At HealthLog, we believe in the power of technology to transform healthcare delivery.
            Our user-friendly interface ensures seamless navigation, while robust security measures
            prioritize the confidentiality of patient information.</p>
            <p>Join us in revolutionizing the way healthcare institutions operate.
            Together, let's build a healthier future with HealthLog.</p>
            </div>
        </div>
    )
};