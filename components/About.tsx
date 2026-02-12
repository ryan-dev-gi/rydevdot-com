/** @jsxImportSource react */
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, Plus, GraduationCap } from 'lucide-react';

interface AboutProps {
  onShowMore: () => void;
}

export default function About({ onShowMore }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/30 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative fade-in">
            {/* 3D Floating Effect Container */}
            <div className="relative animate-float-rotate-3d">
              <div className="aspect-square rounded-[3.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(99,102,241,0.1)] group transition-all duration-500 hover:border-indigo-500/50">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt="Cerda Ryan Portrait" 
                  className="w-full h-full object-cover rounded-[3rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Backglow */}
              <div className="absolute -inset-4 bg-indigo-500/10 blur-[80px] -z-10 rounded-full animate-glow-pulse" />
            </div>

            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-[2rem] border border-slate-200 dark:border-indigo-500/20 shadow-xl dark:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400 block">BSIT</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Graduate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="inline-block px-4 py-1 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Who is Ryan?
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tighter">
              A Passionate <br />
              <span className="gradient-text">Web Developer</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-light font-sans">
              Based in {PERSONAL_INFO.location}, I am a recent {PERSONAL_INFO.title} with a strong foundation in modern web technologies and a mission to contribute positively to high-performing teams.
            </p>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {PERSONAL_INFO.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-indigo-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <button 
                  onClick={onShowMore}
                  className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all group hover:scale-105"
                >
                  <Plus size={18} className="group-hover:rotate-90 transition-transform" />
                  <span>VIEW FULL PROFILE</span>
                </button>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center space-x-2 text-slate-500 dark:text-slate-400 font-bold hover:text-indigo-600 dark:hover:text-white transition-colors group py-4 px-2"
                >
                  <span>LET'S COLLABORATE</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}