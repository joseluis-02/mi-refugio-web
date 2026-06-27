import { Routes, Route, Navigate } from 'react-router-dom';
import BooksPage from '../pages/BooksPage';
import GutimotosPolicyPage from '../pages/GutimotosPolicyPage';

export const BibleRoutes = () => {
  return (
    <Routes>
        <Route path='books' element={ <BooksPage /> } />
        <Route path='gutimotos' element={ <GutimotosPolicyPage /> } />

        {/*Cualquier otro ruta sera direccionado a books */}
        <Route path='/*' element={ <Navigate to="/bible/books" />} />
        
    </Routes>
  )
}
