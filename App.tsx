
import React, { useState, useCallback } from 'react';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import DashboardPage from './components/DashboardPage';
import Modal from './components/Modal';
import { User } from './types';

type ModalType = 'login' | 'signup' | null;
export type PageType = 'dashboard' | 'design' | 'about' | 'branding' | 'content' | 'growth';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [activePage, setActivePage] = useState<PageType>('dashboard');

  const handleLogin = useCallback((userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
    setActiveModal(null);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    setActivePage('dashboard'); // Reset to dashboard on logout
  }, []);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const switchToModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  return (
    <div className="min-h-screen bg-background text-text-main font-sans antialiased">
      <DashboardPage 
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
        onLoginClick={() => openModal('login')}
        onSignupClick={() => openModal('signup')}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <Modal isOpen={activeModal === 'login'} onClose={closeModal}>
        <LoginPage 
          onLogin={handleLogin} 
          onNavigateToSignup={() => switchToModal('signup')} 
        />
      </Modal>

      <Modal isOpen={activeModal === 'signup'} onClose={closeModal}>
        <SignupPage 
          onSignup={handleLogin} // Log in user directly after signup
          onNavigateToLogin={() => switchToModal('login')} 
        />
      </Modal>
    </div>
  );
};

export default App;
