/** @jsxImportSource react */
import React from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Code
} from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsPageProps {
  onBack: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 z-[60] relative transition-colors duration-500 pb-32 fade-in">
      {/* Dynamic Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-indigo-600/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold mb-16 hover:text-indigo-500 dark:hover:text-indigo-300 transition-all hover:-translate-x-1"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="max-w-4xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Portfolio Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">
            Crafting Digital <br />
            <span className="gradient-text">Masterpieces.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            A collection of high-performance web applications, creative designs, and scalable solutions built with modern technology stacks.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="animate-float group glass rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl hover:border-indigo-500/30 transition-all flex flex-col hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.8}s` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="flex space-x-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-light mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto space-y-6">
                  <div className="flex items-center space-x-3 text-slate-400">
                    <Code size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Powered by</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl group-hover:border-indigo-500/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;