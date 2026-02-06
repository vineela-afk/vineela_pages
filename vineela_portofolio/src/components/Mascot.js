import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Mascot.css';
const CHECKPOINTS = [
  { id: 'home', label: '🏠 Home', path: '/' },
  { id: 'projects', label: '📦 Projects', path: '/projects' },
  { id: 'catch-up', label: '💬 Catch Up', path: '/catch-up' }
];

export default function Mascot() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMoving, setIsMoving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Update current step based on route
  useEffect(() => {
    const checkpoint = CHECKPOINTS.findIndex(cp => cp.path === location.pathname);
    setCurrentStep(checkpoint >= 0 ? checkpoint : 0);
  }, [location.pathname]);

  const handleMascotClick = () => {
    if (isMoving) return;
    setIsMoving(true);
    
    // Move to next checkpoint
    const nextStep = (currentStep + 1) % CHECKPOINTS.length;
    setTimeout(() => {
      navigate(CHECKPOINTS[nextStep].path);
      setIsMoving(false);
    }, 1500);
  };

  const handleMascotDouble = () => {
    // emit a global event so other pages can react (e.g., increment hearts)
    const ev = new CustomEvent('po-heart');
    window.dispatchEvent(ev);
    // local pulse visual
    setShowHeart(true);
    clearTimeout(heartTimer.current);
    heartTimer.current = setTimeout(() => setShowHeart(false), 900);
  };

  // show thought bubble first time
  const [showThought, setShowThought] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const heartTimer = useRef(null);
  useEffect(() => {
    const seen = sessionStorage.getItem('po_seen');
    if (!seen) {
      setShowThought(true);
      sessionStorage.setItem('po_seen', '1');
      setTimeout(() => setShowThought(false), 3800);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(heartTimer.current);
    };
  }, []);

  const progress = (currentStep / (CHECKPOINTS.length - 1)) * 100;

  return (
    <div className="mascot-nav" onClick={handleMascotClick} onDoubleClick={handleMascotDouble} role="button" tabIndex="0">
      <div className="mascot-track">
        {/* Progress bar */}
        <div className="progress-bar" style={{ width: `${progress}%` }} />
        
        {/* Checkpoints */}
        {CHECKPOINTS.map((cp, idx) => (
          <div 
            key={cp.id}
            className={`checkpoint-dot ${idx === currentStep ? 'active' : ''} ${idx < currentStep ? 'visited' : ''}`}
            style={{ left: `${(idx / (CHECKPOINTS.length - 1)) * 100}%` }}
          />
        ))}

        {/* Running mascot */}
        <div 
          className={`mascot-runner ${isMoving ? 'moving' : ''}`}
          style={{ 
            left: `${progress}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <span className="mascot-emoji">🧸</span>
        </div>
      </div>

      {/* Labels */}
      <div className="checkpoint-labels">
        {CHECKPOINTS.map((cp, idx) => (
          <span key={cp.id} className={`label ${idx === currentStep ? 'active' : ''}`}>
            {cp.label}
          </span>
        ))}
      </div>

      <p className="mascot-hint">Click Po to explore 🐾</p>
       
      {showHeart && (
        <div className="po-heart-pulse">❤️</div>
      )}
    </div>
  );
}
