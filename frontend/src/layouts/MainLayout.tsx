import React from 'react';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="MainLayout">
      <header>
        <h1>Main Layout</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 OpenTelemetry Full-Stack Project. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
