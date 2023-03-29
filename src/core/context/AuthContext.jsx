import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [data, setData] = useState('');

  async function login(email, password) {
    const respose = await useFetch({
      method: 'post',
      url: '/login',
      body: { email: email, password: password },
    });
    setUser(respose.data.token);
    setToken(respose.data.user);
  }

  return (
    <AuthContext.Provider value={(token, data, setData, login, user)}>
      {children}
    </AuthContext.Provider>
  );
}
