/** @jsxImportSource react */
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Cpu, Braces, ChevronRight, Globe, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [easedPosition, setEasedPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);
      setMousePosition({ x, y });
    };

    const animate = () => {
      setEasedPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition]);

  const codeSnippets = [
    "class WebArchitect extends RyDev {",
    "  constructor() {",
    "    super();",
    "    this.vision = 'Excellence';",
    "    this.stack = ['React', 'TS', '3D'];",
    "  }",
    "  async render() {",
    "    const ui = await this.build();",
    "    return ui.animate();",
    "  }",
    "}",
    "// Initializing core systems...",
    "console.log('RyDev V3.1: ONLINE');",
    "const app = new WebArchitect();",
    "app.render();"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-500 perspective-2000">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 pointer-events-none preserve-3d">
        <div 
          className="absolute inset-0 w-full h-full preserve-3d"
          style={{ transform: `rotateX(${easedPosition.y * 2}deg) rotateY(${easedPosition.x * -2}deg)` }}
        >
          {/* Background elements - static position */}
          <div className="absolute top-[15%] left-[15%] text-indigo-500/10 dark:text-indigo-400/5" style={{ transform: 'translateZ(-400px)' }}>
            <Cloud size={300} strokeWidth={0.1} />
          </div>
          <div className="absolute bottom-[20%] right-[10%] text-purple-500/10 dark:text-purple-400/5" style={{ transform: 'translateZ(-350px)' }}>
            <Globe size={350} strokeWidth={0.05} />
          </div>
          
          {/* Static Glowing Nodes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-indigo-500/10 rounded-full blur-xl"
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translateZ(${Math.random() * -500}px)`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content side */}
          <div 
            className="flex flex-col items-start fade-in"
            style={{ 
              transform: `translate(${easedPosition.x * 15}px, ${easedPosition.y * 15}px) rotateY(${easedPosition.x * 2}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass border border-indigo-500/20 mb-8 bg-indigo-500/5">
              <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-black tracking-[0.3em] text-indigo-600 dark:text-indigo-400 uppercase">
                Digital Architect & Developer
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter text-slate-900 dark:text-white">
              Designing <br />
              <span className="gradient-text">the future.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-light max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="group bg-indigo-600 text-white px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center space-x-3 shadow-2xl shadow-indigo-600/20 hover:scale-105 transition-all"
              >
                <span>View Portfolio</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#contact" 
                className="glass border border-slate-200 dark:border-slate-800 hover:border-indigo-500 px-10 py-5 rounded-[2rem] font-black uppercase tracking-widest text-[10px] flex items-center justify-center transition-all text-slate-900 dark:text-white hover:scale-105"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Advanced 3D Laptop */}
          <div className="hidden lg:block relative h-[700px] perspective-2000 preserve-3d">
            <div 
              style={{ 
                transform: `rotateX(${easedPosition.y * -18}deg) rotateY(${easedPosition.x * 18}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
              className="relative w-full h-full flex items-center justify-center preserve-3d"
            >
              {/* Complex Ground Shadow */}
              <div 
                className="absolute bottom-16 w-[120%] h-32 bg-indigo-500/5 blur-[80px] rounded-full"
                style={{ transform: 'rotateX(90deg) translateZ(-120px)' }}
              />

              <div className="relative w-full max-w-2xl aspect-video flex items-center justify-center preserve-3d">
                
                {/* LAPTOP ASSEMBLY */}
                <div 
                  className="relative w-[550px] h-[380px] preserve-3d"
                  style={{ transform: 'rotateX(-2deg)' }}
                >
                  {/* Laptop Base (Body) */}
                  <div 
                    className="absolute bottom-0 w-full h-[350px] bg-slate-200 dark:bg-slate-800 rounded-3xl border-b-[10px] border-slate-400 dark:border-slate-950 shadow-[0_40px_100px_rgba(0,0,0,0.5)] preserve-3d"
                    style={{ transform: 'rotateX(82deg) translateZ(0px)', transformOrigin: 'bottom' }}
                  >
                    {/* Keyboard Layout */}
                    <div className="absolute inset-8 pt-4">
                      <div className="grid grid-cols-12 gap-2 h-full">
                        {Array.from({length: 60}).map((_, i) => (
                          <div 
                            key={i} 
                            className={`h-4 rounded-md shadow-sm transition-colors duration-500 ${
                              Math.random() > 0.8 ? 'bg-indigo-500/40' : 'bg-slate-300 dark:bg-slate-700'
                            }`}
                            style={{ gridColumn: i % 12 === 0 ? 'span 2' : 'span 1' }} 
                          />
                        ))}
                      </div>
                    </div>
                    {/* Trackpad */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-24 bg-slate-300 dark:bg-slate-700/30 rounded-2xl border border-slate-400 dark:border-slate-600/50 shadow-inner" />
                  </div>

                  {/* Laptop Screen (Lid) */}
                  <div 
                    className="absolute top-[-175px] left-0 w-full h-[350px] bg-slate-900 rounded-3xl border-4 border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden preserve-3d"
                    style={{ transform: 'rotateX(-12deg) translateZ(5px)', transformOrigin: 'bottom' }}
                  >
                    {/* Screen Core */}
                    <div className="absolute inset-0 bg-[#020617] p-8 overflow-hidden code-scroller">
                      {/* Active Code Animation */}
                      <div className="font-mono text-[11px] leading-relaxed text-indigo-400/90 animate-code-scroll whitespace-nowrap">
                        {[...codeSnippets, ...codeSnippets, ...codeSnippets].map((line, i) => (
                          <div key={i} className="flex items-center space-x-4 py-0.5">
                            <span className="text-slate-600 w-4 select-none opacity-40">{i+1}</span>
                            <span className={line.startsWith('//') ? 'text-slate-500 italic' : line.includes('class') ? 'text-purple-400' : ''}>
                              {line}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Interactive HUD */}
                      <div className="absolute top-6 right-6 flex items-center space-x-3 opacity-60">
                        <div className="flex flex-col items-end">
                          <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">Compiler 4.0</span>
                          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter">Running</span>
                        </div>
                        <div className="w-2 h-8 bg-emerald-500/20 rounded-full overflow-hidden">
                          <div className="w-full h-1/2 bg-emerald-500" />
                        </div>
                      </div>
                      
                      {/* Volumetric Screen Glow Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-500/10 to-transparent blur-2xl" />
                    </div>
                  </div>
                </div>

                {/* Tech Widgets (Static relative to perspective) */}
                <div 
                  className="absolute inset-0 pointer-events-none preserve-3d"
                  style={{ transform: `translateZ(200px) translate(${easedPosition.x * 50}px, ${easedPosition.y * 50}px)` }}
                >
                  <div className="absolute top-[15%] -right-16">
                    <div className="glass px-5 py-3 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 shadow-2xl backdrop-blur-xl">
                      <div className="flex items-center space-x-3">
                        <Cpu size={20} className="text-indigo-400" />
                        <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">Neural.Core</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[25%] -left-20">
                    <div className="glass p-5 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 shadow-2xl">
                      <Braces size={32} className="text-indigo-400/60" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;