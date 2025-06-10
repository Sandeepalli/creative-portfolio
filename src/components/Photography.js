import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import ImageModal from './ImageModal';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample photography - replace with your actual photography data
  const photos = [
    { id: 1, title: 'Urban Landscape', description: 'New York City, 2023', image: '/images/photography/newyork.jpg' },
    { id: 2, title: 'Natural Light Portrait', description: 'Studio session, 2023', image: '/images/photography/placeholder2.jpg' },
    { id: 3, title: 'Sunset at the Beach', description: 'California coast, 2022', image: '/images/photography/sunset.jpg' },
    { id: 4, title: 'Street Photography', description: 'Downtown, 2023', image: '/images/photography/placeholder4.jpg' },
    { id: 5, title: 'Architectural Study', description: 'Modern buildings, 2022', image: '/images/photography/placeholder5.jpg' },
    { id: 6, title: 'Macro Nature', description: 'Spring flowers, 2023', image: '/images/photography/placeholder6.jpg' }
  ];

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1>Photography</h1>
        <p>Capturing moments and perspectives through the lens</p>
      </div>
      
      <div className="gallery-grid">
        {photos.map(photo => (
          <div key={photo.id} className="gallery-item" onClick={() => openModal(photo)}>
            <div className="gallery-image-container">
              <div className="gallery-image" style={{ backgroundImage: `url(${photo.image})` }}></div>
              <div className="gallery-overlay">
                <span className="view-icon">+</span>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
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

export default Photography;