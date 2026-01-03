
import React from 'react';

const BrandingPage: React.FC = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg border border-secondary-light/30 shadow-lg text-text-main">
      <div className="space-y-4 text-center">
        <div className="text-6xl text-primary mx-auto w-fit">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
        </div>
        <h2 className="text-2xl font-bold">Branding Kit Coming Soon</h2>
        <p className="text-text-secondary">
          Define your brand's identity. Manage logos, colors, and fonts to ensure your website is always on-brand.
        </p>
      </div>
    </div>
  );
};

export default BrandingPage;
