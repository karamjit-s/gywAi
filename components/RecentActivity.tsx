
import React from 'react';

const activities = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    text: 'New user "alex.doe" signed up.',
    time: '2 minutes ago',
    color: 'text-green-400'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    text: 'Deployment of "my-cool-site.com" was successful.',
    time: '1 hour ago',
    color: 'text-primary'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    text: 'Build failed for project "e-commerce-next".',
    time: '3 hours ago',
    color: 'text-red-500'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    text: 'Your billing cycle renewed successfully.',
    time: '1 day ago',
    color: 'text-sky-400'
  }
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-secondary p-6 rounded-lg border border-secondary-light/30 shadow-lg">
      <h3 className="text-lg font-semibold text-text-main mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className={`mr-4 mt-1 p-1 rounded-full bg-secondary-light ${activity.color}`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-text-main">{activity.text}</p>
              <p className="text-xs text-text-secondary">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
