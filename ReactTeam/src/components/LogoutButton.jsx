import React from 'react';
import { useAuth } from '../contextAPI/AuthProvider';

const LogoutButton = () => {
  const { setTokenData } = useAuth();
  const handleClick = () => {
    const logoutWindow = window.open(
      'https://accounts.spotify.com/logout',
      '_blank',
      'width=700,height=500',
    );
    setTimeout(() => {
      if (logoutWindow) logoutWindow.close();
      setTokenData(null);
      window.location.reload();
    }, 300);
  };
  return (
    <div>
      <button onClick={handleClick}>로그아웃 버튼</button>
    </div>
  );
};

export default LogoutButton;
