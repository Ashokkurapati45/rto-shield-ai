import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Integrations } from './components/Integrations';
import { Dashboard } from './components/Dashboard';
import { PricingFAQ } from './components/PricingFAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import PrivacySection from './components/PrivacySection';
import TermsSection  from './components/TermsSection'
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-50 selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Integrations />
        <Dashboard />
        <PricingFAQ />
        <Contact />
        <PrivacySection />
        <TermsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;




