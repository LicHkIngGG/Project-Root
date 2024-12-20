import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './dashboard/components/templates/DashboardLayout';
import EstadosPuertaPage from './dashboard/components/pages/EstadosPuertaPage';
import PanelRegistroAsistencia from './dashboard/components/organisms/PanelRegistroAsistencia';
import Calendario from './dashboard/components/organisms/Calendario';
import Login from './login/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  const handleLogin = (username, password) => {
    // Validación básica de credenciales
    if (username === 'caperto303@gmail.com' && password === '123') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Ruta de Login */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/administracion" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Rutas del Dashboard protegidas */}
        {isAuthenticated && (
          <Route
            path="/*"
            element={
              <DashboardLayout>
                <Routes>
                  <Route path="/registro" element={<PanelRegistroAsistencia />} />
                  <Route path="/calendar" element={<Calendario />} />
                  <Route path="/reports" element={<div>Reports</div>} />
                  <Route path="/administracion" element={<EstadosPuertaPage />} />
                </Routes>
              </DashboardLayout>
            }
          />
        )}

        {/* Redirección para rutas no encontradas */}
        <Route
          path="*"
          element={<Navigate to={isAuthenticated ? '/administracion' : '/'} replace />}
        />
      </Routes>
    </Router>
  );
};

// Eliminar cualquier duplicado de export default
export default App;
