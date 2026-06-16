// src/layouts/DashboardLayout.tsx
import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {/* Dashboard content will go here */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;