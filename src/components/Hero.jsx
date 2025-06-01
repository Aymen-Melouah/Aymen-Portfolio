import React from 'react';
import { Palette, Code, Gamepad2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div 
                className="w-80 h-80 rounded-full flex items-center justify-center text-6xl font-bold shadow-2xl"
                style={{ 
                  background: `linear-gradient(135deg, var(--primary), var(--accent))`,
                  color: 'var(--secondary)'
                }}
              >
                <img 
                    
                    src = "/images/profile.jpg"
                    alt="Aymen Melouah"
                    className="w-full h-full object-cover rounded-full shadow-lg"
/>
              </div>
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6" style={{ color: 'var(--text)' }}>
              AYMEN
              <span className="block gradient-text">
                MELOUAH
              </span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Palette style={{ color: 'var(--accent)' }} size={24} />
                <span className="text-xl" style={{ color: 'var(--text)' }}>
                  Graphic Designer (UI/UX, Logo, Social Media)
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Code style={{ color: 'var(--primary)' }} size={24} />
                <span className="text-xl" style={{ color: 'var(--text)' }}>
                  Frontend Developer
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <Gamepad2 style={{ color: 'var(--accent)' }} size={24} />
                <span className="text-xl" style={{ color: 'var(--text)' }}>
                  Game Designer & Developer
                </span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                View My Projects
              </button>
              <button className="btn-secondary">
                Let's Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;