// src/components/layout/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiBook, FiUsers, FiBarChart3, FiSettings } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
    { icon: FiUsers, label: 'Classes', path: '/classes' },
    { icon: FiBook, label: 'Assessments', path: '/assessments' },
    { icon: FiBarChart3, label: 'Results', path: '/results' },
    { icon: FiSettings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">EduTrack</h2>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;