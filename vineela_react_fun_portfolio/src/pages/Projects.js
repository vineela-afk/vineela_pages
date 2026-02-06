import React, { useRef, useState } from 'react';

const defaultProjects = [
  {
    id: 1,
    title: 'SPAR System',
    desc: 'Enterprise-grade FastAPI backend with intelligent caching and Next.js portal for financial workflows.',
    details: 'Optimized API latency by 40%, implemented modular architecture and secure payment registry.',
    link: ''
  },
  {
    id: 2,
    title: 'Distributed Commerce Ecosystem',
    desc: 'Event-driven microservices platform using Kafka and Spring Boot.',
    details: 'Implemented Resilience4j, circuit breakers, retries and OAuth2 security.',
    link: ''
  },
  {
    id: 3,
    title: 'Realtime Metrics Platform',
    desc: 'Observability platform with OpenTelemetry and Grafana.',
    details: 'Centralized logging and monitoring across distributed services.',
    link: ''
  },
  {
    id: 4,
    title: 'Payments Service',
    desc: 'Secure microservice handling transactions with idempotency.',
    details: 'Ensured fault tolerance and safe retries in financial operations.',
    link: ''
  }
];

export default function Projects() {
  const rail = useRef(null);
  const [active, setActive] = useState(null);

  const scroll = (dir) => {
    if (!rail.current) return;
    rail.current.scrollBy({ left: dir * 420, behavior: 'smooth' });
  };

  return (
    <section>
      <h2>Projects & Experience</h2>

      <div className="carousel-controls">
        <button className="btn" onClick={() => scroll(-1)}>⬅</button>
        <button className="btn" onClick={() => scroll(1)}>➡</button>
      </div>

      <div className="projects-rail" ref={rail}>
        {defaultProjects.map(p => (
          <article
            key={p.id}
            className={`project-slide card ${active === p.id ? 'active' : ''}`}
            onClick={() => setActive(active === p.id ? null : p.id)}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            {active === p.id && (
              <div className="project-details">
                <p>{p.details}</p>
              </div>
            )}

            {p.link && (
              <a className="btn" href={p.link} target="_blank" rel="noreferrer">
                View
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}