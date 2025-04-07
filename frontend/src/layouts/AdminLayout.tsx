import React from 'react';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className="AdminLayout">
      <header>
        <h1>Admin Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 OpenTelemetry Full-Stack Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
