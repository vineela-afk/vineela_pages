import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Developer',
      company: 'Optum',
      desc: 'Designing and delivering scalable, fault-tolerant cloud systems with a strong focus on observability, performance, and automation.',
      stack: ['GCP', 'Terraform', 'OpenTelemetry', 'Kubernetes', 'PostgreSQL']
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'Technoforte',
      desc: 'Built high-performance APIs and event-driven microservices supporting real-time business workflows and enterprise integrations.',
      stack: ['Python', 'FastAPI', 'Spring Boot', 'Kafka', 'Docker']
    }
  ];

  return (
    <section>
      <Navbar />
      
      <h2>About Me</h2>
      <p style={{maxWidth: '680px', lineHeight: '1.7'}}>
        I am a software engineer focused on building reliable and scalable backend systems.  
        I specialize in microservices architecture, distributed systems, and cloud-native development.  
        My work centers around writing clean, maintainable code, improving system observability,  
        and designing solutions that scale efficiently under real-world workloads.
      </p>

      <h3>Professional Experience</h3>
      <div className="experiences">
        {experiences.map(exp => (
          <div key={exp.id} className="card exp-card">
            <h4>{exp.role}</h4>
            <p className="company">{exp.company}</p>
            <p>{exp.desc}</p>

            <div className="stack-badges">
              {exp.stack.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}