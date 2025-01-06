import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

export const PrivateRoutes = ({children}: Props ) => {
    /*
    const {} = useContex(AuthContext);
    Si no está logueado no permitir entrar a rutas privadas
    */
   const login:boolean = false;
  return (login)
        ? children
        : <Navigate to="/auth/login" replace />;
}
