import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: number;
  label?: string;
}

export function PlaceholderBox({ aspectRatio = 1, label, className = '', ...props }: Props) {
  return (
    <div 
      className={`w-full bg-[#E5E5E5] border border-[#111111]/10 relative group overflow-hidden ${className}`}
      style={{ aspectRatio }}
      {...props}
    >
      <div className="absolute inset-0 bg-[#111111]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Architectural Crosshairs */}
      {/* Top Left */}
      <div className="absolute top-4 left-[12px] w-[8px] h-[1px] bg-[#111111]/30" />
      <div className="absolute top-[12px] left-4 w-[1px] h-[8px] bg-[#111111]/30" />
      
      {/* Top Right */}
      <div className="absolute top-4 right-[12px] w-[8px] h-[1px] bg-[#111111]/30" />
      <div className="absolute top-[12px] right-4 w-[1px] h-[8px] bg-[#111111]/30" />
      
      {/* Bottom Left */}
      <div className="absolute bottom-4 left-[12px] w-[8px] h-[1px] bg-[#111111]/30" />
      <div className="absolute bottom-[12px] left-4 w-[1px] h-[8px] bg-[#111111]/30" />
      
      {/* Bottom Right */}
      <div className="absolute bottom-4 right-[12px] w-[8px] h-[1px] bg-[#111111]/30" />
      <div className="absolute bottom-[12px] right-4 w-[1px] h-[8px] bg-[#111111]/30" />

      {/* Center crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#111111]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#111111]/10" />

      {label && (
        <div className="absolute bottom-4 left-8 font-['JetBrains_Mono'] text-[9px] tracking-[0.2em] text-[#111111]/40 group-hover:text-[#111111]/80 transition-colors duration-500 z-10 select-none pointer-events-none">
          {label}
        </div>
      )}
    </div>
  );
}
