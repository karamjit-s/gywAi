
import React, { useState, useCallback, useEffect, useRef } from 'react';
import LogoIcon from './icons/LogoIcon';
import { User } from '../types';

declare const google: any;

// Helper function to decode the JWT response from Google
const decodeJwtResponse = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding JWT", error);
    return null;
  }
};

interface LoginPageProps {
  onLogin: (user: User) => void;
  onNavigateToSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // This is a mock login for email/password. In a real app, you'd make an API call.
    const mockUser: User = { name: email.split('@')[0], email: email, picture: '' };
    onLogin(mockUser);
  }, [email, onLogin]);
  
  const handleCredentialResponse = useCallback((response: any) => {
    const userObject = decodeJwtResponse(response.credential);
    if (userObject) {
      console.log("Logged in user:", userObject);
      const user: User = {
          name: userObject.name,
          email: userObject.email,
          picture: userObject.picture,
      };
      onLogin(user);
    }
  }, [onLogin]);

  useEffect(() => {
    if (typeof google === 'undefined' || !googleButtonRef.current) {
      return;
    }

    google.accounts.id.initialize({
      client_id: '1073833441584-srm5m74f2gmjqgd08rs5eo1o4tpf49j3.apps.googleusercontent.com', // A public demo client ID
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      googleButtonRef.current,
      { theme: "outline", size: "large", type: "standard", text: "signin_with", width: "320" }
    );

  }, [handleCredentialResponse]);


  return (
    <div className="w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center space-y-2">
            <LogoIcon className="w-12 h-12" />
            <h1 className="text-3xl font-bold text-text-main tracking-tight">GYW</h1>
            <h2 className="text-xl font-semibold text-text-secondary">Welcome Back</h2>
        </div>
        <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-background border border-secondary-light rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="you@example.com"
                />
                </div>
                <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-text-secondary">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-background border border-secondary-light rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                    placeholder="••••••••"
                />
                </div>
                <button
                type="submit"
                className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition-colors"
                >
                Login
                </button>
            </form>
             <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-secondary-light"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-secondary text-text-secondary">OR</span>
                </div>
            </div>
            <div ref={googleButtonRef} className="w-full flex justify-center"></div>
        </div>
        <div className="text-center">
            <p className="text-sm text-text-secondary">
            Don't have an account?{' '}
            <button onClick={onNavigateToSignup} className="font-medium text-primary hover:underline focus:outline-none">
                Sign up
            </button>
            </p>
        </div>
    </div>
  );
};

export default LoginPage;
