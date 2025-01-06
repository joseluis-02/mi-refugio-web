import {FC, ReactNode} from 'react';
import { Navigate } from 'react-router-dom';
interface Props {
    children: ReactNode;
}
export const PublicRoutes:FC<Props>  = ({children}) => {
    /*
    const {} = useContex(AuthContext);
    Si está logueado no permitir salir a login
    */
    const login:boolean = true;
    return (login)
          ? children
          : <Navigate to="/bible/books" />; 
}
