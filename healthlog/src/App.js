import { useState } from 'react';
import './App.css';
// import Header from './components/header';
// import Sidebar from './components/sidebar';
import Userdashboard from './components/userdashboard';
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <Router className="grid-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Userdashboard />} />
      </Routes>  
    </Router>
  )
}

export default App
