import React from 'react';
import { Code, Palette, Zap, Sparkles, Monitor, Smartphone, Globe, Database } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Coding",
    icon: <Code className="w-6 h-6" />,
    level: 70,
    description: "Programming languages & algorithms",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: 2,
    name: "Trading",
    icon: <Zap className="w-6 h-6" />,
    level: 40,
    description: "Cryptocurrency & financial markets",
    color: "from-yellow-500 to-orange-600"
  },
  {
    id: 3,
    name: "Application Making",
    icon: <Smartphone className="w-6 h-6" />,
    level: 60,
    description: "Mobile & desktop app development",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 4,
    name: "Website Development",
    icon: <Globe className="w-6 h-6" />,
    level: 80,
    description: "Full-stack web development & design",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    name: "Digital Art",
    icon: <Palette className="w-6 h-6" />,
    level: 95,
    description: "Anime character design & cyberpunk aesthetics",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 6,
    name: "UI/UX Design",
    icon: <Monitor className="w-6 h-6" />,
    level: 85,
    description: "Interactive interfaces & user experiences",
    color: "from-indigo-500 to-purple-600"
  }
];

export const Skills: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="skill-orb absolute hidden sm:block"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Skills Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 anime-title">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent neon-text">
              My Skills
            </span>
            <Sparkles className="inline-block ml-2 sm:ml-3 text-cyan-400 sparkle" size={24} />
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            Mastering the art of digital creation with cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="skill-card rounded-xl sm:rounded-2xl p-4 sm:p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${skill.color} mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white anime-title mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
              
              {/* Skill Level Bar */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} skill-progress transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 anime-title">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              About Me
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="about-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Professional Photo Section */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="professional-photo-container mx-auto lg:mx-0 mb-4 sm:mb-6">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto lg:mx-0">
                      {/* Outer Rotating Ring */}
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 animate-spin-slow"></div>
                      
                      {/* Middle Rotating Ring (Opposite Direction) */}
                      <div className="absolute -inset-2 rounded-full bg-gradient-to-l from-cyan-400 via-pink-400 to-purple-400 opacity-40 animate-spin-reverse"></div>
                      
                      {/* Main Photo Border */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 animate-pulse-glow">
                        <div className="w-full h-full rounded-full bg-black p-2">
                          <img
                            src="/anuj.jpg"
                            alt="NAZZO GENX - Professional Digital Artist and Developer"
                            className="w-full h-full rounded-full object-cover object-center shadow-2xl hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      {/* Pulsing Neon Glow */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/30 to-cyan-500/30 blur-xl animate-pulse-intense"></div>
                      
                      {/* Orbiting Particles */}
                      <div className="absolute -inset-8">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-3 h-3 rounded-full animate-orbit"
                            style={{
                              background: i % 2 === 0 ? 
                                'linear-gradient(45deg, #ff00ff, #00ffff)' : 
                                'linear-gradient(45deg, #00ffff, #ff00ff)',
                              left: '50%',
                              top: '50%',
                              transformOrigin: `${60 + (i * 10)}px center`,
                              animationDelay: `${i * 0.5}s`,
                              animationDuration: `${4 + (i * 0.5)}s`,
                              boxShadow: '0 0 10px currentColor',
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating Energy Sparks */}
                      <div className="absolute -inset-6">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={`spark-${i}`}
                            className="absolute w-1 h-1 bg-white rounded-full animate-float-spark opacity-80"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.3}s`,
                              animationDuration: `${2 + Math.random() * 2}s`,
                              boxShadow: '0 0 6px #00ffff',
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Hexagonal Tech Pattern */}
                      <div className="absolute -inset-12 opacity-20">
                        <div className="hexagon-pattern animate-rotate-slow"></div>
                      </div>
                      
                      {/* Corner Accent Lines */}
                      <div className="absolute -inset-6">
                        <div className="corner-lines animate-pulse-lines"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="stat-item">
                      <span className="text-2xl sm:text-3xl font-bold text-cyan-400 animate-counter">5+</span>
                      <span className="text-sm sm:text-base text-gray-300 ml-2">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="text-2xl sm:text-3xl font-bold text-pink-400 animate-counter">100+</span>
                      <span className="text-sm sm:text-base text-gray-300 ml-2">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                      <span className="text-2xl sm:text-3xl font-bold text-purple-400 animate-counter">50K+</span>
                      <span className="text-sm sm:text-base text-gray-300 ml-2">Community Members</span>
                    </div>
                  </div>
                </div>

                {/* About Text */}
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    Welcome to my digital universe! I'm <span className="text-cyan-400 font-semibold">NAZZO GENX</span>, 
                    a passionate digital artist and developer who brings cyberpunk dreams to life through code and creativity.
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    My journey spans across multiple domains - from coding complex applications to trading in financial markets, 
                    creating stunning websites to developing mobile applications. I blend technical expertise with artistic vision.
                  </p>
                  
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Through <span className="text-pink-400 font-semibold">CAFI Network</span>, I've built a thriving community 
                    of developers, traders, and digital creators. Join us in exploring the endless possibilities of technology and finance!
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                    {['Coding', 'Trading', 'Web Dev', 'App Dev', 'Digital Art'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-cyan-300 rounded-full border border-cyan-400/30 hover:border-pink-400/50 transition-colors animate-tag-glow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};