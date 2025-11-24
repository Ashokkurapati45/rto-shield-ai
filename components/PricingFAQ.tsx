import React, { useState } from 'react';
import { Check, Plus, Minus } from 'lucide-react';
import { Button, SectionTag, Card } from './ui';
import { FAQItem } from '../types';

export const PricingFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: "Is this only for COD orders?", answer: "Our main focus is COD, but we can also score prepaid orders for fraud risk." },
    { question: "Do I need a developer to set this up?", answer: "Basic setup uses simple plugins for Shopify/WooCommerce or CSV upload. Developers can use our API for deeper integration." },
    { question: "Will this reduce my overall orders?", answer: "Our goal is to reduce fake and low-intent orders while keeping genuine customers happy by using friendly verification instead of hard blocking." },
    { question: "Which platforms do you support?", answer: "We’re starting with Shopify, WooCommerce, and custom API integrations. More coming soon." },
    { question: "Is customer data safe?", answer: "Yes. We follow strict data security practices. Shared fraud network is opt-in and anonymized." },
    { question: "Can I try this as a pilot?", answer: "Yes. We’re onboarding a limited number of Indian D2C brands for our beta program." },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* PRICING */}
      <section id="pricing" className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionTag>Fair Pricing</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Pricing for Stores of Every Size</h2>
            <p className="text-gray-400 text-lg">Start with a pilot. Pay less than what one RTO shipment costs you.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Plan 1 */}
            <Card className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">Starter</h3>
                <p className="text-sm text-gray-400 mt-1">MSME & Small Stores</p>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-800">
                <span className="text-4xl font-bold text-white">₹2,999</span><span className="text-gray-500">/mo</span>
                <p className="text-xs text-cyan-400 mt-2">Up to 2,000 orders/mo</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Basic AI Scoring', 'WhatsApp Verification', 'Standard Dashboard', 'Email Support'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-cyan-500" /> {feat}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Join Starter Pilot</Button>
            </Card>

            {/* Plan 2 */}
            <Card gradient className="flex flex-col border-cyan-500/50">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-b-lg">MOST POPULAR</div>
              <div className="mb-4 mt-2">
                <h3 className="text-2xl font-bold text-white">Growth</h3>
                <p className="text-sm text-gray-400 mt-1">Fast-growing Brands</p>
              </div>
               <div className="mb-6 pb-6 border-b border-gray-800">
                <span className="text-4xl font-bold text-white">₹7,999</span><span className="text-gray-500">/mo</span>
                <p className="text-xs text-cyan-400 mt-2">Up to 10,000 orders/mo</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Advanced Risk Model', 'Priority WhatsApp API', 'Custom Risk Rules', 'Priority Support', 'Team Access'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white">
                    <Check className="w-4 h-4 text-cyan-400" /> {feat}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full shadow-cyan-500/25">Talk to Sales</Button>
            </Card>

            {/* Plan 3 */}
            <Card className="flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                <p className="text-sm text-gray-400 mt-1">Marketplaces & Large D2C</p>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-800">
                <span className="text-4xl font-bold text-white">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {['Custom AI Models', 'Dedicated Server Options', 'Advanced API Integrations', 'Dedicated Account Manager', 'SLA Support'].map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-cyan-500" /> {feat}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="w-full border border-gray-700">Book Strategy Call</Button>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-brand-card border border-gray-800 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-200">{faq.question}</span>
                  {openFaq === index ? <Minus className="w-5 h-5 text-cyan-400" /> : <Plus className="w-5 h-5 text-gray-500" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};