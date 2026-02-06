import React, { useRef, useState } from 'react';

const defaultProjects = [
  {
    id: 1,
    title: 'GenAI Agent Platform – Google ADK',
    desc: 'Multi-agent orchestration platform built on Google ADK for A2A and MCP workflows.',
    details: `
      • Parallelized agent execution and introduced context reuse to reduce prompt tokens  
      • Improved p95 latency by ~35% through batching and optimized retry strategies  
      • Integrated OpenTelemetry for tracing model-to-agent interactions  
      • Deployed on Cloud Run with autoscaling for high-QPS workloads  
      • Implemented Terraform IaC for reproducible environments  
      • Reduced infrastructure cost through right-sizing and cold-start optimizations
    `,
    link: ''
  },
  {
    id: 2,
    title: 'SPAR Financial Platform',
    desc: 'Enterprise-grade backend system for secure cash transfers and beneficiary management.',
    details: `
      • Built modular FastAPI services handling 10,000+ beneficiaries  
      • Reduced API latency by 40% using caching and optimized DB queries  
      • Designed secure payment registry with audit logging  
      • Developed Next.js self-service portal for operations teams  
      • Implemented Kafka-based async processing for financial workflows  
      • Added circuit breakers and retries for resilient transactions
    `,
    link: ''
  },
  {
    id: 3,
    title: 'Toyota Defect Tracking System',
    desc: 'Microservices platform for vehicle defect lifecycle management.',
    details: `
      • Designed Spring Boot microservices for vehicle and line management  
      • Handled high-concurrency defect creation workflows  
      • Implemented optimistic locking and transaction safety  
      • Built REST APIs with role-based security  
      • Improved data consistency across distributed systems  
      • Optimized DB performance for large-scale production data
    `,
    link: ''
  },
  {
    id: 4,
    title: 'Distributed Commerce Ecosystem',
    desc: 'Event-driven platform using Kafka and Spring Boot for order processing.',
    details: `
      • Built asynchronous messaging architecture with Kafka  
      • Integrated Resilience4j for circuit breaking and retries  
      • Implemented OAuth2 and JWT-based authentication  
      • Achieved 45% reduction in inter-service latency  
      • Added dead-letter queues for fault tolerance  
      • Designed idempotent consumers for safe reprocessing
    `,
    link: ''
  },
  {
    id: 5,
    title: 'Observability & Monitoring Platform',
    desc: 'Centralized observability across distributed services.',
    details: `
      • Integrated OpenTelemetry for traces, metrics, and logs  
      • Migrated systems to Datadog/Grafana dashboards  
      • Built alerting for p95/p99 latency monitoring  
      • Reduced MTTR through structured logging  
      • Traced cross-service request flows end-to-end  
      • Enabled performance regression tracking
    `,
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
      <h2 style={{ textAlign: 'center' }}>Projects & Experience</h2>

      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <button className="btn" onClick={() => scroll(-1)}>⬅</button>
        <button className="btn" onClick={() => scroll(1)}>➡</button>
      </div>

      <div className="projects-rail" ref={rail}>
        {defaultProjects.map(p => {
          const isActive = active === p.id;

          return (
            <article
              key={p.id}
              onClick={() => setActive(p.id)}
              style={{
                cursor: 'pointer',
                padding: 20,
                margin: 10,
                borderRadius: 12,

                // ONLY increase size for the selected card
                minWidth: isActive ? 520 : 360,
                maxWidth: isActive ? 520 : 360,
                minHeight: isActive ? 420 : 220,

                // Color change only for active block
                backgroundColor: isActive ? '#0f172a' : '#0b1221',

                color: '#fff',

                transition: 'all 0.35s ease-in-out',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h3 style={{ textAlign: 'center' }}>{p.title}</h3>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  opacity: 0.9,
                  maxWidth: '90%'
                }}
              >
                {p.desc}
              </p>

              {!isActive && (
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 13,
                    color: '#6fb3ff'
                  }}
                >
                  Tap to know more &gt;&gt;
                </div>
              )}

              {isActive && (
                <div
                  style={{
                    marginTop: 12,
                    paddingTop: 10,
                    borderTop: '1px solid #1f2d40',
                    textAlign: 'left',
                    fontSize: 13,
                    whiteSpace: 'pre-line',
                    width: '100%'
                  }}
                >
                  {p.details}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}