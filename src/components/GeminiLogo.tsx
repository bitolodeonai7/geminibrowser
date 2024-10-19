import React from 'react';

interface GeminiLogoProps {
  className?: string;
}

const GeminiLogo: React.FC<GeminiLogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4FD1C5" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" fill="url(#geminiGradient)" />
      <path
        d="M30 35 L50 65 L70 35 M40 50 L60 50"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default GeminiLogo;