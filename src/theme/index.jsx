import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#D32F2F", // Rouge ENSIAS
      light: "#FF6659",
      dark: "#9A0007",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF", // Blanc
      light: "#FFFFFF",
      dark: "#C7C7C7",
      contrastText: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
    text: {
      primary: "#333333",
      secondary: "#757575",
    },
    // Couleurs additionnelles pour l'accent
    accent: {
      main: "#B71C1C", // Rouge foncé pour certains accents
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;