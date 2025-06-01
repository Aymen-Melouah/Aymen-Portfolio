import React from 'react';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section 
      className="section text-center"
      style={{ 
        background: `linear-gradient(135deg, var(--primary), var(--accent))` 
      }}
    >
      <div className="container">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--secondary)' }}>
          Let's Work Together
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
        <button 
          className="font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          style={{ 
            backgroundColor: 'var(--secondary)',
            color: 'var(--background)'
          }}
        >
          <Mail size={20} />
          Email Me
        </button>
      </div>
    </section>
  );
};

export default CallToAction;