import React from 'react';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';

function AppThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#8638a0',
      },
      secondary: {
        main: '#8638a00d',
      },

      background: {},
    },
    typography: {
      fontFamily: 'Inter, Roboto, sans-serif',
      lineHeight: 'normal',
      subtitle1: {
        fontSize: '1.375rem',
      },
      subtitle2: {
        fontSize: '1.125rem',
      },
      body1: {
        fontSize: '1rem',
      },
      h1: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
