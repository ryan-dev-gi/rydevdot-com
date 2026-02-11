/** @jsxImportSource react */
import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import Skeleton from './Skeleton';

const Testimonials: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#020617]/50 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Client Success
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
            Words from my <span className="gradient-text">partners.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {isLoading ? (
            // Skeleton State
            [1, 2].map((i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-4 mb-8">
                  <Skeleton className="w-16 h-16 rounded-2xl" />
                  <div className="space-y-2">
                    <Skeleton className="w-32 h-4 rounded-full" />
                    <Skeleton className="w-24 h-3 rounded-full" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Skeleton className="w-full h-4 rounded-full" />
                  <Skeleton className="w-full h-4 rounded-full" />
                  <Skeleton className="w-2/3 h-4 rounded-full" />
                </div>
              </div>
            ))
          ) : (
            // Loaded State
            TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl group hover:border-indigo-500/30 transition-all hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                        <Quote size={14} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-light italic leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;