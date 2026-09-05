import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: "AI Researcher",
    company: "ALDC, Area Load Despatch Centre · MSETCL (MAHATRANSCO) GOV",
    period: "March 2025 – 2026",
    description: [
      "Developed deep learning models for electricity load forecasting using SCADA and AMR data.",
      "Processed 100,000+ records through preprocessing and missing-value handling pipelines.",
      "Collaborated with ALDC engineers to validate and deploy forecasting models in production.",
    ]
  },
  {
    role: "AI / ML Developer",
    company: "DevUnite",
    period: "2024 – 2025",
    description: [
      "Engineered and deployed Retrieval-Augmented Generation (RAG) pipelines integrating vector databases, embeddings, and LLMs for semantic search and accurate contextual responses.",
      "Developed and tuned machine learning models for data preprocessing, feature engineering, and predictive workflows."
    ]
  }
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const Experience = () => (
  <section id="experience" className="experience section">
    <motion.div 
      className="section-watermark"
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 0.04 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      CAREER
    </motion.div>
    
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="section-header"
      >
        <span className="section-eyebrow">Career</span>
        <h2 className="section-title">Professional Experience</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} className="timeline-item" variants={itemVariants}>
            <div className="timeline-marker">
              <div className="timeline-icon">
                <Briefcase size={15} />
              </div>
            </div>

            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>

              <ul className="timeline-details">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Experience;
