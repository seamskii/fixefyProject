import React from 'react';

interface CircularProgressWithPercentageProps {
  value: number;
  fontSize?: number; 
}

export const CircularProgressWithPercentage: React.FC<CircularProgressWithPercentageProps> = ({
  value,
  fontSize = 20, 
}) => {
  const outerRadius = 40;
  const innerRadius = 34;
  const circumference = 2 * Math.PI * outerRadius;
  const progressOffset = ((100 - value) / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: outerRadius * 2, height: outerRadius * 2 }}>
      <svg width={outerRadius * 2} height={outerRadius * 2}>
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={outerRadius}
          fill="#88C00D" 
        />
        <circle
          cx={outerRadius}
          cy={outerRadius}
          r={innerRadius}
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset: progressOffset,
            transition: 'stroke-dashoffset 0.5s',
          }}
          transform={`rotate(-90 ${outerRadius} ${outerRadius})`}
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: `${fontSize}px`,
          fontWeight: 'bold',
          color: '#fff',
        }}
      >
        {value}%
      </span>
    </div>
  );
};






