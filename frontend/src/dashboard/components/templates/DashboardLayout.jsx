import React from 'react';
import Sidebar from '../organisms/Sidebar';

const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="content">
      {children}
    </div>
  </div>
);

export default DashboardLayout;