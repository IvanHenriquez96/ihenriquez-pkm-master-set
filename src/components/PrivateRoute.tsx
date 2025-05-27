import React from "react";
import { Navigate } from "react-router-dom"; // Importa Navigate de react-router-dom
import { useAuth } from "../context/AuthContext"; // Importa tu hook useAuth

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/welcome" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
