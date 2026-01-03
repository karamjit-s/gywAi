
import React from 'react';

interface LogoIconProps {
  className?: string;
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 7H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary"/>
      <path d="M4 12H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-text-main"/>
      <path d="M4 17H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary"/>
    </svg>
  );
};

export default LogoIcon;
