import React from 'react';
import { ProgressBarProps } from '../types/progress';
import { cn } from '@/lib/utils';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  className,
  barColor = '#009b52',
  backgroundColor = '#e5e7eb'
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="text-[#7a7a7a] text-sm">{label}</span>
        <span className="text-[#7a7a7a] text-sm">{value}%</span>
      </div>
      <div className="w-full rounded-full h-2" style={{ backgroundColor }}>
        <div
          className="h-2 rounded-full"
          style={{
            width: `${value}%`,
            backgroundColor: barColor
          }}
        />
      </div>
    </div>
  );
}; 