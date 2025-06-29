import React from 'react';
import { Analytics } from "@vercel/analytics/next"

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutServicesSection from './components/AboutServicesSection';
import PricingSection from './components/PricingSection';
import IndustriesWhySection from './components/IndustriesWhySection';
import FAQSection from './components/FAQSection';
import ContactFooterSection from './components/ContactFooterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutServicesSection />
      <PricingSection />
      <IndustriesWhySection />
      <FAQSection />
      <ContactFooterSection />
       <Analytics />
    </div>
  );
}

export default App;