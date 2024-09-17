import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Users Say</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <p>"Casey Scholar has transformed how I study. I get real-time answers based on the content I need!"</p>
          <p>- Student A</p>
        </div>
        <div className="testimonial-card">
          <p>"The AI is highly accurate and tailored to my course materials. It's like having a personal tutor."</p>
          <p>- Student B</p>
        </div>
        <div className="testimonial-card">
          <p>"I love how quick and easy it is to get help with my studies using Casey Scholar."</p>
          <p>- Student C</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
