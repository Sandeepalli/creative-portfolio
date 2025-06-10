import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Art from './components/Art';
import Photography from './components/Photography';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;