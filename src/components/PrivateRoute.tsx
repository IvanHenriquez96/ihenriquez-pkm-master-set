import React from "react";
import { Navigate } from "react-router-dom"; // Importa Navigate de react-router-dom
import { useAuth } from "../context/AuthContext"; // Importa tu hook useAuth

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAuth();

  // 1. Manejar el estado de carga inicial
  // Mientras Firebase está verificando si hay un usuario autenticado,
  // mostramos un mensaje de carga para evitar un "parpadeo" o redirección incorrecta.
  if (loading) {
    return <div>Cargando autenticación...</div>; // Puedes reemplazar esto con un spinner o un componente de carga más elegante.
  }

  // 2. Verificar si hay un usuario autenticado
  // Si 'loading' es falso y 'currentUser' es null, significa que no hay usuario logeado.
  // En este caso, redirigimos al usuario a la página de login.
  if (!currentUser) {
    // <Navigate to="/login" replace /> redirige a la URL especificada.
    // 'replace' evita que la página protegida se agregue al historial del navegador.
    // Así, si el usuario presiona "atrás" en el navegador, no volverá a la página protegida sin autenticarse.
    return <Navigate to="/welcome" replace />;
  }

  // 3. Si el usuario está autenticado, renderiza el contenido de la ruta protegida
  // Si llegamos a este punto, significa que 'loading' es false y 'currentUser' no es null.
  // Por lo tanto, el usuario está autenticado y puede ver el contenido de la ruta.
  return <>{children}</>;
};

export default PrivateRoute;
