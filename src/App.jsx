import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import footer from './components/footer';
import home from './pages/home';
import movies from './pages/movies';
 
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
 
export default App;