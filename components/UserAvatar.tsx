
import React from 'react';
import { User } from '../types';

interface UserAvatarProps {
  user: User;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, className = 'w-10 h-10' }) => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className={`rounded-full flex items-center justify-center bg-secondary-light text-text-main font-bold overflow-hidden ${className}`}>
      {user.picture ? (
        <img
          src={user.picture}
          alt={user.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <span>{getInitials(user.name)}</span>
      )}
    </div>
  );
};

export default UserAvatar;
