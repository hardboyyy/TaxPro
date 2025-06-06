import React from 'react';
import { Calculator, Phone, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-royal-blue to-royal-blue-dark text-white py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Calculator className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Simple Tax Solutions for Saudi Small Businesses
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Stop struggling with VAT filings and tax paperwork. Get professional help at affordable prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-accent-cyan hover:bg-accent-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start from SAR 500/month
            </button>
            <div className="flex gap-4">
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">99%</div>
              <div className="text-blue-100">ZATCA Compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 text-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;