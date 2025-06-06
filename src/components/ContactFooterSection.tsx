import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Calendar, Clock, Star, Quote } from 'lucide-react';

const ContactFooterSection = () => {
  const serviceAreas = [
    "Riyadh", "Jeddah", "Dammam", "Khobar", "Dhahran", 
    "Mecca", "Medina", "Taif", "Buraidah", "Tabuk"
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      business: "Al-Rashid Trading Co.",
      text: "Professional service and very competitive prices. They handled our VAT registration perfectly and saved us so much time.",
      rating: 5
    },
    {
      name: "Sarah Mohammed", 
      business: "Tech Startup",
      text: "As a new business, their starter package was perfect. Great support in both Arabic and English. Highly recommended!",
      rating: 5
    },
    {
      name: "Khalid Abdullah",
      business: "Construction Company", 
      text: "Been using their services for 2 years. Always on time with filings and their advice has saved us money on taxes.",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-900 text-white">
      {/* Service Areas */}
      <div className="py-16 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Service Areas</h2>
            <p className="text-xl text-gray-300">
              Serving businesses across major Saudi cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {serviceAreas.map((city, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-accent-cyan mx-auto mb-2" />
                <span className="text-gray-200">{city}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-gray-800 rounded-xl p-6">
            <p className="text-lg text-gray-300 mb-2">
              <strong className="text-accent-cyan">Remote services available</strong> for clients nationwide
            </p>
            <p className="text-gray-400">
              Full digital service delivery with secure document sharing
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">
              Trusted by hundreds of Saudi businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent-cyan mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-royal-blue to-royal-blue-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Simplify Your Tax Compliance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a free 30-minute consultation to discuss your business needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-accent-cyan hover:bg-accent-cyan-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +966 XX XXX XXXX
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center text-blue-100">
            <div className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Phone Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Business Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">TaxPro Saudi Arabia</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <div>King Fahd Road, Riyadh</div>
                    <div>Saudi Arabia</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-cyan" />
                  <span>+966 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-cyan" />
                  <span>info@taxpro-sa.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-accent-cyan" />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li>VAT Registration & Filing</li>
                <li>Corporate Tax Returns</li>
                <li>ZATCA E-Invoicing</li>
                <li>Bookkeeping Services</li>
                <li>Tax Planning</li>
                <li>Payroll Processing</li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6">Business Hours</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent-cyan" />
                  <div>
                    <div>Sunday - Thursday</div>
                    <div>8:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div>Emergency support available</div>
                  <div>24/7 via WhatsApp</div>
                </div>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xl font-bold mb-6">Legal Information</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div>SOCPA License: XXXXXXX</div>
                <div>CR Number: XXXXXXXXXX</div>
                <div>VAT Number: 300XXXXXXXX0003</div>
                <div className="mt-6">
                  <div className="text-accent-cyan">Fully licensed and insured</div>
                  <div>Member of SOCPA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaxPro Saudi Arabia. All rights reserved. | Professional Tax Services in Saudi Arabia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooterSection;