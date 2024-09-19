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
        main: '#1c9c7c',
      },
      secondary: {
        main: '#9DF3C4',
      },

      background: {},
    },
    typography: {
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
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
