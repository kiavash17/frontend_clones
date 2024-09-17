import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>No Hallucinations</h3>
          <p>Our AI answers your questions based strictly on your course materials.</p>
        </div>
        <div className="feature-card">
          <h3>Real-Time Analysis</h3>
          <p>Receive answers within seconds with real-time processing.</p>
        </div>
        <div className="feature-card">
          <h3>Highly Accurate</h3>
          <p>We ensure high accuracy by linking AI responses to specific course content.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
