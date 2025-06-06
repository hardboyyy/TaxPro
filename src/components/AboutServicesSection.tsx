import React from 'react';
import { Shield, Users, Clock, Calculator, FileText, BookOpen, CheckCircle } from 'lucide-react';

const AboutServicesSection = () => {
  const benefits = [
    "Fixed monthly fees with no hidden costs",
    "Bilingual support in Arabic and English", 
    "Direct communication with certified tax professionals",
    "ZATCA-compliant systems and processes",
    "Fast turnaround times for all filings"
  ];

  const services = [
    {
      icon: Calculator,
      title: "VAT Services",
      items: [
        "VAT registration and de-registration",
        "Monthly/quarterly VAT returns",
        "VAT compliance audits",
        "Input tax credit optimization"
      ]
    },
    {
      icon: FileText,
      title: "Tax Filing & Preparation",
      items: [
        "Corporate income tax returns",
        "Individual tax planning",
        "Tax advisory and consultation",
        "ZATCA e-invoicing setup"
      ]
    },
    {
      icon: BookOpen,
      title: "Basic Bookkeeping",
      items: [
        "Monthly financial statements",
        "Expense categorization",
        "Payroll processing",
        "Financial record maintenance"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* About Us Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Local Tax Partner in Saudi Arabia
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto mb-8">
            We specialize in helping small and medium businesses navigate Saudi Arabia's tax requirements with confidence and ease.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Businesses Choose Us</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-cool-gray text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <Shield className="w-12 h-12 text-royal-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">Licensed</div>
                <div className="text-cool-gray">SOCPA Certified</div>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-royal-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">Expert</div>
                <div className="text-cool-gray">Tax Professionals</div>
              </div>
              <div className="text-center col-span-2">
                <Clock className="w-12 h-12 text-royal-blue mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">5+ Years</div>
                <div className="text-cool-gray">Saudi Tax Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Comprehensive tax and accounting solutions tailored for Saudi businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-royal-blue/10 rounded-full p-4 w-fit mx-auto mb-6">
                <service.icon className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-cool-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSection;