
import React from 'react';

const ContentPage: React.FC = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg border border-secondary-light/30 shadow-lg text-text-main">
      <div className="space-y-4 text-center">
        <div className="text-6xl text-primary mx-auto w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
        </div>
        <h2 className="text-2xl font-bold">Content AI Coming Soon</h2>
        <p className="text-text-secondary">
          Generate engaging copy for your website in seconds. From headlines to blog posts, let AI accelerate your content creation.
        </p>
      </div>
    </div>
  );
};

export default ContentPage;
