import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDark}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-morphism hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};