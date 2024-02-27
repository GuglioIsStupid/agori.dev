import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

import BlogPost from './pages/BlogPost';

// Error pages
import Error404 from './components/error-codes/404';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
