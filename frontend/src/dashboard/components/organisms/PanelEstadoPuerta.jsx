import React, { useState } from 'react';
import EstadoPuerta from '../molecules/EstadoPuerta';
import Button from '../atoms/Button';

const PanelEstadoPuerta = () => {
  const [estadoChapa, setEstadoChapa] = useState('CERRADO');

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://192.168.40.102:5000/api/activar_chapa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accion: 'abrir' }),
      });

      const data = await response.json();
      if (data.status === 'success') {
        setEstadoChapa('ABIERTO');
        setTimeout(() => {
          setEstadoChapa('CERRADO');
        }, 2000); // Cambia el estado a 'CERRADO' después de 2 segundos
      } else {
        alert('Error al abrir la chapa');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="panel-estado-puerta">
      <h2>ESTADOS DE LA PUERTA</h2>
      <div className="estado-puerta">
        <EstadoPuerta nombre="LABORATORIO 114" estado={estadoChapa} />
      </div>
      <Button onClick={handleButtonClick} label="ABRIR CHAPA ELECTRICA" />
    </div>
  );
};

export default PanelEstadoPuerta;
