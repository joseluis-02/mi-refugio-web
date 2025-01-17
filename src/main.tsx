import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import { theme } from './theme';
import { store } from './store';
import { App } from './App';


createRoot( document.getElementById( 'root' )! )
.render(
    <StrictMode>
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>
                <BrowserRouter>
                    <CssBaseline/>
                    <App />
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </StrictMode>
);
