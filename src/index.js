import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

/* var themeColor = light;
export const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
}; */

export const themeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#00c853',
    },
    secondary: {
      main: '#ffff00',
    },
    text: {
      primary: '#c62828',
      secondary: '#ffebee',
      disabled: '#bdbdbd',
    },
  },
};

const theme = createTheme(themeOptions);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
