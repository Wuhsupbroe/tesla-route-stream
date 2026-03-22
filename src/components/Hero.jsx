import React from 'react';
import './Hero.css';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        {/* We can use a stylish placeholder or real unsplash image for a Model 3 driving */}
        <img 
          src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop" 
          alt="Tesla driving in desert" 
          className="hero-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="badge glass">LIVE EVENT</div>
        <h1 className="heading-xl">
          <span className="text-gradient">30 Days.</span><br />
          <span className="text-gradient">7 Parks.</span><br />
          <span className="text-gradient-accent">YOU Decide.</span>
        </h1>
        <p className="hero-subtitle">
          Join the ultimate interactive road trip. I'm taking my Tesla Model 3 across the wildest landscapes of the West. Where I go, what I do, and how I get there is entirely up to the chat.
        </p>
        
        <button className="cta-button" onClick={handleScroll}>
          View The Route Options
        </button>
      </div>

      <div className="scroll-indicator" onClick={handleScroll}>
        <span>Scroll to Explore</span>
        <ChevronDown size={24} className="bounce-icon" />
      </div>
    </section>
  );
}
