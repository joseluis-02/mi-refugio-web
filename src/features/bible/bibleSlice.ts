import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Book } from './interfaces';

export interface BibleState {
  books: Book[];
  isLoading: boolean;
}

const initialState: BibleState = {
  books:[],
  isLoading:false,
}

export const bibleSlice = createSlice({
  name: 'bible',
  initialState,
  reducers: {
    startLoadingBooks: (state, action: PayloadAction<boolean>) =>{
      state.isLoading=action.payload;
    },
    setBooks: (state,  action: PayloadAction<Book[]> ) => {
      console.log(action);
      state.books = action.payload;
      console.log( state.books );
    },
  },
})

// Exponer acciones
export const { startLoadingBooks, setBooks  } = bibleSlice.actions

