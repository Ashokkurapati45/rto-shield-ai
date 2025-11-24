import React from 'react';
import { Button, SectionTag } from './ui';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-card/20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-card border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTag>Beta Program</SectionTag>
              <h2 className="text-3xl font-bold text-white mb-4">Join the Early Access Beta</h2>
              <p className="text-gray-400 mb-8">
                Get priority onboarding, custom setup help, and discounted pricing for life when you join our beta program.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">1</div>
                  <p className="text-sm text-gray-300 pt-1">Fill out the form with your store details.</p>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">2</div>
                  <p className="text-sm text-gray-300 pt-1">Our team will review and approve your slot.</p>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">3</div>
                  <p className="text-sm text-gray-300 pt-1">We'll reach out within 24-48 hours with onboarding steps.</p>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                <input type="text" className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                <input type="email" className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@brand.com" />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Brand Name</label>
                <input type="text" className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="My Awesome Store" />
              </div>

               <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Monthly Order Volume</label>
                <select className="w-full bg-brand-dark border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                  <option value="<500">&lt; 500 orders</option>
                  <option value="500-2000">500 - 2,000 orders</option>
                  <option value="2000-10000">2,000 - 10,000 orders</option>
                  <option value="10000+">10,000+ orders</option>
                </select>
              </div>

              <div>
                 <label className="block text-sm font-medium text-gray-400 mb-1">WhatsApp Number</label>
                 <div className="flex">
                    <span className="bg-gray-800 border border-r-0 border-gray-700 rounded-l-lg px-3 py-2 text-gray-400">+91</span>
                    <input type="tel" className="w-full bg-brand-dark border border-gray-700 rounded-r-lg px-4 py-2 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="98765 43210" />
                 </div>
              </div>

              <Button className="w-full mt-4">Apply for Early Access</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};