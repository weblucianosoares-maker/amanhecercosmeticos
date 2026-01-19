import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import KitSection from './components/KitSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <KitSection />
        <TestimonialsSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;