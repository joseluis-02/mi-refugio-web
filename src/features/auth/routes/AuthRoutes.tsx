
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, SignupPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='signup' element={ <SignupPage /> } />

        {/*Cualquier otro ruta sera direccionado a Login */}
        <Route path='/*' element={ <Navigate to="/auth/login" />} />
    </Routes>
  )
}