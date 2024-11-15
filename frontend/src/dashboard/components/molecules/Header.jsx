import React from 'react';
import Input from '../atoms/Input';

const Header = () => (
  <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6">
    <Input placeholder="Quick search..." />
  </header>
);

export default Header;
