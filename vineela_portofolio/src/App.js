
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mascot from './components/Mascot';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CatchUp from './pages/CatchUp';
import './style.css';
export default function App() {
  return (
    <div className="dark container">
      <header>
        <div className="header-top">
          <h1>Vineela Ampili</h1>
        </div>
        <div className='mascot-wrapper'>
          <Mascot />
        </div>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/catch-up" element={<CatchUp />} />
        </Routes>
      </main>

      <footer>
        <p> Email: <a href="mailto:ampiliveela@gmail.com">ampiliveela@gmail.com</a> | GitHub <a href="https://github.com/vineela-afk" target="_blank" rel="noreferrer"></a>: vineela-afk</p>
      </footer>
    </div>
  );
}
