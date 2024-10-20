// web/LandingPage.js
import React from 'react';

const LandingPage = ({ navigation }) => {
  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <button onClick={() => window.location.href = '/login'}>Iniciar Sesión</button>
    </div>
  );
};

export default LandingPage;
