// import { createTheme } from '@mui/material/styles';

// export const theme = createTheme({
//     palette: {
//       mode: 'dark',
//       primary: {
//         main: '#00c853',
//       },
//       secondary: {
//         main: '#ffff00',
//       },
//       text: {
//         primary: '#c62828',
//         secondary: '#ffebee',
//         disabled: '#bdbdbd',
//       },
//     },
//   }
// );
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
