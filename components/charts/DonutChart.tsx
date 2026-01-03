
import React from 'react';

const sourceData = [
  { source: 'Direct', value: 45, color: 'text-primary' },
  { source: 'Social', value: 30, color: 'text-green-500' },
  { source: 'Referral', value: 25, color: 'text-sky-500' },
];

const DonutChart: React.FC = () => {
  const total = sourceData.reduce((acc, item) => acc + item.value, 0);
  let cumulative = 0;

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-main mb-4">Traffic Sources</h3>
      <div className="flex items-center justify-around">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <circle
              className="text-secondary-light"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              cx="18"
              cy="18"
              r="16"
            />
            {sourceData.map((data, index) => {
              const dashArray = (data.value / total) * 100.53; // 2 * PI * r (16)
              const dashOffset = 100.53 - cumulative;
              cumulative += dashArray;
              return (
                <circle
                  key={index}
                  className={data.color}
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray={`${dashArray} 100.53`}
                  strokeDashoffset={-dashOffset}
                  fill="none"
                  cx="18"
                  cy="18"
                  r="16"
                  transform="rotate(-90 18 18)"
                />
              );
            })}
          </svg>
           <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-text-main">
              {total}K
            </span>
          </div>
        </div>
        <div className="space-y-2">
          {sourceData.map((data, index) => (
            <div key={index} className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-2 ${data.color.replace('text-', 'bg-')}`}></span>
              <span className="text-sm text-text-secondary">{data.source} - {data.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
