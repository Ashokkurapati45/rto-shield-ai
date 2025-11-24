import React from 'react';
import { Plug, ScanSearch, MessageCircle, PackageCheck, ArrowRight } from 'lucide-react';
import { SectionTag } from './ui';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Plug,
      title: "Connect Your Store",
      desc: "Connect Shopify, WooCommerce, or custom store via API or CSV."
    },
    {
      icon: ScanSearch,
      title: "AI Scores Each Order",
      desc: "New COD orders are instantly scored for RTO risk using our AI engine."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Confirms",
      desc: "Risky orders get a WhatsApp message. Customers tap to confirm or cancel."
    },
    {
      icon: PackageCheck,
      title: "Ship with Confidence",
      desc: "Only ship verified orders. Track savings and reduction from your dashboard."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <SectionTag>Simple Process</SectionTag>
          <h2 className="text-3xl md:text-5xl font-bold text-white">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-900 via-blue-900 to-cyan-900 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-brand-card border border-gray-700 rounded-full flex items-center justify-center mb-6 group-hover:border-cyan-500 transition-colors duration-300 shadow-xl">
                <step.icon className="w-10 h-10 text-cyan-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center font-bold text-white text-sm border-4 border-brand-dark">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};