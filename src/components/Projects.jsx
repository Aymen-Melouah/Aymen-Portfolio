import React, { useState } from 'react';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Culturia Logo",
      category: "Graphic Design",
      image: "public/images/culturia.jpg",
      description: "Theatre and cultural events platform logo design"
    },
    {
      id: 2,
      title: "Taissir Company Logo",
      category: "Graphic Design",
      image: "public/images/taissir.jpg",
      description: "Construction company logo design"
    },
    {
      id: 3,
      title: "TraceEats Logo",
      category: "Graphic Design",
      image: "public/images/traceeats.png",
      description: "Hackathon project logo for food tracking app"
    },
    {
      id: 4,
      title: "I-Tech Social Media Campaign",
      category: "Social Media Design",
      image: "public/images/warcha.jpeg",
      description: "Social media graphics for I-Tech Club events and promotions"
    },
 
    {
      id: 6,
      title: "PRISM",
      category: "Game Development",
      image: "public/images/prism.png",
      description: "A 3D puzzle game developed by Vysio Softworks, featuring immersive environments and challenging gameplay"
    }
  ];
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            My Projects
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'rgba(235, 233, 252, 0.7)' }}>
            Explore my latest work in design, development, and creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 rounded-lg overflow-hidden mb-4">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
              <div className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
                {project.category}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
                {project.title}
              </h3>
              <p className="mb-4" style={{ color: 'rgba(235, 233, 252, 0.7)' }}>
                {project.description}
              </p>
              <div className="flex items-center" style={{ color: 'var(--accent)' }}>
                <span className="mr-2">View Details</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="card max-w-2xl w-full max-h-90vh overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{ color: 'rgba(235, 233, 252, 0.7)' }}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="h-64 rounded-lg overflow-hidden mb-6">
  <img
    src={selectedProject.image}
    alt={selectedProject.title}
    className="w-full h-full object-cover"
  />
</div>
              <div className="text-sm mb-2" style={{ color: 'var(--accent)' }}>
                {selectedProject.category}
              </div>
              <p className="mb-6" style={{ color: 'rgba(235, 233, 252, 0.8)' }}>
                {selectedProject.description}
              </p>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center gap-2">
                  <ExternalLink size={16} />
                  Live Demo
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  <Github size={16} />
                  Source Code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;