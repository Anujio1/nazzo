import React from 'react';
import { Github, Twitter, Linkedin, Mail, Heart, Star, MessageCircle, Users, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? (
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 sparkle" fill="currentColor" />
            ) : (
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 sparkle" fill="currentColor" />
            )}
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Telegram Links Box */}
        <div className="telegram-box rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating White Orbs */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`orb-${i}`}
                className="white-orb absolute"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: `${20 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.7}s`,
                }}
              />
            ))}
            
            {/* Pulsing White Rings */}
            <div className="white-ring-1"></div>
            <div className="white-ring-2"></div>
            <div className="white-ring-3"></div>
            
            {/* Animated Border Lines */}
            <div className="border-lines">
              <div className="border-line top"></div>
              <div className="border-line right"></div>
              <div className="border-line bottom"></div>
              <div className="border-line left"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 anime-title">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent telegram-title">
                Join CAFI Network
              </span>
              <Send className="inline-block ml-2 sm:ml-3 text-white telegram-icon" size={28} />
            </h3>
            
            <p className="text-gray-200 mb-6 sm:mb-8 text-base sm:text-lg px-4 telegram-subtitle">
              Connect with our community of developers, traders, and digital creators. 
              Stay updated with the latest in tech and finance!
            </p>
            
            {/* Telegram Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
              <a
                href="https://t.me/CAFI_NETWORK2"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-link-button group flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm sm:text-base">CAFI Channel</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Latest Updates & News</div>
                </div>
                <div className="telegram-arrow">→</div>
              </a>
              
              <a
                href="https://t.me/CAFInetworkgc"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram-link-button group flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-semibold text-sm sm:text-base">CAFI Group</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Community Discussion</div>
                </div>
                <div className="telegram-arrow">→</div>
              </a>
            </div>
            
            {/* Quick Join Hint */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <kbd className="px-3 py-1 bg-white/10 text-white rounded border border-white/20 text-xs font-mono telegram-kbd">
                ENTER
              </kbd>
              <span>Quick join from anywhere on the site</span>
            </div>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
          <a
            href="mailto:hello@nazzogenx.dev"
            className="p-3 sm:p-4 neon-icon-button rounded-full hover:scale-110 transition-all duration-300 group"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
          </a>
          <a
            href="https://github.com/nazzogenx"
            className="p-3 sm:p-4 neon-icon-button rounded-full hover:scale-110 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
          </a>
          <a
            href="https://twitter.com/nazzogenx"
            className="p-3 sm:p-4 neon-icon-button rounded-full hover:scale-110 transition-all duration-300 group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/nazzogenx"
            className="p-3 sm:p-4 neon-icon-button rounded-full hover:scale-110 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-pink-400 transition-colors" />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            © 2025 NAZZO GENX. Crafted with{' '}
            <Heart className="inline w-3 h-3 sm:w-4 sm:h-4 text-pink-400 mx-1" fill="currentColor" />
            and anime{' '}
            <span className="text-cyan-400">✨ magic</span>
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};