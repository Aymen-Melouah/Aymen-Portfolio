import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Gallery from './components/Gallery';
import CallToAction from './components/CallToAction';

import './App.css';

const App = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <CallToAction />
      
    </div>
  );
};

export default App;