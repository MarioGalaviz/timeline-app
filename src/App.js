
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box } from '@mui/material';
import Timeline from './componentes/Timeline';
import { data } from './data/data';

function App() {

  const themeObj = {

    palette: {
        type: 'light',
        primary: {
            main: '#283593',
            old: '#8656ac'
        },
        secondary: {
            main: '#938728',
        },
        analogous: {
            a: '#286a93',
            b: '#512893'
        },
        triadic: {
            a: '#872893',
            b: '#932834'
        },
        background: {
            default: '#e8eaf6',
            paper: '#9fa8da',
        },
    },
    typography: {
        fontFamily: '"PlusJakartaSans", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 500,
        },
    },
}


  const theme =  createTheme(themeObj)

  return (
    <div>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Typography variant='h1' align='center' sx={{ mt: 5, mb: 3 }}>Linea del tiempo cool</Typography>
                <Timeline />
            </Box>
            
        </ThemeProvider>
    </div>
  );
}

export default App;
