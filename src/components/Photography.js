import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import ImageModal from './ImageModal';

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Actual photography data from the photography directory
  const photos = [
    { id: 1, title: 'Photo 1', description: 'Photography collection', image: '/images/photography/IMG_1640.PNG' },
    { id: 2, title: 'Photo 2', description: 'Photography collection', image: '/images/photography/IMG_4646.JPG' },
    { id: 3, title: 'Photo 3', description: 'Photography collection', image: '/images/photography/IMG_2274.JPG' },
    { id: 4, title: 'Photo 4', description: 'Photography collection', image: '/images/photography/IMG_2273.JPG' },
    { id: 5, title: 'Photo 5', description: 'Photography collection', image: '/images/photography/IMG_6981.PNG' },
    { id: 6, title: 'Photo 6', description: 'Photography collection', image: '/images/photography/IMG_5940.JPG' },
    { id: 7, title: 'Photo 7', description: 'Photography collection', image: '/images/photography/IMG_6145.JPG' },
    { id: 8, title: 'Photo 8', description: 'Photography collection', image: '/images/photography/IMG_6156.PNG' },
    { id: 9, title: 'Photo 9', description: 'Photography collection', image: '/images/photography/IMG_6164.JPG' },
    { id: 10, title: 'Photo 10', description: 'Photography collection', image: '/images/photography/IMG_6165.JPG' },
    { id: 11, title: 'Photo 11', description: 'Photography collection', image: '/images/photography/IMG_6177.JPG' },
    { id: 12, title: 'Photo 12', description: 'Photography collection', image: '/images/photography/IMG_6976.JPG' },
    { id: 13, title: 'Photo 13', description: 'Photography collection', image: '/images/photography/IMG_6977.PNG' }
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