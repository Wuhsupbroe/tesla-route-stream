import React, { useState } from 'react';
import './App.css';
import './CyberDashboard.css';
import { Map, MessageSquare, Image as ImageIcon, Trophy, Zap, MapPin, Navigation, Signal, Battery, Activity } from 'lucide-react';
import { routeData } from './data/routeData';

export default function App() {
  const [activeTab, setActiveTab] = useState('map');
  const [selectedPark, setSelectedPark] = useState(null);

  const parks = [routeData.start, ...routeData.parks];

  return (
    <div className="cyber-dashboard">
      {/* LEFT NAVIGATION HUD */}
      <nav className="side-nav glass-panel">
        <div className="nav-logo">
          <Zap size={32} color="var(--primary)" className="glow-icon" />
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
            <Map size={24} />
          </button>
          <button className={`nav-btn ${activeTab === 'chat' ? 'active' : ''}`} onClick={() => setActiveTab('chat')}>
            <MessageSquare size={24} />
          </button>
          <button className={`nav-btn ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>
            <ImageIcon size={24} />
          </button>
          <button className={`nav-btn ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => setActiveTab('leaderboard')}>
            <Trophy size={24} />
          </button>
        </div>
        <div className="nav-bottom">
          <div className="live-indicator">
            <Signal size={20} color="var(--tertiary)" className="pulse-signal" />
          </div>
        </div>
      </nav>

      {/* CENTER: 3D CARTOON MAP ARENA */}
      <main className="map-arena glass-panel">
        <header className="arena-header">
          <div>
            <h1 className="heading-display"><span className="text-gradient-cyan">Route</span> Command</h1>
            <p style={{ color: 'var(--text-muted)' }}>Interactive 30-Day Tesla Road Trip</p>
          </div>
          
          {/* Trip Status Widget inline */}
          <div className="trip-status-widget glass-panel">
            <div className="status-item">
              <span className="status-label">DAY</span>
              <span className="status-val">12 <span className="dim">/ 30</span></span>
            </div>
            <div className="status-divider"></div>
            <div className="status-item">
              <span className="status-label">DISTANCE</span>
              <span className="status-val">4,280 <span className="dim">MI</span></span>
            </div>
            <div className="status-divider"></div>
            <div className="status-item">
              <span className="status-label"><Battery size={14} color="var(--primary)"/> BATTERY</span>
              <span className="status-val text-gradient-cyan">82%</span>
            </div>
          </div>
        </header>

        {/* The "Cartoon 3D Map" visual container */}
        <div className="cartoon-map-viewport">
          <img src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop" alt="Stylized background" className="cartoon-map-bg" />
          <div className="map-overlay-layer">
            
            {/* Render stylized 3D map pins */}
            <div className="route-network">
              {parks.map((park, i) => {
                const isSelected = selectedPark?.id === park.id;
                // Scatter them playfully (in a real app, uses precise absolute % coords)
                const top = 15 + (i * 12) + (i % 2 === 0 ? 10 : 0) + '%';
                const left = 20 + (i * 10) + (i % 2 === 0 ? -15 : 15) + '%';
                
                return (
                  <div 
                    key={park.id} 
                    className={`map-pin-3d ${isSelected ? 'selected' : ''}`} 
                    style={{ top, left }}
                    onClick={() => setSelectedPark(park)}
                  >
                    <div className="pin-head">
                      {park.id === 'phoenix' ? <Navigation size={18} /> : <MapPin size={18} />}
                    </div>
                    <div className="pin-shadow"></div>
                    <div className="pin-label glass-panel">{park.name}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      {/* RIGHT: INTERACTIVE CONTROL PANEL */}
      <aside className="control-panel">
        
        {/* Live Stream Viewfinder Overlay */}
        <div className="live-stream-widget glass-panel">
          <div className="stream-header">
            <span className="live-badge">LIVE NOW</span>
            <span className="viewer-count">14.2k Viewers</span>
          </div>
          <div className="stream-thumbnail">
            <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop" alt="Tesla Cam" />
            <div className="play-button"><Activity size={24} color="var(--bg-dark)"/></div>
          </div>
        </div>

        {/* Dynamic Context Panel (Voting / Next Stop) */}
        <div className="voting-panel glass-panel">
          {selectedPark ? (
            <div className="park-detail-view slide-in">
              <img src={selectedPark.image} alt={selectedPark.name} className="park-hero-img" />
              <h2 className="heading-section text-gradient-cyan">{selectedPark.name}</h2>
              <p className="park-desc">{selectedPark.description}</p>
              
              {selectedPark.activities && (
                <div className="poll-container">
                  <h3 className="poll-title">VOTE: Next Activity</h3>
                  {selectedPark.activities.map((act, idx) => (
                    <button key={idx} className="poll-btn">
                      <span className="poll-text">{act}</span>
                      <span className="poll-bar" style={{ width: `${Math.floor(Math.random() * 60) + 20}%`}}></span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="empty-voting">
              <div className="empty-icon"><MapPin size={48} color="var(--surface-border)" /></div>
              <h3>No Destination Selected</h3>
              <p>Click a glowing pin on the cartoon map to preview the location and cast your vote.</p>
            </div>
          )}
        </div>

      </aside>
    </div>
  );
}
