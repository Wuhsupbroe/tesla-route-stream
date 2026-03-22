import React, { useState, useEffect } from 'react';
import './App.css';
import './CyberDashboard.css';
import { routeData } from './data/routeData';
import AccurateMap from './components/AccurateMap';

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
      </header>
      
      {/* Cartoony Map Section */}
      <section className="map-section fade-in-up-2">
        <h2 className="pulse-text">Explore The Concept Map</h2>
        <div className="map-container floating-subtle">
          <AccurateMap 
            parks={parks}
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
              <p>{selectedPark.description}</p>
              
              {selectedPark.activities && (
                <div className="activities-section">
                  <h3 style={{ marginBottom: '10px', color: 'var(--secondary)', fontWeight: 900 }}>Potential Activities:</h3>
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
