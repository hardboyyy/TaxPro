import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in ZATCA compliance?",
      answer: "ZATCA compliance includes proper VAT registration, accurate VAT return filing, e-invoicing system setup, maintaining compliant records, and ensuring all filings meet Saudi tax authority requirements. We handle all aspects to keep your business fully compliant."
    },
    {
      question: "How quickly can you process my VAT returns?",
      answer: "We typically process VAT returns within 3-5 business days once we receive all required documentation. For urgent filings, we offer same-day processing for an additional fee. We always ensure submissions are completed well before ZATCA deadlines."
    },
    {
      question: "Do you provide services in Arabic?",
      answer: "Yes, we provide full bilingual support in both Arabic and English. Our team includes native Arabic speakers who can assist with all communications, documentation, and explanations of Saudi tax requirements in your preferred language."
    },
    {
      question: "What if I need to cancel or change my plan?",
      answer: "You can change or cancel your plan at any time with 30 days' notice. There are no long-term contracts or cancellation fees. If you upgrade mid-month, we'll prorate the difference. We believe in flexible service that adapts to your business needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-cool-gray">
            Get answers to common questions about our tax services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-royal-blue flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-royal-blue flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-cool-gray leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-cool-gray text-lg mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="bg-royal-blue hover:bg-royal-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;