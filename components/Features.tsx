import React from 'react';
import { TrendingDown, AlertTriangle, Truck, PhoneOff, BrainCircuit, MessageCircle, Map, Share2, Users, ShoppingBag, Store } from 'lucide-react';
import { Card, SectionTag } from './ui';

export const Features: React.FC = () => {
  return (
    <>
      {/* PROBLEM SECTION */}
      <section id="problem" className="py-20 bg-brand-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTag>The Problem</SectionTag>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">RTO Is Silently Killing Your Profit</h2>
              <p className="text-gray-400 text-lg mb-8">
                Cash on Delivery (COD) dominates Indian e-commerce, but it comes with a heavy price: high return rates, fake orders, and wasted logistics spend.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: TrendingDown, text: "High COD share in India leads to unpredictable returns" },
                  { icon: AlertTriangle, text: "Rising fake orders and incomplete addresses" },
                  { icon: Truck, text: "Every failed delivery wastes shipping, packaging, and time" },
                  { icon: PhoneOff, text: "Manual calling verification is slow and doesn't scale" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 bg-red-500/10 p-1.5 rounded text-red-400">
                      <item.icon size={18} />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-3xl rounded-full"></div>
              <div className="relative bg-brand-card border border-brand-border p-8 rounded-2xl shadow-2xl">
                <div className="text-center mb-8">
                   <h3 className="text-5xl font-bold text-white mb-2">30-40%</h3>
                   <p className="text-red-400 font-medium">Average COD RTO Rate</p>
                   <p className="text-xs text-gray-500 mt-1">in fashion & impulse categories</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10 flex justify-between items-center">
                    <span className="text-gray-300">Cost of Shipping</span>
                    <span className="text-white font-mono">₹80 - ₹120</span>
                  </div>
                  <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10 flex justify-between items-center">
                    <span className="text-gray-300">Cost of Return</span>
                    <span className="text-white font-mono">₹100+</span>
                  </div>
                  <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 text-center">
                     <span className="text-red-300 font-semibold">Total Loss per RTO: ₹200+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionTag>Our Solution</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">AI That Protects Every COD Order Before It Ships</h2>
            <p className="text-gray-400 text-lg">Stop relying on gut feeling. Let data and automation filter out the noise so you ship only genuine orders.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card gradient className="h-full">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400">
                <BrainCircuit size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI RTO Risk Scoring</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We score every new COD order using historical RTO data, pin-code performance, courier success rates, and order behavior to highlight risky shipments instantly.
              </p>
            </Card>

            <Card className="h-full">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 text-green-400">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp Verification Bot</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automatically send a friendly WhatsApp message to high-risk customers asking them to confirm the order, address, and availability—no manual calling needed.
              </p>
            </Card>

            <Card className="h-full">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                <Map size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hyperlocal Risk Map</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                See which pin-codes and areas are driving the most RTO. Optimize COD availability, add extra verification, or block chronic offenders with one click.
              </p>
            </Card>

            <Card className="h-full">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 text-orange-400">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Shared Fraud Network</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                An anonymized, privacy-safe network that helps merchants avoid repeat COD abusers and serial fake address customers across the ecosystem.
              </p>
            </Card>
          </div>
        </div>
      </section>

       {/* USE CASES */}
       <section className="py-20 bg-brand-card/30 border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Built for Modern Indian Ecommerce Teams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-dark p-6 rounded-xl border border-gray-800">
              <Users className="w-10 h-10 text-pink-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">D2C Fashion & Apparel</h3>
              <p className="text-gray-400 text-sm">High COD share and impulse buying make fashion one of the most RTO-heavy categories. Cut avoidable returns.</p>
            </div>
            <div className="bg-brand-dark p-6 rounded-xl border border-gray-800">
              <ShoppingBag className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Electronics & Gadgets</h3>
              <p className="text-gray-400 text-sm">Protect higher ticket orders from fake COD attempts and unreachable customers. Secure your high-value inventory.</p>
            </div>
            <div className="bg-brand-dark p-6 rounded-xl border border-gray-800">
              <Store className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Local & Regional Brands</h3>
              <p className="text-gray-400 text-sm">Whether you ship 500 or 50,000 orders a month, AI-driven verification keeps your logistics cost under control.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};