import React from 'react';
import { ArrowRight, ShieldCheck, MessageSquare, MapPin } from 'lucide-react';
import { Button, SectionTag } from './ui';

export const Hero: React.FC = () => {
  return (
    <>
      <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[80px]"></div>
           <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <SectionTag>For Indian Ecommerce & D2C Brands</SectionTag>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Reduce COD RTO Losses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AI-Powered Order Protection</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                RTO Shield AI predicts risky COD orders before shipping, verifies customers on WhatsApp, and helps brands recover thousands of rupees every month.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                  Join Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth'})}>
                  Book Free Demo
                </Button>
              </div>

              <div className="flex flex-col gap-2">
                 <p className="text-sm text-gray-500 mb-4">No code. Quick setup. Ideal for Shopify & WooCommerce.</p>
                 <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      AI RTO Risk Scoring
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-cyan-400" />
                      Auto WhatsApp Verification
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      Hyperlocal Intelligence
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Visual - Abstract Dashboard/AI Card */}
            <div className="relative">
              <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                {/* Mock Header */}
                <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">LIVE MONITORING</div>
                </div>

                {/* Mock Alert Item */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                   <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <div className="bg-red-500/20 p-2 rounded-md">
                           <ShieldCheck className="w-6 h-6 text-red-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-semibold">High Risk Order #10249</h4>
                           <p className="text-sm text-gray-400">Flag: Incomplete Address & Low Pincode Score</p>
                        </div>
                      </div>
                      <span className="text-red-400 font-bold text-sm">92% Risk</span>
                   </div>
                   <div className="mt-3 flex gap-2">
                      <div className="text-xs bg-red-900/40 text-red-200 px-2 py-1 rounded">Auto-Held</div>
                      <div className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">WhatsApp Sent</div>
                   </div>
                </div>

                {/* Mock Success Item */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                   <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <div className="bg-green-500/20 p-2 rounded-md">
                           <MessageSquare className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                           <h4 className="text-white font-semibold">Order Verified #10250</h4>
                           <p className="text-sm text-gray-400">Customer confirmed via WhatsApp</p>
                        </div>
                      </div>
                      <span className="text-green-400 font-bold text-sm">Safe</span>
                   </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-brand-card border border-brand-border p-4 rounded-xl shadow-xl flex items-center gap-3 animate-pulse">
                   <div className="text-3xl font-bold text-white">₹45k</div>
                   <div className="text-xs text-gray-400 leading-tight">Saved this<br/>week</div>
                </div>

              </div>
              {/* Decorative back elements */}
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-dashed border-gray-800 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <div className="border-y border-gray-800 bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">Built for fast-growing Ecommerce & D2C brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos constructed with CSS/Text for simplicity */}
             <div className="text-xl font-bold text-white font-serif flex items-center gap-2"><span className="w-6 h-6 bg-white rounded-full"></span> VOGUE STYLE</div>
             <div className="text-xl font-bold text-white font-sans flex items-center gap-2"><div className="w-6 h-6 bg-white rotate-45"></div> TECHGEAR</div>
             <div className="text-xl font-bold text-white font-mono flex items-center gap-2"><span className="w-6 h-6 border-2 border-white rounded-md"></span> URBAN FIT</div>
             <div className="text-xl font-bold text-white flex items-center gap-2">☘️ ORGANIC LIFE</div>
          </div>
        </div>
      </div>
    </>
  );
};