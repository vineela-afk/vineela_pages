import React, { useEffect, useState } from 'react';

export default function CatchUp() {
  // heart count from Po double-clicks
  const [hearts, setHearts] = useState(0);

  useEffect(() => {
    const handler = () => setHearts(h => h + 1);
    window.addEventListener('po-heart', handler);
    return () => window.removeEventListener('po-heart', handler);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! I will reach out shortly.');
  };

  return (
    <section className="catch-up">
      <h2>Let's Connect</h2>
      <p>Reach out and let's chat about tech, systems design, or just coffee ☕</p>

      <div className="quick-connect card">
        <h3>Wanna connect quickly?</h3>
        <p>Double-click on Po (top-right) to send a heart — hearts received: <strong className="heart-count">{hearts} ❤️</strong></p>
      </div>

      <form className="contact-form card" onSubmit={handleSubmit}>
        <h3>Send a message</h3>
        <input name="name" placeholder="Your name" required />
        <input name="email" placeholder="Your email" type="email" required />
        <textarea name="message" placeholder="Message" required />
        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button className="btn" type="submit">Send</button>
          <a className="btn ghost" href="mailto:ampiliveela@gmail">Email me</a>
        </div>
      </form>

      <div className="contact-info card">
        <h3>Other Ways</h3>
        <p>Email: <a href="mailto:ampiliveela@gmail">ampiliveela@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/vineela-afk" target="_blank" rel="noreferrer">vineela-afk</a></p>
      </div>
    </section>
  );
}
