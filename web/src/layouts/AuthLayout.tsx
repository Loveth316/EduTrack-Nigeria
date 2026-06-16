// src/layouts/AuthLayout.tsx
import React from 'react';

const AuthLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="w-full max-w-md">
        {/* Auth content will go here */}
        <h1 className="text-white text-3xl font-bold text-center">EduTrack Nigeria</h1>
      </div>
    </div>
  );
};

export default AuthLayout;