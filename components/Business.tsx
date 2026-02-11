/** @jsxImportSource react */
import React from 'react';
import { Palette, Code2, Zap, Smartphone, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Palette,
  Code2,
  Zap,
  Smartphone
};

const Business: React.FC = () => {
  return (
    <section id="business" className="py-24 relative bg-slate-50 dark:bg-transparent transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Business Solutions</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Strategic services designed to accelerate your growth and establish your digital dominance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <a
                key={service.id}
                href="#contact"
                className="p-8 rounded-3xl glass border border-slate-200 dark:border-slate-700 group hover:border-indigo-500/50 shadow-sm dark:shadow-none hover:shadow-xl transition-all block relative hover:-translate-y-2"
              >
                <div className="absolute top-6 right-6 text-slate-300 dark:text-slate-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  <ArrowUpRight size={20} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <IconComponent className="w-7 h-7 text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light mb-6">
                  {service.description}
                </p>
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Inquire Now
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Business;