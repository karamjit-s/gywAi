
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-secondary p-8 rounded-lg border border-secondary-light/30 shadow-lg text-text-main">
      <div className="space-y-4">
        <p>
          <strong>GYW (Get Your Website)</strong> is a modern, all-in-one platform designed to help you build, deploy, and manage your web projects with ease. 
        </p>
        <p>
          Our mission is to democratize web development by providing powerful tools, insightful analytics, and a seamless user experience. Whether you're a solo developer, a small business, or a large enterprise, GYW provides the infrastructure you need to succeed online.
        </p>
         <p className="text-sm text-text-secondary pt-4 border-t border-secondary-light mt-4">
          Version: 1.0.0
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
