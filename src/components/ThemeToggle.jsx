import React, { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`w-16 h-10 rounded-3xl ${
        isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
      } flex items-center justify-start shadow-md cursor-pointer `}
    >
      {isDarkMode ? (
        <div
          className={`text-yellow-400 flex items-center transform transition-transform ${
            isDarkMode ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          <span className="text-lg">🌙</span>
        </div>
      ) : (
        <div
          className={`text-yellow-400 flex items-center transform transition-transform ${
            isDarkMode ? 'translate-x-0' : 'translate-x-2'
          }`}
        >
          <span className="text-lg">☀️</span>
        </div>
      )}
    </div>
  );
};
