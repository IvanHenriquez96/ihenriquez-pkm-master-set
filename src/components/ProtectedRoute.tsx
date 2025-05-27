// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importa tu hook de autenticación

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth(); // Obtén el usuario y el estado de carga del contexto

  // 1. Muestra un indicador de carga mientras Firebase verifica la sesión.
  //    Esto evita que la página "pública" se muestre brevemente antes de la redirección.
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // 2. Si no hay usuario autenticado después de que la carga ha terminado,
  //    redirige al usuario a la página de bienvenida (`/welcome`).
  if (!currentUser) {
    return <Navigate to="/welcome" replace />; // 'replace' evita que el usuario pueda volver con el botón atrás del navegador
  }

  // 3. Si hay un usuario autenticado, renderiza el contenido de la ruta protegida.
  return <>{children}</>;
};

export default ProtectedRoute;
