
import React from 'react';
import { PageType } from '../App';
import LogoIcon from './icons/LogoIcon';
import CloseIcon from './icons/CloseIcon';
import { User } from '../types';
import UserAvatar from './UserAvatar';

interface SidebarProps {
  isOpen: boolean;
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  setSidebarOpen: (isOpen: boolean) => void;
  user: User | null;
}

const NavLink = ({
  icon,
  label,
  page,
  activePage,
  onClick,
}: {
  icon: React.ReactElement;
  label: string;
  page: PageType;
  activePage: PageType;
  onClick: () => void;
}) => {
  const isActive = activePage === page;
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive ? 'bg-primary text-white' : 'text-text-secondary hover:bg-secondary-light hover:text-text-main'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activePage, setActivePage, setSidebarOpen, user }) => {
  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };
  
  const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
  const DesignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
  const BrandingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>;
  const ContentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
  const GrowthIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
  const AboutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  
  return (
    <>
      <div 
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <aside className={`fixed top-0 left-0 h-full w-64 bg-secondary border-r border-secondary-light/30 z-30 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div>
          <div className="flex items-center justify-between p-4 border-b border-secondary-light/30 h-16">
            <div className="flex items-center space-x-2">
              <LogoIcon className="w-8 h-8"/>
              <span className="text-xl font-bold text-text-main">GYW</span>
            </div>
            <button className="lg:hidden text-text-secondary" onClick={() => setSidebarOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <NavLink icon={<DashboardIcon />} label="Dashboard" page="dashboard" activePage={activePage} onClick={() => handleNavClick('dashboard')} />
            <NavLink icon={<DesignIcon />} label="Design Hub" page="design" activePage={activePage} onClick={() => handleNavClick('design')} />
            <NavLink icon={<BrandingIcon />} label="Branding Kit" page="branding" activePage={activePage} onClick={() => handleNavClick('branding')} />
            <NavLink icon={<ContentIcon />} label="Content AI" page="content" activePage={activePage} onClick={() => handleNavClick('content')} />
            <NavLink icon={<GrowthIcon />} label="Growth Hub" page="growth" activePage={activePage} onClick={() => handleNavClick('growth')} />
            <div className="pt-2 border-t border-secondary-light/20">
              <NavLink icon={<AboutIcon />} label="About" page="about" activePage={activePage} onClick={() => handleNavClick('about')} />
            </div>
          </nav>
        </div>
        <div className="mt-auto">
          {user && (
            <div className="p-4 border-t border-secondary-light/30">
                <div className="flex items-center space-x-3">
                    <UserAvatar user={user} className="w-10 h-10" />
                    <div className="overflow-hidden">
                        <p className="font-semibold text-text-main text-sm truncate">{user.name}</p>
                        <p className="text-text-secondary text-xs truncate">{user.email}</p>
                    </div>
                </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
