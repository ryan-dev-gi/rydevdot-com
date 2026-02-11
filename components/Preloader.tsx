/** @jsxImportSource react */
import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[1000] bg-slate-50 dark:bg-[#020617] flex flex-col items-center justify-center transition-all duration-700 ${progress === 100 ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <div className="relative mb-12">
        <div className="text-5xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center">
          RYAN<span className="text-indigo-600">.DEV</span>
        </div>
        <div className="absolute -bottom-4 left-0 w-full flex justify-center">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
      
      <div className="w-64 space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Loading Assets</span>
          <span className="text-[10px] font-black text-indigo-600 font-mono">{Math.floor(progress)}%</span>
        </div>
        <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-[2px]">
          <div 
            className="h-full bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;