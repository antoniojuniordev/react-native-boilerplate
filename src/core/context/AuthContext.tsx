import React, { createContext, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({ token: '', user: '' });

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  return <AuthContext.Provider value={{ token, user }}>{children}</AuthContext.Provider>;
}
