import React from 'react';
import { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Dashboard from './dashboard';
import '../App.css';
function Userdashboard () {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    
    return (
        <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Dashboard />
      </div>

    )
}
export default Userdashboard