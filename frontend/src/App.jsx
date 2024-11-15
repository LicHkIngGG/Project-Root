import React from 'react';
import EstadosPuertaPage from '../src/dashboard/components/pages/EstadosPuertaPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../src/dashboard/components/templates/DashboardLayout';

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<div>Inicio</div>} />
          <Route path="/registro" element={<div>Registro</div>} />
          <Route path="/calendar" element={<div>Calendar</div>} />
          <Route path="/reports" element={<div>Reports</div>} />
          <Route path="/administracion" element={<EstadosPuertaPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;