import './styles/App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          {/* Home Page Route */}
          <Route path='/' element={<Home />} />
          {/* Employees Page Route */}
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </Router>
  </React.StrictMode>,
)