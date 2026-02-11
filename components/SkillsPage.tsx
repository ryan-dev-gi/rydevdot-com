/** @jsxImportSource react */
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, 
  Terminal, 
  Code2,
  Palette,
  Server,
  Layout,
  Zap,
  Smartphone
} from 'lucide-react';
import { SERVICES } from '../constants';

interface SkillsPageProps {
  onBack: () => void;
}

const iconMap: Record<string, any> = {
  Palette,
  Code2,
  Zap, 
  Smartphone 
};

/**
 * A sub-component that handles the "reveal bounce" animation when an icon enters the viewport.
 */
const AnimatedIcon: React.FC<{ children: React.ReactNode, className: string }> = ({ children, className }) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        if (iconRef.current) observer.unobserve(iconRef.current);
      }
    }, { 
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    });

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={iconRef} 
      className={`${className} transition-opacity duration-300 ${hasBeenVisible ? 'animate-subtle-bounce' : 'opacity-0 scale-75'}`}
    >
      {children}
    </div>
  );
};

const SkillsPage: React.FC<SkillsPageProps> = ({ onBack }) => {
  const technicalStack = [
    { 
      category: 'Frontend Development', 
      icon: Layout,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'text-blue-500'
    },
    { 
      category: 'Backend & Database', 
      icon: Server,
      items: ['Node.js', 'Python', 'PostgreSQL', 'Firebase'],
      color: 'text-emerald-500'
    },
    { 
      category: 'Tools & Workflow', 
      icon: Terminal,
      items: ['VS Code', 'Git / Github', 'Vercel'],
      color: 'text-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 z-[60] relative transition-colors duration-500 pb-32 fade-in">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold mb-16 hover:text-indigo-500 dark:hover:text-indigo-300 transition-all hover:-translate-x-1"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="max-w-4xl mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Technical Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Capabilities & <br />
            <span className="gradient-text">Technologies.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Leveraging a broad spectrum of modern tools to build exceptional digital experiences. 
            From interactive frontends to robust database systems.
          </p>
        </div>

        {/* Technical Stack Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {technicalStack.map((stack, idx) => (
            <div
              key={idx}
              className="glass p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-xl group hover:border-indigo-500/30 transition-all hover:-translate-y-2"
            >
              <AnimatedIcon
                className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6"
              >
                <stack.icon size={28} className="transition-transform group-hover:scale-110" />
              </AnimatedIcon>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">{stack.category}</h3>
              <div className="space-y-4">
                {stack.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 transition-all group-hover/item:scale-150 group-hover/item:bg-indigo-400" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium transition-colors group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA Card */}
        <div className="mt-32 p-12 md:p-20 rounded-[4rem] bg-indigo-600 text-white shadow-3xl shadow-indigo-600/30 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-white/10 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter relative z-10">
            Ready to scale your <br />
            digital presence?
          </h2>
          <button
            className="px-12 py-5 rounded-2xl bg-white text-indigo-600 font-black tracking-widest uppercase text-xs shadow-2xl relative z-10 hover:scale-105 transition-transform active:scale-95"
          >
            Start Collaboration
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;