import React from 'react';
import '../atoms/Button.css';

const Button = ({ onClick, label }) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
