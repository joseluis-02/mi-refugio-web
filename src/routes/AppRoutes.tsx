
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../features/auth';
import { BibleRoutes } from '../features/bible';

export const AppRoutes = () => {

  return (
      <Routes>
        {/*

          <Route path='/bible/*' element={ 
            <PrivateRoutes>
              <BibleRoutes />
            </PrivateRoutes>
          } />
          <Route path='/auth/*' element={ 
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          } />
        */}

        {/*Rutas para módulo de auth*/}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/*Rutas para módulo de bible*/}
        <Route path="/bible/*" element={ <BibleRoutes /> } />
        
        {/*Cualquier otro ruta sera direccionado a Login */}
        <Route path="/*" element={ <Navigate to='/bible/books'/> } />
      
      </Routes>
  )
}