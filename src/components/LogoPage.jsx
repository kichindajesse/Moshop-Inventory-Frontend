import React from 'react';
import Logo from './Logo'; 
import LoginPage from './LoginPage';

function LogoPage() {
  return (
    <div>
      <Logo /> {/* render the logo component */}
      <LoginPage />
    </div>
  );
}

export default LogoPage;
