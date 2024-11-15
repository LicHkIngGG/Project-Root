import React from 'react';
import Button from '../atoms/Button';


const DoorStatusCard = () => (
  <div className={styles.card}>
    <h2 className={styles.title}>LA PUERTA ESTADO</h2>
    <div className={styles.status}>
      <span>PUERTA</span>
      <span>LABORATORIO 114</span>
      <span>EN LINEA</span>
      <span>FUERA DE LINEA</span>
    </div>
    <div className="flex justify-center">
      <Button>ABRIR CHAPA ELECTRICA</Button>
    </div>
  </div>
);

export default DoorStatusCard;
