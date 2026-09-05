import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, BrainCircuit, LineChart, Terminal, Cloud } from 'lucide-react';
import './About.css';

const skills = [
  {
    category: "Languages",
    icon: <Code2 size={20} />,
    items: ["Python", "SQL", "C++", "C"]
  },
  {
    category: "ML & DL",
    icon: <BrainCircuit size={20} />,
    items: ["Supervised Learning", "Deep Learning", "CNN", "RNN", "NLP", "Transformers", "LLMs", "Agentic AI", "Time Series Forecasting", "Computer Vision"]
  },
  {
    category: "Frameworks",
    icon: <Layers size={20} />,
    items: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "LangGraph", "Scikit-learn"]
  },
  {
    category: "Mathematics & Statistics",
    icon: <LineChart size={20} />,
    items: ["Probability", "Linear Algebra", "Inferential Statistics"]
  },
  {
    category: "Software Development",
    icon: <Terminal size={20} />,
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} />,
    items: ["AWS (EC2, S3, IAM)"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const About = () => (
  <section id="about" className="about section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="section-header"
      >
        <span className="section-eyebrow">Competencies</span>
        <h2 className="section-title">Technical Skills</h2>
        <div className="section-divider" />
      </motion.div>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="skill-card card"
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="skill-icon-wrapper">
              {group.icon}
            </div>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
