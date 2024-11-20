import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as v7_relativeSplatPath } from 'react-router-dom';
import { BrowserRouter as v7_startTransition } from 'react-router-dom';
import Navbar from '/src/Navbar.jsx';
import Home from '/src/pages/Home.jsx';
import Menu from '/src/pages/Menu.jsx';
import About from '/src/pages/About.jsx';
import Location from '/src/pages/Location.jsx';
import Contact from '/src/pages/Contact.jsx';
import CardsPage from '/src/pages/Cardspage.jsx'
import '/src/App.css';


const App = () => {
  return (
    <Router future={{ v7_relativeSplatPath, v7_startTransition: true }}> 
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>  
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

