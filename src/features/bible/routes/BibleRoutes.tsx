import { Routes, Route, Navigate } from 'react-router-dom';
import BooksPage from '../pages/BooksPage';

export const BibleRoutes = () => {
  return (
    <Routes>
        <Route path='books' element={ <BooksPage /> } />

        {/*Cualquier otro ruta sera direccionado a books */}
        <Route path='/*' element={ <Navigate to="/bible/books" />} />
        
    </Routes>
  )
}
