import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Bio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
