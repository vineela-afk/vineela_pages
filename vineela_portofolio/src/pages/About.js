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
      
      <h2>Hola!</h2>
      <p style={{maxWidth: '680px', lineHeight: '1.7'}}>
        I am a software engineer focused on building reliable and scalable AI-powered systems. I specialize in designing GenAI platforms, multi-agent architectures, and cloud-native services that orchestrate large language models efficiently. My work centers around optimizing prompts and inference workflows, improving observability for model-driven pipelines, and engineering robust, cost-effective solutions that scale securely in real-world AI applications.
      </p>

      <h2>Professional Experience</h2>
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