import React from 'react';
import styles from '../styles/components/Button.module.css';

const Button = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
