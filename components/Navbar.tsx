/** @jsxImportSource react */
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Facebook,
  Instagram,
  User, 
  Layout, 
  Send,
  Home,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'contact' | 'projects' | 'skills', sectionId?: string) => void;
  activePage: 'home' | 'about' | 'contact' | 'projects' | 'skills';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: 'top', type: 'home', icon: <Home size={16} /> },
    { name: 'About', href: 'about', type: 'about', icon: <User size={16} /> },
    { name: 'Projects', href: 'projects', type: 'projects', icon: <Layout size={16} /> },
    { name: 'Skills', href: 'skills', type: 'skills', icon: <Sparkles size={16} /> },
    { name: 'Contact', href: 'contact', type: 'contact', icon: <Send size={16} /> },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: any) => {
    e.preventDefault(); 
    if (link.type === 'home') {
      onNavigate('home', 'top');
    } else {
      onNavigate(link.type);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[70] transition-all duration-300 ${isScrolled || activePage !== 'home' ? 'py-4 glass border-b border-slate-200 dark:border-slate-800/50' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home', 'top')} 
          className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer text-slate-900 dark:text-white"
        >
          RYAN<span className="text-indigo-500">.DEV</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-1.5 space-x-1 shadow-sm">
            {navLinks.map((link) => {
              const isActive = activePage === link.type;
              return (
                <a 
                  key={link.name} 
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center space-x-2 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4 ml-4">
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-200 dark:border-slate-800 pl-4 h-6">
              <a href="https://github.com/ryan-dev-gi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.facebook.com/ryancerda.nye" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/prmo.ry/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-600/20 ml-2 hover:scale-105 transition-transform"
            >
              LET'S TALK
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass absolute top-full left-0 w-full py-8 flex flex-col items-center space-y-8 border-t border-slate-200 dark:border-slate-800 shadow-2xl fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link)}
              className="flex items-center space-x-3 text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
            >
              <span className="text-indigo-500 dark:text-indigo-400">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-slate-200 dark:border-slate-800 w-1/2 justify-center">
            <a href="https://github.com/ryan-dev-gi" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><Github /></a>
            <a href="https://www.facebook.com/ryancerda.nye" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><Facebook /></a>
            <a href="https://www.instagram.com/prmo.ry/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"><Instagram /></a>
          </div>
          <button
            onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }}
            className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold tracking-widest hover:scale-105 transition-transform"
          >
            LET'S TALK
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;