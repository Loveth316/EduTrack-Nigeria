// src/components/layout/Header.tsx
import React from 'react';
import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900">Welcome to EduTrack Nigeria</h1>
      <div className="flex items-center space-x-6">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiBell size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiUser size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FiLogOut size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;