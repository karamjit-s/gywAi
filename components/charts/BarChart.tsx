
import React from 'react';

const trafficData = [
  { day: 'Mon', visitors: 150 },
  { day: 'Tue', visitors: 230 },
  { day: 'Wed', visitors: 310 },
  { day: 'Thu', visitors: 280 },
  { day: 'Fri', visitors: 390 },
  { day: 'Sat', visitors: 450 },
  { day: 'Sun', visitors: 410 },
];

const BarChart: React.FC = () => {
  const maxValue = Math.max(...trafficData.map(d => d.visitors));

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-main mb-4">Website Traffic (Last 7 Days)</h3>
      <div className="flex justify-between items-end h-64 space-x-2">
        {trafficData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center justify-end">
            <div className="text-sm text-text-secondary mb-1">{data.visitors}</div>
            <div 
              className="w-full bg-primary rounded-t-md hover:bg-primary-hover transition-all duration-300"
              style={{ height: `${(data.visitors / maxValue) * 100}%` }}
              title={`${data.day}: ${data.visitors} visitors`}
            >
            </div>
            <div className="text-xs text-text-secondary mt-2">{data.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
