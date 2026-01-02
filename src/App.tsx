import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-[#0f1014]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'Home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <Services />
          <Industries />
          <About />
        </>
      )}

      {currentPage === 'Services' && (
        <div className="pt-16">
          <Services />
        </div>
      )}

      {currentPage === 'Industries' && (
        <div className="pt-16">
          <Industries />
        </div>
      )}

      {currentPage === 'About Us' && (
        <div className="pt-16">
          <About />
        </div>
      )}

      {currentPage === 'Blogs' && (
        <div className="pt-16">
          <ComingSoon />
        </div>
      )}

      {currentPage === 'Contact' && (
        <div className="pt-16">
          <Contact />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
