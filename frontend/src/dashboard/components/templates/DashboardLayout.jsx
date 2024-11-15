import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../molecules/Header';

const DashboardLayout = ({ children }) => (
  <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
    <Sidebar />
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        {children}
      </main>
    </div>
  </div>
);

export default DashboardLayout;
