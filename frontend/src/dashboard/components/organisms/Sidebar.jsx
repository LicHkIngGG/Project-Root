import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
    <div className="sidebar">
      <h2>ADMIN</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/administracion">Administración</Link></li>
      </ul>
    </div>
  );
  
  export default Sidebar;