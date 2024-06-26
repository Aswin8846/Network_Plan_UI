// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Example primary color (you can adjust or remove this)
    },
    secondary: {
      main: '#dc004e', // Example secondary color (you can adjust or remove this)
    },
    background: {
      default: 'linear-gradient(to bottom right, #000000, #333333)', // Linear gradient black background
    },
  },
});

export default theme;
