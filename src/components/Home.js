import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="profile-container">
            <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
          </div>
          <div className="hero-text">
            <h1>Welcome</h1>
            <p>Showcasing my work and creative projects</p>
            <div className="hero-buttons">
              <Link to="/art" className="btn btn-primary">View Artwork</Link>
              <Link to="/photography" className="btn btn-secondary">View Photography</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-work">
        <h2>Featured Work</h2>
        <div className="featured-categories">
          <Link to="/art" className="category-card">
            <div className="category-image art-bg">
              <div className="category-overlay">
                <h3>Artwork</h3>
                <div className="category-line"></div>
                <p>Explore my latest artistic creations</p>
                <span className="view-more">View Gallery</span>
              </div>
            </div>
          </Link>
          
          <Link to="/photography" className="category-card">
            <div className="category-image photo-bg">
              <div className="category-overlay">
                <h3>Photography</h3>
                <div className="category-line"></div>
                <p>Moments captured through the lens</p>
                <span className="view-more">View Gallery</span>
              </div>
            </div>
          </Link>
          
          <div className="category-card">
            <div className="category-image writing-bg">
              <div className="category-overlay">
                <h3>Written Works</h3>
                <div className="category-line"></div>
                <p>Stories, poems, and creative writing</p>
                <span className="view-more">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;