import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    type: "Publication",
    title: "Research Paper Accepted — ICSCCC 2026 (IEEE Sponsored)",
    org: "NIT Jalandhar",
    desc: "Leveraging SCADA and AMR Integration for Electric Load Forecasting: A Multi-Horizon Deep Learning Approach for Smart Grid Operations.",
    icon: <BookOpen size={20} />,
    link: "https://ieeexplore.ieee.org/document/11600173"
  },
  {
    type: "Achievement",
    title: "IndoML 2025 Finalist",
    org: "BITS Pilani",
    desc: "Reached the final round and received acceptance to present a research proposal at the Sixth Indian Symposium on Machine Learning.",
    icon: <Award size={20} />
  },
  {
    type: "Hackathon",
    title: "HacKronyX Hackathon — 3rd Place",
    org: "National Level",
    desc: "Developed AI Companion Quest, a gamified learning platform with personalised learning paths, a RAG-based chatbot, and collaborative learning features.",
    icon: <Award size={20} />
  },
  {
    type: "Hackathon",
    title: "Top 20 National Finalist",
    org: "IIT Kharagpur Data Science Hackathon 2025",
    desc: "Ranked 20 of 9,913+ participants. Built an AI/ML model for research paper publishability prediction and conference matching using real-time pipelines and vector search.",
    icon: <Award size={20} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const Achievements = () => (
  <section id="achievements" className="achievements section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="section-header"
      >
        <span className="section-eyebrow">Recognition</span>
        <h2 className="section-title">Achievements & Publications</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="achievements-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="achievement-item card"
            variants={itemVariants}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <div className="achievement-icon">
              {item.icon}
            </div>

            <div className="achievement-body">
              <span className="achievement-badge">{item.type}</span>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="achievement-title-link"
                >
                  <h3 className="achievement-title">
                    {item.title}
                    <ExternalLink size={14} className="ext-icon" />
                  </h3>
                </a>
              ) : (
                <h3 className="achievement-title">{item.title}</h3>
              )}

              <p className="achievement-org">{item.org}</p>
              <p className="achievement-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Achievements;
