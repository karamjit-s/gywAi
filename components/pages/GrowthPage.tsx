
import React from 'react';

const GrowthPage: React.FC = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg border border-secondary-light/30 shadow-lg text-text-main">
      <div className="space-y-4 text-center">
        <div className="text-6xl text-primary mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        </div>
        <h2 className="text-2xl font-bold">Growth Hub Coming Soon</h2>
        <p className="text-text-secondary">
          Unlock your website's potential. Track key metrics, get SEO recommendations, and discover insights to grow your audience.
        </p>
      </div>
    </div>
  );
};

export default GrowthPage;
