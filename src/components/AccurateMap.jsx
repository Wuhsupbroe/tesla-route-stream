import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import './AccurateMap.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// West coast focused projection
const mapProjectionConfig = {
  scale: 2500,
  center: [-115, 36.5]
};

export default function AccurateMap({ parks, routes, onSelectPark }) {
  // Build a lookup map holding coordinates for each park id to easily draw lines
  const parkCoords = {};
  parks.forEach(p => {
    parkCoords[p.id] = p.coordinates;
  });

  return (
    <div className="accurate-map-container">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={mapProjectionConfig}
        width={800}
        height={800}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#BDE7BD"          /* Light grassy green */
                  stroke="#2C3E50"        /* Thick dark cartoon outline */
                  strokeWidth={2}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#A5D6A5", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Draw the visual branching route lines connecting the parks */}
        {routes && routes.map((routeBlock, idx) => {
          const fromCoords = parkCoords[routeBlock.from];
          if (!fromCoords) return null;
          
          return routeBlock.to.map((destId, toIdx) => {
            const toCoords = parkCoords[destId];
            if (!toCoords) return null;
            return (
              <Line
                key={`${idx}-${toIdx}`}
                from={fromCoords}
                to={toCoords}
                stroke="#FF9F1C"
                strokeWidth={4}
                strokeLinecap="round"
                className="animated-dashed-line"
              />
            );
          });
        })}

        {/* Draw the massive bouncy cartoon pins */}
        {parks.map((park) => {
          return (
            <Marker key={park.id} coordinates={park.coordinates} onClick={() => onSelectPark(park)}>
              <g className="map-marker-cartoon">
                {/* A thick shadow */}
                <ellipse cx="0" cy="10" rx="14" ry="6" className="marker-shadow" />
                
                {/* Big bouncing cartoon pin */}
                <g className="marker-pin-head">
                  <path
                    d="M0,0 C-15,-15 -25,-30 -25,-45 A25,25 0 1,1 25,-45 C25,-30 15,-15 0,0 Z"
                    className="marker-path"
                  />
                  <circle cx="0" cy="-45" r="10" fill="#ffffff" />
                </g>
                
                {/* Bold white text with dark outline */}
                <text
                  textAnchor="middle"
                  y="25"
                  className="marker-label"
                >
                  {park.name}
                </text>
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
