import React, { useEffect } from 'react';
import { MessageCircle, Users } from 'lucide-react';

export const TelegramLinks: React.FC = () => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        // Show the telegram links modal or directly open links
        const shouldOpenChannel = window.confirm(
          '🚀 Welcome to NAZZO GENX Network!\n\n' +
          'Choose your destination:\n' +
          '✅ OK - Join CAFI Network Channel\n' +
          '❌ Cancel - Join CAFI Network Group Chat'
        );
        
        if (shouldOpenChannel) {
          window.open('https://t.me/CAFI_NETWORK2', '_blank');
        } else {
          window.open('https://t.me/CAFInetworkgc', '_blank');
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col space-y-2 sm:space-y-3">
      <div className="text-center mb-1 sm:mb-2">
        <p className="text-xs text-cyan-400 animate-pulse">
          Press ENTER to join! ⚡
        </p>
      </div>
      
      <a
        href="https://t.me/CAFI_NETWORK2"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 neon-icon-button rounded-full hover:scale-110 transition-all duration-300"
        title="Join CAFI Network Channel"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-pink-400 transition-colors" />
        <span className="text-xs sm:text-sm text-cyan-400 group-hover:text-pink-400 font-medium hidden sm:inline">
          Channel
        </span>
      </a>
      
      <a
        href="https://t.me/CAFInetworkgc"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 neon-icon-button rounded-full hover:scale-110 transition-all duration-300"
        title="Join CAFI Network Group"
      >
        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-pink-400 transition-colors" />
        <span className="text-xs sm:text-sm text-cyan-400 group-hover:text-pink-400 font-medium hidden sm:inline">
          Group
        </span>
      </a>
    </div>
  );
};