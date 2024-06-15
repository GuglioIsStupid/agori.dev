import React from 'react';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';

// Error pages
/* import Error404 from './components/error-codes/404'; */

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
