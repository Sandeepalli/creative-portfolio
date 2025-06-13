import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ image, title, description, onClose, photos, currentId, setSelectedImage }) => {
  // Navigation handlers
  const currentIndex = photos ? photos.findIndex(p => p.id === currentId) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = photos && currentIndex < photos.length - 1;

  const goPrev = (e) => {
    e.stopPropagation();
    if (hasPrev) setSelectedImage(photos[currentIndex - 1]);
  };
  const goNext = (e) => {
    e.stopPropagation();
    if (hasNext) setSelectedImage(photos[currentIndex + 1]);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {hasPrev && <button className="modal-nav modal-prev" onClick={goPrev} aria-label="Previous">‹</button>}
        {hasNext && <button className="modal-nav modal-next" onClick={goNext} aria-label="Next">›</button>}
        <img src={image} alt={title} className="modal-image" />
        <div className="modal-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;