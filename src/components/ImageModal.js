import React from 'react';
import '../styles/ImageModal.css';

const ImageModal = ({ image, title, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
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