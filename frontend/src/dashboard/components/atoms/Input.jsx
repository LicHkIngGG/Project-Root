import React from 'react';
import styles from '../styles/components/Input.module.css';

const Input = ({ placeholder }) => (
  <input type="search" className={styles.input} placeholder={placeholder} />
);

export default Input;
