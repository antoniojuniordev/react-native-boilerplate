import React from 'react';
import { Text, View } from 'react-native';

function Login() {
  const { login } = useContext(AuthContext);

  async function sendLogin() {
    login();
    setData(respose.data);
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 22 }}>tela 1</Text>
    </View>
  );
}

export default Login;
