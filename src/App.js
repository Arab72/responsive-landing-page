import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



const App = () => {
  return (
     <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
      </React.Fragment>
    
  );
}

export default App;
