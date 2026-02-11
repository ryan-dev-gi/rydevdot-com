/** @jsxImportSource react */
import React from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-200/50 dark:bg-slate-800/50 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
    </div>
  );
};

export default Skeleton;