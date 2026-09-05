import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import profilePhoto from '../Gallery/Devansh Linkdin.png';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const TypeWriter = ({ text, delay = 1.5, speed = 80 }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setShowCursor(false);
    }
  }, [started, displayed, text, speed]);

  // Cursor blink
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    if (!showCursor) return;
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [showCursor]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <span className="typing-cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>.</span>
      )}
    </span>
  );
};

const Hero = () => (
  <section id="home" className="hero section">
    <div className="container hero-container">

      {/* ── Left: Photo ── */}
      <motion.div
        className="hero-photo-wrap"
        initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.2, delay: 0.6, type: 'spring', stiffness: 100, damping: 20 }}
      >
        <motion.div
          className="hero-photo-frame"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <img src={profilePhoto} alt="Devansh Paltewar" className="hero-photo" />
        </motion.div>

      </motion.div>

      {/* ── Right: Text ── */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-eyebrow" variants={itemVariants}>
          AI / Machine Learning Professional
        </motion.span>

        <h1 className="hero-name">
          <TypeWriter text="Devansh Paltewar" delay={1.2} speed={90} />
        </h1>

        <motion.p className="hero-summary" variants={itemVariants}>
          Results-driven professional with demonstrated expertise in machine learning,
          deep learning, NLP, and time-series forecasting. Committed to advancing applied
          AI research and delivering measurable analytical outcomes.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} /> Get in Touch
          </motion.a>
          <motion.a
            href="#about"
            className="btn btn-outline"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
          </motion.a>
        </motion.div>
      </motion.div>

    </div>

  </section>
);

export default Hero;
