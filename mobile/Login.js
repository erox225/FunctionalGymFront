// mobile/Login.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Iniciar Sesión</Text>
      <Button title="Entrar" onPress={() => { /* lógica de autenticación */ }} />
    </View>
  );
};

export default Login;
