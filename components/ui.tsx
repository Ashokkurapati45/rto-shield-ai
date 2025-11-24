import React, { ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-primary";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 border border-transparent",
    secondary: "bg-brand-card hover:bg-gray-800 text-white border border-gray-700",
    outline: "bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950/30",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-gray-800/50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg font-semibold",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SectionTag: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-900 rounded-full">
    {children}
  </span>
);

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`relative p-6 rounded-2xl bg-brand-card border border-brand-border overflow-hidden transition-transform hover:-translate-y-1 duration-300 ${className}`}>
      {gradient && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};