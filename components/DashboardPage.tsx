
import React, { useState } from 'react';
import { PageType } from '../App';
import LogoIcon from './icons/LogoIcon';
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';
import RecentActivity from './RecentActivity';
import Sidebar from './Sidebar';
import DesignPage from './pages/DesignPage';
import AboutPage from './pages/AboutPage';
import BrandingPage from './pages/BrandingPage';
import ContentPage from './pages/ContentPage';
import GrowthPage from './pages/GrowthPage';
import { User } from '../types';
import UserAvatar from './UserAvatar';

interface DashboardPageProps {
  isAuthenticated: boolean;
  user: User | null;
  onLogout: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  activePage: PageType;
  setActivePage: (page: PageType) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ isAuthenticated, user, onLogout, onLoginClick, onSignupClick, activePage, setActivePage }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch(activePage) {
      case 'dashboard':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card title="My Websites" description="View and manage your projects" icon={<WebsiteIcon/>} />
              <Card title="Analytics" description="Track your site's performance" icon={<AnalyticsIcon/>} />
              <Card title="Account Settings" description="Manage your profile and billing" icon={<SettingsIcon/>} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
                <div className="lg:col-span-3 bg-secondary p-6 rounded-lg border border-secondary-light/30 shadow-lg">
                    <BarChart />
                </div>
                <div className="lg:col-span-2 bg-secondary p-6 rounded-lg border border-secondary-light/30 shadow-lg">
                     <DonutChart />
                </div>
            </div>

            <div className="mt-6">
                <RecentActivity />
            </div>
          </>
        );
      case 'design':
        return <DesignPage />;
      case 'branding':
        return <BrandingPage />;
      case 'content':
        return <ContentPage />;
      case 'growth':
        return <GrowthPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <h1 className="text-3xl font-bold text-text-main mb-6">Welcome to GYW!</h1>;
    }
  };

  const pageTitles: { [key in PageType]: string } = {
    dashboard: "Dashboard",
    design: "Design Hub",
    branding: "Branding Kit",
    content: "Content AI",
    growth: "Growth Hub",
    about: "About GYW"
  };

  const Card = ({ title, description, icon }: { title: string; description: string; icon: React.ReactElement; }) => (
    <div className="bg-secondary p-6 rounded-lg border border-secondary-light/30 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center space-x-4">
        <div className="bg-secondary-light p-3 rounded-full text-primary">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-text-main">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
  
  const WebsiteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>;
  const AnalyticsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
  const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

  return (
    <div className="min-h-screen w-full flex">
      <Sidebar isOpen={isSidebarOpen} activePage={activePage} setActivePage={setActivePage} setSidebarOpen={setSidebarOpen} user={user} />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <header className="bg-secondary/50 backdrop-blur-sm border-b border-secondary-light/30 sticky top-0 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <button 
                  className="text-text-main p-1 rounded-md hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  aria-label="Toggle navigation"
                >
                  <LogoIcon className="w-8 h-8" />
                </button>
                <span className="text-xl font-bold">GYW</span>
              </div>
              <div className="flex items-center space-x-2">
                {isAuthenticated && user ? (
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <UserAvatar user={user} className="w-8 h-8" />
                        <span className="hidden sm:block font-medium text-text-main text-sm">{user.name}</span>
                    </div>
                    <button
                        onClick={onLogout}
                        className="px-3 py-2 text-sm font-medium bg-secondary-light text-text-main rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors"
                    >
                        Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={onLoginClick}
                      className="px-4 py-2 text-sm font-medium bg-secondary-light text-text-main rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors"
                    >
                      Login
                    </button>
                    <button
                      onClick={onSignupClick}
                      className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-text-main mb-6">{pageTitles[activePage]}</h1>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
