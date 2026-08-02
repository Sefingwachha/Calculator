import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || null);

  function login(newToken) {
    localStorage.setItem("adminToken", newToken);
    setToken(newToken);
  }

  function logout() {
    localStorage.removeItem("adminToken");
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}