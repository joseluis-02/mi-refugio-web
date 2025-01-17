import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BookResponse, VerseResponse, Book, BookByNameAndChapterResponse } from '../features/bible';

// Define a service using a base URL and expected endpoints
export const bibleApi = createApi({
  reducerPath: 'bibleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://bible-api.deno.dev/api' }),
  endpoints: (builder) => ({
    getBookByName: builder.query<BookResponse, string>({
      query: ( name ) => `/book/${name}`,
    }),

    getVerse: builder.query<VerseResponse, { name: string, chapter: number, verse: number }>({
      query: ( { name, chapter, verse } ) => `/read/rv1960/${name}/${chapter}/${verse}`,
    }),

    getVersesRange: builder.query<VerseResponse[], { name: string, chapter: number, start: number, end: number }>({
      query: ( { name, chapter, start, end } ) => `/read/rv1960/${name}/${chapter}/${start}-${end}`,
    }),

    getBooks: builder.query<Book[],void>({
      query: () => 'books',
      transformResponse: (data: BookResponse[]) => {
        //console.log(meta); // Información adicional proporcionada por el baseQuery
        //console.log(data); // Datos originales de la respuesta
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
        // Procesa y retorna los datos transformados según tus necesidades
        return books;
      },
    }),

    getBookByNameAndChapter: builder.query<VerseResponse[], { name: string, chapter:number }>({
      query: ({ name, chapter}) => `/read/rv1960/${name}/${chapter}`,
      transformResponse: (data: BookByNameAndChapterResponse) => {
        //console.log(meta); // Información adicional proporcionada por el baseQuery
        //console.log(data); // Datos originales de la respuesta
        const verses:VerseResponse[] = data.vers.map(
            (item:VerseResponse) => {
                return {
                  study:item.study,
                  id:item.id,
                  verse:item.verse,
                  number:item.number
                }
            }
        );
        // Procesa y retorna los datos transformados según tus necesidades
        return verses;
      },
    }),

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetBookByNameQuery, 
  useGetBooksQuery, 
  useGetBookByNameAndChapterQuery, 
  useGetVerseQuery,
  useGetVersesRangeQuery,
} = bibleApi