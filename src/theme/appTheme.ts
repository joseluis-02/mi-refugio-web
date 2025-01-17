import { createTheme } from '@mui/material';

export const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
        primary: {
          main: '#283593',
        },
        secondary: {
          main: '#4CAF50',
        },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#9E9E9E',
        },
    },
});
