import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SectionTag } from './ui';

const data = [
  { name: 'Week 1', rto: 35, savings: 5000 },
  { name: 'Week 2', rto: 32, savings: 12000 },
  { name: 'Week 3', rto: 25, savings: 24000 },
  { name: 'Week 4', rto: 20, savings: 35000 },
  { name: 'Week 5', rto: 15, savings: 48000 },
  { name: 'Week 6', rto: 12, savings: 62000 },
];

export const Dashboard: React.FC = () => {
  return (
    <section className="py-20 bg-brand-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <SectionTag>Real-time Analytics</SectionTag>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">See the Impact in One Clean Dashboard</h2>
            <p className="text-gray-400 text-lg mb-8">
              Track RTO reduction, verify performance, and watch your savings grow in real-time. No more spreadsheets.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-dark p-4 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-sm mb-1">Total COD Orders</div>
                <div className="text-2xl font-bold text-white">12,450</div>
              </div>
               <div className="bg-brand-dark p-4 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-sm mb-1">Money Saved</div>
                <div className="text-2xl font-bold text-green-400">₹4.2L</div>
              </div>
               <div className="bg-brand-dark p-4 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-sm mb-1">Avg RTO Rate</div>
                <div className="text-2xl font-bold text-cyan-400">12.5% <span className="text-xs text-gray-500 font-normal line-through">28%</span></div>
              </div>
               <div className="bg-brand-dark p-4 rounded-lg border border-gray-800">
                <div className="text-gray-500 text-sm mb-1">Auto-Verified</div>
                <div className="text-2xl font-bold text-white">8,920</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-brand-dark border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-white">Impact Analysis</h3>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Savings
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> RTO Rate
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorRto" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
                    <XAxis dataKey="name" stroke="#6b7280" tick={{fontSize: 12}} />
                    <YAxis stroke="#6b7280" tick={{fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="savings" stroke="#06b6d4" fillOpacity={1} fill="url(#colorSavings)" strokeWidth={2} />
                    <Area type="monotone" dataKey="rto" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorRto)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};