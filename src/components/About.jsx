import React from 'react';
import { Calendar, Users, Code, Palette, Gamepad2, Eye } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Computer Science Bachelor Degree",
      organization: "Chadeli Bendjedid University",
      period: "2025",
      icon: <Calendar style={{ color: 'var(--primary)' }} size={20} />,
      description: "Graduating with a degree in Computer Science"
    },
    {
      title: "I-Tech Club Co-Founder",
      organization: "Chadeli Bendjedid University",
      period: "2023 - Current",
      icon: <Users style={{ color: 'var(--accent)' }} size={20} />,
      description: "Scientific club participating in national/international competitions and running bootcamps in different specialities"
    },
    {
      title: "Vysio Softworks Co-Founder",
      organization: "Startup",
      period: "2022 - Current",
      icon: <Eye style={{ color: 'var(--accent)' }} size={20} />,
      description: "Software startup specialized in 3D construction, virtual tours, and game development"
    },
    {
      title: "Graphic Designer",
      organization: "Freelance",
      period: "2020 - Current",
      icon: <Palette style={{ color: 'var(--primary)' }} size={20} />,
      description: "Creating visual designs for various clients and projects"
    },
    {
      title: "Frontend Developer",
      organization: "Freelance",
      period: "2024 - Current",
      icon: <Code style={{ color: 'var(--accent)' }} size={20} />,
      description: "Building modern web applications and user interfaces"
    },
    {
      title: "Game Developer",
      organization: "Indie",
      period: "2022 - Current",
      icon: <Gamepad2 style={{ color: 'var(--primary)' }} size={20} />,
      description: "Creating games and interactive experiences"
    }
  ];
  
  const skillCategories = [
    {
      title: "Design",
      skills: ['UI/UX Design', 'Logo Design', 'Social Media', 'Branding', 'Adobe Suite'],
      color: 'var(--accent)'
    },
    {
      title: "Development",
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git'],
      color: 'var(--primary)'
    },
    {
      title: "Game Development",
      skills: ['Unity', 'C#', 'Game Design', '2D/3D Graphics', 'Level Design'],
      color: 'var(--accent)'
    }
  ];
  
  return (
    <section id="about" className="section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(235, 233, 252, 0.7)' }}>
            I'm a passionate creator who loves bringing ideas to life through design, code, and interactive experiences. 
            My journey spans multiple disciplines, from graphic design to game development, always striving to create 
            meaningful and impactful digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
              My Journey
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="card flex gap-4">
                  <div className="flex-shrink-0 mt-1">{exp.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                      {exp.title}
                    </h4>
                    <div className="text-sm mb-1" style={{ color: 'var(--accent)' }}>
                      {exp.organization}
                    </div>
                    <div className="text-sm mb-2" style={{ color: 'rgba(235, 233, 252, 0.6)' }}>
                      {exp.period}
                    </div>
                    <p style={{ color: 'rgba(235, 233, 252, 0.8)' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--text)' }}>
              Skills & Expertise
            </h3>
            <div className="space-y-6">
  {skillCategories.map((category, index) => (
    <div key={index}>
      <h4 className="text-lg font-semibold mb-3" style={{ color: 'var(--text)' }}>
        {category.title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1 rounded-full text-sm border"
            style={{ 
              backgroundColor: `${category.color}20`, // light background
              borderColor: category.color, // border around the tag
              color: category.color // text color
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;