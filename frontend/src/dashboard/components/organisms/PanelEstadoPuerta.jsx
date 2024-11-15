import React from 'react';
import EstadoPuerta from '../molecules/EstadoPuerta';
import Button from '../atoms/Button';

const PanelEstadoPuerta = () => {
  const handleButtonClick = () => {
    alert('Chapa eléctrica activada');
  };

  return (
    <div className="panel-estado-puerta">
      <h2>ESTADOS DE LA PUERTA</h2>
      <div className="estado-puerta">
        <EstadoPuerta nombre="LABORATORIO 114" estado="EN LÍNEA" />
      </div>
      <Button onClick={handleButtonClick} label="ABRIR CHAPA ELECTRICA" />
    </div>
  );
};

export default PanelEstadoPuerta;