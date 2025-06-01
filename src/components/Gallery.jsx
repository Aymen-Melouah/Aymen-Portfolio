import React from 'react';

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: "I-Tech Club Event", category: "Events", image: "🎪" },
    { id: 2, title: "Bootcamp Session", category: "Education", image: "👨‍💻" },
    { id: 3, title: "Competition Win", category: "Achievement", image: "🏆" },
    { id: 4, title: "Team Meeting", category: "Team", image: "🤝" },
    { id: 5, title: "Workshop", category: "Education", image: "🛠️" },
    { id: 6, title: "Project Demo", category: "Projects", image: "📊" },
    { id: 7, title: "Conference", category: "Events", image: "🎤" },
    { id: 8, title: "Collaboration", category: "Team", image: "💡" }
  ];
  
  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Gallery
          </h2>
          <p className="text-xl" style={{ color: 'rgba(235, 233, 252, 0.7)' }}>
            Moments from events, competitions, and collaborative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative card cursor-pointer overflow-hidden"
            >
              <div 
                className="h-64 rounded-lg flex items-center justify-center text-6xl"
                style={{ background: `linear-gradient(135deg, var(--primary), var(--accent))` }}
              >
                {item.image}
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text)' }}>
                    {item.title}
                  </h3>
                  <span className="text-sm" style={{ color: 'var(--accent)' }}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;