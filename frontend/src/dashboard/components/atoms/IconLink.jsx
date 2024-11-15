import React from 'react';
import styles from '../styles/components/IconLink.module.css';

const IconLink = ({ href, icon: Icon, children, active }) => (
  <a href={href} className={`${styles.link} ${active ? styles.active : ''}`}>
    <Icon className={styles.icon} />
    {children}
  </a>
);

export default IconLink;

