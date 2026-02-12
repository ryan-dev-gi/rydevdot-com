/** @jsxImportSource react */
import React from 'react';
import { 
  ArrowLeft, 
  Github, 
  Facebook, 
  Instagram,
  GraduationCap,
  Send,
  Trophy,
  Star,
  Rocket
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  const education = [
    { 
      school: 'Colegio De Montalban', 
      period: '2021-2025 (Graduate)', 
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      isLatest: true
    },
    { 
      school: 'Pambujan National High School (PNHS)', 
      period: '2019-2020', 
      degree: 'Information and Computer Technology (ICT)',
      isLatest: false
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 z-[60] relative transition-colors duration-500 pb-20 fade-in">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-rose-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold mb-12 hover:text-indigo-500 dark:hover:text-indigo-300 transition-all hover:-translate-x-1"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-[3rem] border border-slate-200 dark:border-indigo-500/20 p-8 shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600" />
              
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-lg">
                <img 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-3xl font-black tracking-tight">{PERSONAL_INFO.name}</h3>
                  <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{PERSONAL_INFO.title}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Age</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{PERSONAL_INFO.age}</span>
                </div>
                <div className="bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Date of Birth</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{PERSONAL_INFO.dob}</span>
                </div>
                <div className="bg-slate-100/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 col-span-2">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Birthplace</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">{PERSONAL_INFO.birthplace}</span>
                </div>
              </div>

              <div className="flex justify-center items-center px-2 mb-8 space-x-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/ryancerda.nye" },
                  { Icon: Instagram, href: "https://www.instagram.com/prmo.ry/" },
                  { Icon: Github, href: "https://github.com/ryan-dev-gi" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-500 hover:border-indigo-500/50 transition-all hover:scale-110">
                    <item.Icon size={20} />
                  </a>
                ))}
              </div>

              <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold flex items-center justify-center space-x-2 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] transition-all">
                <span>LET'S COLLABORATE</span>
                <Send size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Career Mission
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-800 dark:text-slate-100 italic">
                "{PERSONAL_INFO.bio}"
              </h2>
            </div>

            <div className="space-y-10">
              <h3 className="text-3xl font-black flex items-center space-x-4 text-slate-900 dark:text-white">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/20">
                  <GraduationCap size={24} />
                </div>
                <span>Education</span>
              </h3>

              <div className="space-y-6">
                {education.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="glass p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-600/30 transition-all relative overflow-hidden group shadow-sm hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {item.school}
                      </h4>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase ${
                        item.isLatest 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                      {item.degree}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
              {[
                { label: 'Technical Proficiency', value: 'High', icon: <Rocket size={20} /> },
                { label: 'Project Success', value: '100%', icon: <Star size={20} /> },
                { label: 'Community Contribution', value: 'Active', icon: <Trophy size={20} /> },
              ].map((stat, i) => (
                <div key={i} className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center shadow-sm hover:-translate-y-2 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-slate-500 dark:text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;