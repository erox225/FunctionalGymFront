import React from 'react';
import { Platform } from 'react-native';
import LandingPage from './web/LandingPage';  // Para Web
import Login from './mobile/Login';  // Para Móviles

const App = () => {
    console.log('App.js cargado correctamente');
  if (Platform.OS === 'web') {
    return <LandingPage />;
  } else {
    return <Login />;
  }
};

export default App;
