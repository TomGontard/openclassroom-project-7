import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Apartment from './pages/Apartment'
import About from './pages/About'
import Error from './pages/ErrorPage'
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apartment/:apartmentID" element={<Apartment />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
    </Router>
  </React.StrictMode>
);