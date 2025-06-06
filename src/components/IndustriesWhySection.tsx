import React from 'react';
import { Store, Truck, Wrench, Stethoscope, GraduationCap, Coffee, CheckCircle, Shield, Clock, Users, Headphones, Award } from 'lucide-react';

const IndustriesWhySection = () => {
  const industries = [
    { icon: Store, name: "Retail & E-commerce", description: "Online and physical stores" },
    { icon: Truck, name: "Trading & Import/Export", description: "Import/export businesses" },
    { icon: Wrench, name: "Construction & Contracting", description: "Building and contracting" },
    { icon: Stethoscope, name: "Healthcare & Medical", description: "Clinics and medical centers" },
    { icon: GraduationCap, name: "Education & Training", description: "Schools and training centers" },
    { icon: Coffee, name: "Food & Hospitality", description: "Restaurants and hospitality" }
  ];

  const clientTypes = [
    "Small Business Owners",
    "Freelancers & Consultants", 
    "Startups & Entrepreneurs",
    "Established Companies",
    "Non-Profit Organizations",
    "Individual Taxpayers"
  ];

  const whyChooseFeatures = [
    {
      icon: Shield,
      title: "Affordable & Transparent",
      description: "Fixed monthly fees with no hidden costs or surprise charges"
    },
    {
      icon: Award,
      title: "ZATCA Expertise",
      description: "Certified professionals with deep knowledge of Saudi tax regulations"
    },
    {
      icon: Clock, 
      title: "Fast & Reliable",
      description: "Quick turnaround times and always meet filing deadlines"
    },
    {
      icon: Users,
      title: "Local Experience", 
      description: "5+ years serving Saudi businesses with bilingual support"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Direct access to your tax professional, not a call center"
    },
    {
      icon: CheckCircle,
      title: "100% Compliant",
      description: "Stay fully compliant with all Saudi tax laws and regulations"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Who We Help Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Help
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            We serve businesses across all industries and individual taxpayers throughout Saudi Arabia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Industries */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <div className="bg-royal-blue/10 rounded-full p-3 w-fit mx-auto mb-4">
                    <industry.icon className="w-6 h-6 text-royal-blue" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{industry.name}</h4>
                  <p className="text-sm text-cool-gray">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Client Types */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Types of Clients</h3>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="space-y-4">
                {clientTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                    <span className="text-cool-gray font-medium">{type}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-royal-blue/5 rounded-lg text-center">
                <p className="text-cool-gray">
                  <strong>Serving 500+ satisfied clients</strong> across Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            We're not just another accounting firm - we're your dedicated tax partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
              <div className="bg-royal-blue/10 rounded-full p-4 w-fit mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{feature.title}</h3>
              <p className="text-cool-gray text-center leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWhySection;