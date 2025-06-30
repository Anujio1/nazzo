import React from 'react';
import { Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Enhanced 3D Anime Background Elements */}
      <div className="absolute inset-0 opacity-15 sm:opacity-25">
        <div className="anime-silhouette anime-girl-1"></div>
        <div className="anime-silhouette anime-girl-2"></div>
        <div className="anime-silhouette anime-girl-3 hidden sm:block"></div>
        <div className="anime-silhouette anime-girl-4 hidden md:block"></div>
        <div className="anime-silhouette anime-girl-5 hidden lg:block"></div>
        <div className="anime-silhouette anime-girl-6 hidden xl:block"></div>
      </div>
      
      {/* Floating Neon Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="neon-orb hidden sm:block"
            style={{
              left: `${5 + (i * 12)}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
        {/* Mobile orbs - fewer and smaller */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`mobile-${i}`}
            className="neon-orb block sm:hidden"
            style={{
              left: `${15 + (i * 25)}%`,
              top: `${25 + (i * 15)}%`,
              animationDelay: `${i * 1.2}s`,
              width: '15px',
              height: '15px',
            }}
          />
        ))}
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 neon-text anime-title leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block sm:inline">
              NAZZO GENX
            </span>
            <span className="text-2xl sm:text-4xl md:text-6xl ml-0 sm:ml-4 block sm:inline mt-2 sm:mt-0">⚡</span>
          </h1>
        </div>
        
        <div className="fade-in-delay-1">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-6 sm:mb-8 font-light leading-relaxed neon-glow">
            Digital Artist & Anime Creator
          </p>
        </div>
        
        <div className="fade-in-delay-2">
          <p className="text-base sm:text-lg text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Creating stunning anime-inspired digital art and immersive experiences. 
            Welcome to my cyberpunk universe of creativity and endless imagination.
          </p>
        </div>
        
        {/* Interactive Telegram Prompt */}
        <div className="fade-in-delay-2">
          <div className="neon-card rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 max-w-sm sm:max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 animate-pulse" />
              <span className="text-base sm:text-lg font-semibold text-white anime-title">
                Join CAFI Network
              </span>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-gray-300 mb-2 sm:mb-3 px-2">
              Connect with our anime community and stay updated with the latest creations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};