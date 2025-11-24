import React from 'react';
import { SectionTag, Card, Button } from './ui';
import { ArrowRight, Code, Upload, ShoppingBag, Store } from 'lucide-react';

export const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-24 bg-brand-dark border-b border-gray-800 relative">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
             <SectionTag>Integrations</SectionTag>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Plug & Play with Your Stack</h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               Native plugins for the world's most popular e-commerce platforms. 
               Get RTO protection up and running in less than 5 minutes without writing a single line of code.
             </p>
          </div>
          <div className="w-full md:w-auto">
             <Button variant="outline" className="w-full md:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
                Request API Access
             </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Shopify */}
          <Card className="group hover:border-[#95BF47]/50 transition-all duration-300">
             <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#95BF47]/10 flex items-center justify-center group-hover:bg-[#95BF47]/20 transition-colors">
                    <ShoppingBag className="w-8 h-8 text-[#95BF47]" />
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold bg-[#95BF47]/10 text-[#95BF47] uppercase tracking-wider">Popular</span>
             </div>
             
             <h3 className="text-xl font-bold text-white mb-2">Shopify</h3>
             <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
               Install our official Shopify App. Auto-sync orders, add risk tags, and manage verification from your Shopify Admin.
             </p>
             <a href="#" className="text-[#95BF47] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
               View App Store <ArrowRight className="w-4 h-4" />
             </a>
          </Card>

          {/* WooCommerce */}
          <Card className="group hover:border-[#96588a]/50 transition-all duration-300">
             <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#96588a]/10 flex items-center justify-center group-hover:bg-[#96588a]/20 transition-colors">
                    <Store className="w-8 h-8 text-[#96588a]" />
                </div>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">WooCommerce</h3>
             <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
               Lightweight WordPress plugin. Hooks directly into your checkout flow to flag risky COD orders instantly.
             </p>
             <a href="#" className="text-[#96588a] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
               Download Plugin <ArrowRight className="w-4 h-4" />
             </a>
          </Card>

          {/* Custom API */}
          <Card className="group hover:border-cyan-500/50 transition-all duration-300">
             <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Code className="w-8 h-8 text-cyan-400" />
                </div>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Custom API</h3>
             <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
               Building a custom storefront? Use our REST API to score orders and trigger verification workflows programmatically.
             </p>
             <a href="#" className="text-cyan-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
               Read Documentation <ArrowRight className="w-4 h-4" />
             </a>
          </Card>

          {/* CSV / Excel */}
          <Card className="group hover:border-orange-500/50 transition-all duration-300">
             <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Upload className="w-8 h-8 text-orange-400" />
                </div>
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Manual Upload</h3>
             <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
               No tech team? Simply export your orders to CSV/Excel and upload them to our dashboard for bulk scoring.
             </p>
             <a 
               href="#contact"
               onClick={(e) => {
                 e.preventDefault();
                 document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
               }} 
               className="text-orange-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all"
             >
               View Guide <ArrowRight className="w-4 h-4" />
             </a>
          </Card>

        </div>
      </div>
    </section>
  );
};