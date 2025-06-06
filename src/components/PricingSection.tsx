import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "500",
      period: "month",
      description: "Perfect for freelancers and small startups",
      features: [
        "Monthly VAT return filing",
        "Basic bookkeeping (up to 50 transactions)",
        "Email support",
        "ZATCA compliance included",
        "Quarterly business review"
      ],
      popular: false
    },
    {
      name: "Business", 
      price: "800",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Monthly VAT return filing",
        "Complete bookkeeping (up to 200 transactions)",
        "Corporate tax preparation",
        "Phone & email support",
        "ZATCA compliance included",
        "Monthly financial statements",
        "Tax planning consultation"
      ],
      popular: true
    },
    {
      name: "Complete",
      price: "1,200", 
      period: "month",
      description: "Comprehensive solution for established businesses",
      features: [
        "All Business plan features",
        "Unlimited transactions",
        "Payroll processing (up to 10 employees)",
        "Priority phone support",
        "ZATCA compliance included",
        "Weekly financial reports",
        "Dedicated account manager",
        "Tax audit support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Choose the plan that fits your business needs. All plans include ZATCA compliance and no setup fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular ? 'border-royal-blue transform scale-105' : 'border-gray-200 hover:border-royal-blue/50'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-royal-blue text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-cool-gray mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">SAR {plan.price}</span>
                    <span className="text-cool-gray ml-2">/{plan.period}</span>
                  </div>
                  <div className="text-sm text-cool-gray">+ VAT where applicable</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-cool-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-royal-blue hover:bg-royal-blue-dark text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 hover:bg-royal-blue hover:text-white text-gray-900 border-2 border-transparent hover:border-royal-blue'
                }`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-cool-gray text-lg mb-4">
            Need a custom solution? We offer tailored packages for larger businesses.
          </p>
          <button className="text-royal-blue hover:text-royal-blue-dark font-semibold text-lg transition-colors duration-300">
            Contact us for custom pricing →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;