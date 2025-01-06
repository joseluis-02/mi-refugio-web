import { Routes, Route, Navigate } from 'react-router-dom';
import { BookPage,BooksPage, SearchPage } from '../pages';

export const BibleRoutes = () => {
  return (
    <Routes>
        <Route path='books' element={ <BooksPage /> } />
        <Route path='book' element={ <BookPage /> } />
        <Route path='search' element={ <SearchPage /> } />

        {/*Cualquier otro ruta sera direccionado a books */}
        <Route path='/*' element={ <Navigate to="/bible/books" />} />
        
    </Routes>
  )
}
