import React, { useEffect, useState } from 'react';

export default function CatchUp() {
  const [hearts, setHearts] = useState(0);
  const [showHeartPopup, setShowHeartPopup] = useState(false);

  useEffect(() => {
    const handler = () => {
      setHearts(h => {
        const newCount = h + 1;

        // Show popup on every second heart click
        if (newCount % 2 === 0) {
          setShowHeartPopup(true);
          setTimeout(() => setShowHeartPopup(false), 3000);
        }

        return newCount;
      });
    };

    window.addEventListener('po-heart', handler);
    return () => window.removeEventListener('po-heart', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! I will reach out shortly.');
  };

  // 🔥 NEW: Trigger po-heart event directly from heart click
  const handleHeartClick = () => {
    const ev = new CustomEvent('po-heart');
    window.dispatchEvent(ev);
  };

  return (
    <section className="catch-up">
      <h2>Let's Connect</h2>
      <p>Reach out and let's chat about tech, systems design, or just coffee ☕</p>

      <div className="quick-connect card">
        <h3>Wanna connect quickly?</h3>

        <p>
          Click the heart — hearts received:
          <strong className="heart-count">
            {hearts}

            {/* CLICKABLE HEART NOW */}
            <span
              onClick={handleHeartClick}
              style={{
                cursor: 'pointer',
                marginLeft: 6,
                fontSize: 22
              }}
            >
              ❤️
            </span>

          </strong>
        </p>
      </div>

      <form className="contact-form card" onSubmit={handleSubmit}>
        <h3>Send a message</h3>

        <div className="form-grid">
          <input className="form-box" name="name" placeholder="Your name" required />
          <input className="form-box" name="email" placeholder="Your email" type="email" required />
          <textarea className="form-box" name="message" placeholder="Message" required />
        </div>

        <div className="button-row">
          <button className="btn form-box" type="submit">Send</button>
        </div>
      </form>

      <div className="contact-info card">
        <h3>Other Ways</h3>
        <p>Email: <a href="mailto:ampiliveela@gmail">ampiliveela@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/vineela-afk" target="_blank" rel="noreferrer">vineela-afk</a></p>
      </div>

      {showHeartPopup && (
        <div className="heart-popup" role="dialog" aria-live="polite">
          <div className="heart-popup-box">
            You sent {hearts} hearts ❤️
            9441689944
          </div>
        </div>
      )}
    </section>
  );
}