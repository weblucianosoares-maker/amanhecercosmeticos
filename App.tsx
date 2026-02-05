import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ComparisonSection from './components/ComparisonSection';
import KitSection from './components/KitSection';
import HowToUseSection from './components/HowToUseSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
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
        <ComparisonSection />
        <KitSection />
        <HowToUseSection />
        <TestimonialsSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;