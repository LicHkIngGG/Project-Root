import React from 'react';
import SidebarLinkGroup from '../molecules/SidebarLinkGroup';
import '../styles/components/Sidebar.module.css';

const Sidebar = () => (
  <aside className={styles.sidebar}>
    <div className={styles['sidebar-header']}>
      <a href="#" className={styles['sidebar-logo']}>
        <img src="/assets/react.svg" alt="Logo" height="40" width="40" className="rounded-lg" />
        <span>ADMIN</span>
      </a>
    </div>
    <div className={styles['sidebar-content']}>
      <SidebarLinkGroup />
    </div>
  </aside>
);

export default Sidebar;

