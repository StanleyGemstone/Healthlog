import React from 'react';
// import { FontAwesomeIcom } from '@fortawesome/react-fontawesome';
// import { FaNotesMedical } from '@fortawesome/free-sold-svg-icons';
import { Link } from 'react-router-dom';
import {BsCart3, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';
import '../styles/sidebar.css';
import '../App.css';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/>HealthLog
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/staff">
                    <BsPeopleFill className='icon'/> Staff
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/departments">
                    <BsFillGrid3X3GapFill className='icon'/> Departments
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="">
                    <BsPeopleFill className='icon'/> Patients
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="/news">
                    <BsListCheck className='icon'/> News
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/reports">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/login">
                    <BsFillGearFill className='icon'/> Logout
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar