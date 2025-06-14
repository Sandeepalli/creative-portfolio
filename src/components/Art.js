import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import ImageModal from './ImageModal';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample art pieces - replace with your actual art data
  const artworks = [
    { id: 1, title: 'Abstract Composition', description: 'Acrylic on canvas, 2023', image: '/images/art/placeholder1.jpg' },
    { id: 2, title: 'Color Study', description: 'Digital art, 2023', image: '/images/art/placeholder2.jpg' },
    { id: 3, title: 'Mixed Media Exploration', description: 'Mixed media on paper, 2022', image: '/images/art/placeholder3.jpg' },
    { id: 4, title: 'Geometric Patterns', description: 'Digital illustration, 2023', image: '/images/art/placeholder4.jpg' },
    { id: 5, title: 'Textural Study', description: 'Oil on canvas, 2022', image: '/images/art/placeholder5.jpg' },
    { id: 6, title: 'Urban Landscape', description: 'Watercolor, 2023', image: '/images/art/placeholder6.jpg' }
  ];

  const openModal = (artwork) => {
    setSelectedImage(artwork);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <Link to="/" className="back-button" aria-label="Back to Home">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: 4}}>
            <polyline points="15 18 9 12 15 6"></polyline>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none"></rect>
            <path d="M9 12h7" stroke="currentColor"/>
            <path d="M7 12h2" stroke="currentColor"/>
            <path d="M9 12l2-2" stroke="currentColor"/>
            <path d="M9 12l2 2" stroke="currentColor"/>
          </svg>
        </Link>
        <h1>Artwork</h1>
        <p>A collection of my artistic explorations and creations</p>
      </div>
      
      <div className="gallery-grid">
        {artworks.map(artwork => (
          <div key={artwork.id} className="gallery-item" onClick={() => openModal(artwork)}>
            <div className="gallery-image-container">
              <div className="gallery-image" style={{ backgroundImage: `url(${artwork.image})` }}></div>
              <div className="gallery-overlay">
                <span className="view-icon">+</span>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal 
          image={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Art;