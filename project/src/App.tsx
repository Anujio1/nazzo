import React from 'react';
import { Particles } from './components/Particles';
import { DarkModeToggle } from './components/DarkModeToggle';
import { MusicPlayer } from './components/MusicPlayer';
import { TelegramLinks } from './components/TelegramLinks';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen gradient-bg transition-all duration-500">
      <Particles />
      <DarkModeToggle />
      <MusicPlayer />
      <TelegramLinks />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;