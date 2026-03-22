import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Navigation, MapPin } from 'lucide-react';
import './AccurateMap.css';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// West coast focused projection
const mapProjectionConfig = {
  scale: 2500,
  center: [-115, 36.5] // Roughly centers around Nevada/California/Arizona
};

export default function AccurateMap({ parks, selectedPark, onSelectPark }) {
  // We only want to vaguely highlight or show the states we care about,
  // or just show the whole map but it's zoomed in.
  
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
                  fill="rgba(10, 14, 20, 0.4)"
                  stroke="rgba(0, 255, 255, 0.15)"
                  strokeWidth={1}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "rgba(0, 255, 255, 0.05)", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {parks.map((park) => {
          const isSelected = selectedPark?.id === park.id;
          const isStart = park.id === "phoenix";

          return (
            <Marker key={park.id} coordinates={park.coordinates} onClick={() => onSelectPark(park)}>
              <g className={`map-marker-group ${isSelected ? "selected" : ""}`}>
                {/* The glowing shadow base */}
                <ellipse cx="0" cy="8" rx="10" ry="4" className="marker-shadow" />
                
                {/* The pin itself */}
                <g className="marker-pin-head" transform="translate(0, -15)">
                  <path
                    d="M0,0 C-10,-10 -15,-20 -15,-30 A15,15 0 1,1 15,-30 C15,-20 10,-10 0,0 Z"
                    className="marker-path"
                  />
                  {/* Inner Icon could go here, for now SVG path is enough */}
                </g>
                
                <text
                  textAnchor="middle"
                  y="20"
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
