import './styles/App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';

// MUI
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

// Custom theme
const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      sm:  576,     // Small devices (portrait tablets and large phones)
      md:  768,     // Medium devices (landscape tablets, small laptops)
      lg:  1024,    // Large devices (laptops, desktops)
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {/* Home Page Route */}
            <Route path='/' element={<Home />} />
            {/* Employees Page Route */}
            <Route path='/employees' element={<Employees />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider> 
  </React.StrictMode>,
)