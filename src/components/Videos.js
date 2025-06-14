import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';
import ImageModal from './ImageModal';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState({});
  const [revealIndexes, setRevealIndexes] = useState([]);
  const [likes, setLikes] = useState({});

  // Video data - add your video files to the public/videos directory
  const videos = [
    { 
      id: 1, 
      title: 'Video 1', 
      description: 'Video collection', 
      video: '/videos/1749410815066681.mp4',
      thumbnail: '/images/photography/IMG_6156.PNG'
    },
    // Add more videos here
  ];

  // Preload video thumbnails
  useEffect(() => {
    const preloadThumbnails = () => {
      videos.forEach(video => {
        const img = new Image();
        img.src = video.thumbnail;
        img.onload = () => {
          setLoadedVideos(prev => ({ ...prev, [video.id]: true }));
        };
      });
    };
    preloadThumbnails();
  }, []);

  // Reveal animation
  useEffect(() => {
    let i = 0;
    setRevealIndexes([]);
    const interval = setInterval(() => {
      setRevealIndexes(prev => {
        if (prev.length < videos.length) {
          return [...prev, prev.length];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
      i++;
    }, 180);
    return () => clearInterval(interval);
  }, [videos.length]);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
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
        <h1>Videos</h1>
        <p>A collection of my video projects and moments</p>
      </div>
      
      <div className="gallery-grid">
        {videos.map((video, idx) => (
          <div
            key={video.id}
            className={`gallery-item${revealIndexes.includes(idx) ? ' revealed' : ''}`}
            onClick={() => openModal(video)}
            style={{ opacity: revealIndexes.includes(idx) ? 1 : 0, transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)'}}
          >
            <div className="gallery-image-container">
              <div className="gallery-image-wrapper video-wrapper portrait">
                {!loadedVideos[video.id] && <div className="gallery-img-placeholder" />}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={`gallery-img${loadedVideos[video.id] ? ' loaded' : ''}`}
                />
                <div className="video-play-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="none">
                    <circle cx="12" cy="12" r="10" fillOpacity="0.8"/>
                    <path d="M10 8l6 4-6 4V8z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="gallery-overlay glass">
                <span className="view-icon">▶</span>
                <button
                  className={`like-btn${likes[video.id] ? ' liked' : ''}`}
                  onClick={(e) => toggleLike(video.id, e)}
                  aria-label={likes[video.id] ? 'Unlike' : 'Like'}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill={likes[video.id] ? '#e25555' : 'none'} stroke="#e25555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6c-1.5-1.4-3.9-1.4-5.4 0l-.7.7-.7-.7c-1.5-1.4-3.9-1.4-5.4 0-1.6 1.5-1.6 4 0 5.5l6.1 6.1 6.1-6.1c1.6-1.5 1.6-4 0-5.5z"></path></svg>
                </button>
              </div>
            </div>
            <div className="gallery-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="video-modal-overlay" onClick={closeModal}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <video
              controls
              autoPlay
              className="video-player"
              src={selectedVideo.video}
              title={selectedVideo.title}
            >
              Your browser does not support the video tag.
            </video>
            <div className="modal-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;