import React, { useRef, useState } from 'react';
import { ShieldCheck, Bug, ArrowRight, Server, Rocket } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import profilePic from './assets/profile.png';
import './App.css';

const MagneticButton = ({ children, className, onClick, style }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      style={{ ...style, position: 'relative' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const FloatingBlob = ({ color, size, top, left, delay }) => (
  <motion.div
    className="floating-blob"
    style={{ background: color, width: size, height: size, top, left }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0],
    }}
    transition={{
      duration: 8 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }}
  />
);

function App() {
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const yHeroImage = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="app-container">
      {/* Background Particles/Blobs */}
      <div className="blobs-container">
        <FloatingBlob color="var(--accent-primary)" size="400px" top="-100px" left="-100px" delay={0} />
        <FloatingBlob color="var(--accent-secondary)" size="300px" top="40%" left="80%" delay={2} />
        <FloatingBlob color="var(--accent-primary)" size="250px" top="80%" left="10%" delay={4} />
      </div>

      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <div className="logo">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.4 }}>
              <ShieldCheck size={28} className="text-blue-500" />
            </motion.div>
            <span>Hira<span className="text-gradient">Khalid</span></span>
          </div>
          <div className="nav-links">
            <a href="#home" className="hover-underline">Home</a>
            <a href="#services" className="hover-underline">Expertise</a>
            <a href="#experience" className="hover-underline">Experience</a>
            <a href="#contact" className="hover-underline">Contact</a>
          </div>
          <MagneticButton className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </MagneticButton>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <motion.div className="container hero-content" style={{ y: yHeroText, opacity: opacityHero }}>
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Ship Flawless Software.<br />
              <span className="text-gradient">Elevate Your QA.</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hi, I'm Hira Khalid—a proactive SQA Engineer specializing in modern web automation and manual testing. I bridge the gap between code and quality using Playwright, Postman, and robust CI/CD practices.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <MagneticButton className="btn-primary glow-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                View My Experience <ArrowRight size={18} />
              </MagneticButton>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image-wrapper"
            style={{ y: yHeroImage }}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <div className="hero-image-glow"></div>
            <img src={profilePic} alt="Hira Khalid" className="hero-image" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div 
          className="container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="stats-grid">
            <motion.div className="stat-item" variants={fadeInUp}>
              <motion.div className="stat-number" whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(96 165 250 / 0.8)" }}>2+</motion.div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp}>
              <motion.div className="stat-number" whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(96 165 250 / 0.8)" }}>Web/App</motion.div>
              <div className="stat-label">Testing Expert</div>
            </motion.div>
            <motion.div className="stat-item" variants={fadeInUp}>
              <motion.div className="stat-number" whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(96 165 250 / 0.8)" }}>Agile</motion.div>
              <div className="stat-label">Process Driven</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Core <span className="text-gradient">Skills & Expertise</span></h2>
            <p className="section-subtitle">Comprehensive QA skills from manual defect tracking to automated Python scripts.</p>
          </motion.div>
          <motion.div 
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: Rocket, title: "Web Automation", desc: "Writing, optimizing, and maintaining automated test scripts using Python Playwright. CI/CD integration expertise." },
              { icon: Bug, title: "Manual & Functional", desc: "Designing detailed test cases, tracking defects with JIRA/Testmo, and conducting rigorous sanity & smoke testing." },
              { icon: Server, title: "API Testing", desc: "Validating backend services and ensuring robust data flow using Postman and Chrome DevTools." }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card tilt-card"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc" dangerouslySetInnerHTML={{ __html: service.desc.replace(/Python Playwright|Postman|JIRA|Testmo/g, '<strong>$&</strong>') }}></p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="services-section" style={{ background: 'var(--bg-color)', position: 'relative' }}>
        <div className="timeline-line"></div>
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
            <p className="section-subtitle">My journey as a Software Quality Assurance Engineer.</p>
          </motion.div>
          <motion.div 
            className="services-grid timeline-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {[
              { role: "QA Analyst", company: "BetacodesPK", date: "Sept 2025 – Present", points: ["Implemented an end-to-end functional testing suite using <strong>Python Playwright</strong> with a POM-structured <strong>Pytest</strong> framework.", "Created an accessibility testing suite using <strong>Playwright, axe-core, and Python</strong>.", "Automated API testing using <strong>Postman</strong> by adding scripts to run automated validation.", "Executed performance and load testing scenarios utilizing <strong>Locust</strong>."] },
              { role: "Junior QA", company: "AD5coders", date: "Sept 2024 – June 2025", points: ["Performed manual testing on e-commerce web and mobile applications.", "Designed and executed test cases based on business requirements, tracking bugs in JIRA and Testmo.", "Conducted sanity, smoke, and regression testing after each release cycle."] },
              { role: "Junior QA", company: "K2 Peak Technologies", date: "July 2023 – July 2024", points: ["Assisted senior QA engineers in functional and regression testing.", "Documented test cases, bug reports, and test summary reports.", "Gained exposure to API testing with Postman."] }
            ].map((exp, index) => (
              <motion.div 
                key={index} 
                className="service-card timeline-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="timeline-dot"></div>
                <h3 className="service-title">{exp.role}</h3>
                <p className="service-desc experience-meta">{exp.company} • {exp.date}</p>
                <ul className="service-desc experience-list">
                  {exp.points.map((pt, i) => <li key={i} dangerouslySetInnerHTML={{ __html: pt }}></li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.div 
            className="contact-container glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-title">Ready to <span className="text-gradient">Work Together?</span></h2>
            <p className="contact-desc">
              I'm always looking for exciting opportunities to improve software quality. Let's build bug-free software together!
            </p>
            <div className="contact-actions">
              <div className="contact-action-item">
                <MagneticButton className="btn-primary glow-button" onClick={() => window.location.href = 'mailto:hirakhalid162522@gmail.com'}>
                  Email Me
                </MagneticButton>
                <span className="contact-visible-text">hirakhalid162522@gmail.com</span>
              </div>
              <div className="contact-action-item">
                <MagneticButton className="btn-secondary outline-glow" onClick={() => window.location.href = 'tel:03345909124'}>
                  Call Me
                </MagneticButton>
                <span className="contact-visible-text">0334-5909124</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hira Khalid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
