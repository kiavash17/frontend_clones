
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="animated-background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">AI Powered by Your Course Materials</h1>
        <p className="hero-description">Instant and accurate AI responses based on your class slides and readings.</p>
        <button className="get-started-button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
