import React from 'react';
import { useNavigate } from 'react-router-dom';
import About from './About';
export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="hero-grid">
        <div className="hero-left card">
          <div className="eyebrow">SOFTWARE DEVELOPER | BACKEND</div>
         <About></About>
          <div className="hero-ctas">
            <button className="btn projects-cta" onClick={() => navigate('/projects')}>See Projects</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="pattern" />
          <img className="hero-image" src="/vineela-hero.jpg" alt="Vineela Ampili" />
        </div>
      </section>
    </main>
  );
}
