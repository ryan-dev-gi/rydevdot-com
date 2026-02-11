/** @jsxImportSource react */
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Business from './components/Business';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import Preloader from './components/Preloader';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import { Github, Facebook, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'contact' | 'projects' | 'skills'>('home');
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const performScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setPendingSection(null);
    }
  }, []);

  useEffect(() => {
    if (currentPage === 'home' && pendingSection) {
      const timer = setTimeout(() => {
        performScroll(pendingSection);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingSection, performScroll]);

  useEffect(() => {
    if (currentPage !== 'home') {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  const handleNavigation = useCallback((page: 'home' | 'about' | 'contact' | 'projects' | 'skills', sectionId?: string) => {
    if (page === 'home') {
      setCurrentPage('home');
      if (sectionId) {
        setPendingSection(sectionId);
      } else {
        setPendingSection('top');
      }
    } else {
      setCurrentPage(page);
      setPendingSection(null);
    }
  }, []);

  if (isInitialLoading) {
    return <Preloader />;
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="fade-in">
            <main id="top">
              <Hero />
              <About onShowMore={() => handleNavigation('about')} />
              <Business />
              <Projects />
              <Testimonials />
              <Contact />
            </main>

            <footer className="py-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                  <div className="col-span-1 md:col-span-2">
                    <button 
                      onClick={() => handleNavigation('home', 'top')}
                      className="text-3xl font-black tracking-tighter mb-6 block text-slate-900 dark:text-white hover:opacity-80 transition-opacity"
                    >
                      RYAN<span className="text-indigo-500">.DEV</span>
                    </button>
                    <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed font-light">
                      Professional Web Developer committed to delivering excellence through innovation and technology. Let's create something together.
                    </p>
                    <div className="flex space-x-4">
                      {[
                        { Icon: Facebook, href: "https://www.facebook.com/ryancerda.nye" },
                        { Icon: Instagram, href: "https://www.instagram.com/prmo.ry/" },
                        { Icon: Github, href: "https://github.com/ryan-dev-gi" }
                      ].map(({ Icon, href }, i) => (
                        <a 
                          key={i} 
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500 transition-all hover:scale-110"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider">
                      <li><button onClick={() => handleNavigation('about')} className="hover:text-indigo-600 transition-colors">About Me</button></li>
                      <li><button onClick={() => handleNavigation('projects')} className="hover:text-indigo-600 transition-colors">Portfolio</button></li>
                      <li><button onClick={() => handleNavigation('skills')} className="hover:text-indigo-600 transition-colors">Skills</button></li>
                      <li><button onClick={() => handleNavigation('contact')} className="hover:text-indigo-600 transition-colors">Contact</button></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-[10px] mb-8">Direct Reach</h4>
                    <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                      <li className="flex flex-col">
                        <span className="text-[10px] uppercase text-slate-400 dark:text-slate-500 font-bold mb-1">Send an Email</span>
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-900 dark:text-white font-bold hover:text-indigo-600 transition-colors">{PERSONAL_INFO.email}</a>
                      </li>
                      <li className="flex flex-col">
                        <span className="text-[10px] uppercase text-slate-400 dark:text-slate-500 font-bold mb-1">Base</span>
                        <span className="text-slate-900 dark:text-white font-bold">{PERSONAL_INFO.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    © {new Date().getFullYear()} RYAN.DEV | ALL RIGHTS RESERVED
                  </p>
                  <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                    DESIGNED FOR EXCELLENCE
                  </p>
                </div>
              </div>
            </footer>
          </div>
        );
      case 'about':
        return <AboutPage onBack={() => handleNavigation('home', 'top')} />;
      case 'contact':
        return <ContactPage onBack={() => handleNavigation('home', 'top')} />;
      case 'projects':
        return <ProjectsPage onBack={() => handleNavigation('home', 'top')} />;
      case 'skills':
        return <SkillsPage onBack={() => handleNavigation('home', 'top')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500 selection:bg-indigo-500/30">
      <Navbar onNavigate={handleNavigation} activePage={currentPage} />
      {renderCurrentPage()}
      <ChatAssistant />
    </div>
  );
};

export default App;