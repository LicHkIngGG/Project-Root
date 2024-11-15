import React from 'react';
import DashboardLayout from '../templates/DashboardLayout';
import DoorStatusCard from '../organisms/DoorStatusCard';

const AdminDashboard = () => (
  <DashboardLayout>
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">ESTADOS DE LA PUERTA</h1>
    </div>
    <DoorStatusCard />
  </DashboardLayout>
);

export default AdminDashboard;
