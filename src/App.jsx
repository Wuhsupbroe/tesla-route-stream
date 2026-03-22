import React from 'react';
import './App.css';
import './CyberDashboard.css'; // Contains the new cartoon styles
import { routeData } from './data/routeData';
import AccurateMap from './components/AccurateMap';

export default function App() {
  const parks = [routeData.start, ...routeData.parks];

  const scrollToPark = (parkId) => {
    const el = document.getElementById(parkId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="cartoon-app">
      
      {/* Hero Header */}
      <header className="cartoon-hero">
        <h1>Tesla Adventure Roadmap</h1>
        <p>Explore the conceptual journey across the spectacular West Coast.</p>
      </header>
      
      {/* Cartoony Map Section */}
      <section className="map-section">
        <h2>The Route Map</h2>
        <div className="map-container">
          <AccurateMap 
            parks={parks}
            onSelectPark={(park) => scrollToPark(park.id)}
          />
        </div>
      </section>

      {/* Destinations Gallery */}
      <section className="destinations-gallery">
        {parks.map((park) => (
          <article key={park.id} id={park.id} className="park-card">
            <div className="park-image-wrapper">
              <img src={park.image} alt={park.name} />
            </div>
            <div className="park-info">
              <h2>{park.name}</h2>
              <p>{park.description}</p>
              
              {park.activities && (
                <div className="activities-section">
                  <h3 style={{ marginBottom: '10px', color: 'var(--secondary)', fontWeight: 900 }}>Concept Activities:</h3>
                  <div className="activities">
                    {park.activities.map((act, idx) => (
                      <span key={idx} className="activity-pill">{act}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

    </div>
  );
}
