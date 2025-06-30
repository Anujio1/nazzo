import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  type: 'heart' | 'star';
  delay: number;
  size: number;
}

export const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          type: Math.random() > 0.5 ? 'heart' : 'star',
          delay: Math.random() * 4,
          size: 12 + Math.random() * 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => {
        const Icon = particle.type === 'heart' ? Heart : Star;
        return (
          <div
            key={particle.id}
            className="particle absolute opacity-20 dark:opacity-10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          >
            <Icon
              size={particle.size}
              className={`text-purple-400 dark:text-indigo-400 ${
                particle.delay < 2 ? 'float-animation' : 
                particle.delay < 3 ? 'float-animation-delayed' : 'float-animation-slow'
              }`}
              fill="currentColor"
            />
          </div>
        );
      })}
    </div>
  );
};