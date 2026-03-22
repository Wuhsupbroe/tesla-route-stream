import React, { useState } from 'react';
import './InteractiveMap.css';
import { routeData } from '../data/routeData';
import ParkCard from './ParkCard';

export default function InteractiveMap() {
  const [selectedParkId, setSelectedParkId] = useState(null);

  // Group nodes by "tiers/stages" of the journey to render columns
  const journeyStages = [
    [routeData.start], // Stage 0: Phoenix
    routeData.parks.filter(p => ['grand-canyon', 'joshua-tree'].includes(p.id)), // Stage 1
    routeData.parks.filter(p => ['zion', 'death-valley'].includes(p.id)), // Stage 2
    routeData.parks.filter(p => ['bryce-canyon', 'sequoia'].includes(p.id)), // Stage 3
    routeData.parks.filter(p => ['yosemite'].includes(p.id)) // Stage 4
  ];

  const handleNodeClick = (id) => {
    setSelectedParkId(id);
  };

  const selectedPark = routeData.parks.find(p => p.id === selectedParkId) || (selectedParkId === 'phoenix' ? routeData.start : null);

  return (
    <section id="map-section" className="map-container">
      <div className="map-header">
        <h2 className="heading-lg">Choose The Route</h2>
        <p className="text-muted">Chat dictates where the Tesla goes next. Explore the destinations below.</p>
      </div>
      
      <div className="map-layout">
        {/* The visual network graph / timeline */}
        <div className="nodes-container">
          {journeyStages.map((stage, sIdx) => (
            <div key={`stage-${sIdx}`} className="stage-column">
              {stage.map((node) => {
                const isSelected = selectedParkId === node.id;
                const isStart = node.id === 'phoenix';
                return (
                  <div 
                    key={node.id} 
                    className={`route-node glass ${isSelected ? 'active' : ''} ${isStart ? 'start-node' : ''}`}
                    onClick={() => handleNodeClick(node.id)}
                  >
                    <div className="node-indicator"></div>
                    <span className="node-label">{node.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
          
          {/* Custom SVG lines could be rendered here to connect nodes, but using a purely CSS layout with pseudo-elements between stages is simpler and cleaner for this layout approach */}
          <div className="map-connections-bg"></div>
        </div>

        {/* The selected park preview / voting card */}
        <div className="card-viewer">
          {selectedPark ? (
            <ParkCard park={selectedPark} isStart={selectedPark.id === 'phoenix'} />
          ) : (
            <div className="empty-state glass">
              <span className="pulse-dot"></span>
              <p>Select a destination on the route map to see details and vote options.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
