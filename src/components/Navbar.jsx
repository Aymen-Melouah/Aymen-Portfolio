import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = ['Home', 'Projects', 'About', 'Gallery'];
  
  return (
    <nav 
      className="fixed top-0 w-full backdrop-blur-md z-50 border-b"
      style={{ 
        backgroundColor: 'rgba(32, 32, 33, 0.9)',
        borderBottomColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
            AYMEN MELOUAH
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
                >
                  {link}
                  
                </a>
                
              ))}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Let's Get in Touch
              </button>
              
            </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'var(--text)' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="md:hidden backdrop-blur-md"
          style={{ backgroundColor: 'rgba(32, 32, 33, 0.95)' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200"
                style={{ color: 'var(--text)' }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text)'}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;