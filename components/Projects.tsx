/** @jsxImportSource react */
import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-slate-900/10 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Case Studies
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white">Selected Works</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg font-light text-lg">
              A curated selection of projects demonstrating architectural precision and creative performance.
            </p>
          </div>
          <a 
            href="#contact" 
            className="mt-8 md:mt-0 text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.3em] text-[10px] flex items-center space-x-3 group"
          >
            <span>Custom Solution</span>
            <div className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group glass rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl transition-all flex flex-col hover:-translate-y-4 hover:shadow-indigo-500/10 tilt-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="flex space-x-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a href={project.link} target="_blank" className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 shadow-xl"><ExternalLink size={20} /></a>
                    {project.github && <a href={project.github} target="_blank" className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 border border-white/20"><Github size={20} /></a>}
                   </div>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 font-light mb-10 text-base leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-10">
                  <div className="flex items-center space-x-3 mb-4 opacity-40">
                    <Code size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl group-hover:border-indigo-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
                  >
                    Launch Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;