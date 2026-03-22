import React, { useState, useEffect } from 'react';
import './App.css';
import './CyberDashboard.css';
import { routeData } from './data/routeData';
import AccurateMap from './components/AccurateMap';
import { Car, Map as MapIcon, Twitch } from 'lucide-react';

export default function App() {
  const [selectedPark, setSelectedPark] = useState(null);
  const parks = [routeData.start, ...routeData.parks];

  const openParkModal = (park) => {
    setSelectedPark(park);
  };

  const closeModal = () => {
    setSelectedPark(null);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPark) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedPark]);

  return (
    <div className="cartoon-app">
      
      {/* Hero Header with Intro Animations */}
      <header className="cartoon-hero fade-in-up-1">
        <h1>Where Should I Drive Next?</h1>
        <p>A 30-Day Interactive Tesla Stream. Vote on the route!</p>
        
        {/* Storytelling "How it Works" Section */}
        <div className="how-it-works-grid">
          <div className="story-step bouncy-entrance" style={{animationDelay: '0.2s'}}>
            <div className="step-icon">
              <Car size={32} />
            </div>
            <h3>The Journey</h3>
            <p>I am living out of my Tesla Model 3 for 30 epic days across the West Coast.</p>
          </div>
          <div className="story-step bouncy-entrance" style={{animationDelay: '0.4s'}}>
            <div className="step-icon">
              <Twitch size={32} />
            </div>
            <h3>The Catch</h3>
            <p>I have no idea where I'm going. The stream chat votes on my daily destinations!</p>
          </div>
          <div className="story-step bouncy-entrance" style={{animationDelay: '0.6s'}}>
            <div className="step-icon">
              <MapIcon size={32} />
            </div>
            <h3>The Map</h3>
            <p>Click the bouncing red pins below to explore the map and see where you could send me next!</p>
          </div>
        </div>
      </header>
      
      {/* Cartoony Map Section */}
      <section className="map-section fade-in-up-2">
        <h2 className="pulse-text">Explore The Concept Map</h2>
        <div className="map-container floating-subtle">
          <AccurateMap 
            parks={parks}
            routes={routeData.routes}
            onSelectPark={(park) => openParkModal(park)}
          />
        </div>
      </section>

      {/* Destinations Modal Overlay */}
      {selectedPark && (
        <div className="park-modal-overlay" onClick={closeModal}>
          <div className="park-modal-content bouncy-entrance" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>X</button>
            <div className="park-image-wrapper">
              <img src={selectedPark.image} alt={selectedPark.name} />
            </div>
            <div className="park-info">
              <h2>{selectedPark.name}</h2>
              {/* Conversational Storytelling Copy */}
              <p>
                <strong>If you vote to send me to {selectedPark.name}...</strong><br/><br/>
                {selectedPark.description}
              </p>
              
              {selectedPark.activities && (
                <div className="activities-section">
                  <h3 style={{ marginBottom: '10px', color: 'var(--secondary)', fontWeight: 900 }}>
                    Here's what I'll do on stream if this wins the vote:
                  </h3>
                  <div className="activities">
                    {selectedPark.activities.map((act, idx) => (
                      <span key={idx} className="activity-pill">{act}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
