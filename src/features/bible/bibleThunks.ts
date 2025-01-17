import { AppDispatch } from '../../store'
import { setBooks, startLoadingBooks } from './bibleSlice';
import { Book, BookResponse } from '../bible/interfaces';

export const getBooks = () => {
    {/*getState:RootState*/}
    return async (dispatch:AppDispatch ) => {
        dispatch( startLoadingBooks(true) );

        // Todo: Realizar la petición a una api http
        const resp = await fetch(`https://bible-api.deno.dev/api/books`);
        const data:BookResponse[] = await resp.json();
        const books:Book[] = data.map(
            (item:BookResponse) => {
                return {
                    name:item.names[0],
                    abrev:item.abrev,
                    chapters:item.chapters,
                    testament:item.testament
                }
            }
        );
        dispatch( startLoadingBooks(false) );
        dispatch( setBooks( books ) );
    }
}