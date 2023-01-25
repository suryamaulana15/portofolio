import { Urbanist } from '@next/font/google';
import { experimental_extendTheme  as extendTheme } from '@mui/material/styles';

export const urbanist = Urbanist({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#238AE4',
        },
        secondary: {
          main: '#FFB420',
          contrastText: '#FFFFFF'
        },
        text: {
          primary: '#1D2002',
          secondary: '#667888',
          disabled: '#D6DDE8'
        },
        background: {
          paper: '#F8FAFE'
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#238AE4',
        },
        secondary: {
          main: '#FFB420',
          contrastText: '#FFFFFF'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#BBBBBB',
          disabled: '#8F8F8F'
        },
        background: {
          paper: '#2D2D2D'
        }
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          textTransform: 'none',
          fontSize: '16px',
        })
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({theme}) => ({
          backgroundColor: '#FFFFFF',
          color: '#000000',
          [theme.getColorSchemeSelector('dark')] : {
            backgroundColor:  '#121212',
            color: '#FFFFFF'
          }
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: ({theme}) => ({
          color: 'var(--mui-palette-text-primary)'
        })
      }
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          margin: '-20px 0px'
        }
      })
    }
  },
  typography: {
    fontFamily: urbanist.style.fontFamily,
  },
});

export default theme;
