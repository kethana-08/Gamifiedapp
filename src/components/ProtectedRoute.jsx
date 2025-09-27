import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user === undefined) {
    // Still verifying auth state; show loading or nothing
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
}
