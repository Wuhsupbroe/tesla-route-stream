import React from 'react';
import './ParkCard.css';
import { MapPin, Battery, Calendar, ArrowRight } from 'lucide-react';

export default function ParkCard({ park, isStart }) {
  if (!park) return null;

  return (
    <div className="park-card glass">
      <div className="card-image-container">
        <img src={park.image} alt={park.name} className="card-image" />
        <div className="image-overlay">
          {isStart ? (
            <div className="card-badge start-badge">START POINT</div>
          ) : (
            <div className="card-badge destination-badge">DESTINATION</div>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="heading-lg">{park.name}</h3>
          <p className="card-state">
            <MapPin size={16} />
            {park.state ? park.state : 'USA'}
          </p>
        </div>

        <p className="card-description">{park.description}</p>

        {!isStart && park.activities && (
          <div className="activities-section">
            <h4 className="section-title">Vote On Activities</h4>
            <ul className="activity-list">
              {park.activities.map((act, i) => (
                <li key={i} className="activity-item">
                  <span className="activity-bullet"></span>
                  {act}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="card-footer">
          <div className="stat-item">
            <Battery size={20} className="icon-accent" />
            <span>Superchargers Verified</span>
          </div>
          <div className="stat-item">
            <Calendar size={20} className="icon-accent" />
            <span>Day {isStart ? '1' : 'TBD'}</span>
          </div>
        </div>

        {!isStart && (
          <button className="vote-btn">
            HOW TO VOTE <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
