import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
