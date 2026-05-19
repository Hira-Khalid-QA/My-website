import React from 'react';
import { ShieldCheck, Bug, ArrowRight, Server, Rocket } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <ShieldCheck size={28} className="text-blue-500" />
            <span>Hira<span className="text-gradient">Khalid</span></span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Expertise</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Hire Me</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-glow"></div>
        <div className="container">
          <h1 className="hero-title">
            Ship Flawless Software.<br />
            <span className="text-gradient">Elevate Your QA.</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm Hira Khalid—a proactive SQA Engineer with experience in both manual testing and web automation. I ensure the delivery of high-quality web and mobile applications using Python Playwright, Postman, and robust QA processes.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
              View My Experience <ArrowRight size={18} />
            </button>
            <a href="/resume.pdf" download className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Download Resume</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Web/App</div>
              <div className="stat-label">Testing Expert</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Agile</div>
              <div className="stat-label">Process Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core <span className="text-gradient">Skills & Expertise</span></h2>
            <p className="section-subtitle">Comprehensive QA skills from manual defect tracking to automated Python scripts.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Rocket size={24} />
              </div>
              <h3 className="service-title">Web Automation</h3>
              <p className="service-desc">
                Writing, optimizing, and maintaining automated test scripts using <strong>Python Playwright</strong>. Experience integrating tests into CI/CD pipelines alongside DevOps teams.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Bug size={24} />
              </div>
              <h3 className="service-title">Manual & Functional Testing</h3>
              <p className="service-desc">
                Designing detailed test cases, tracking defects with JIRA/Testmo, and conducting rigorous sanity, smoke, and regression testing for e-commerce and web apps.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Server size={24} />
              </div>
              <h3 className="service-title">API Testing</h3>
              <p className="service-desc">
                Validating backend services and ensuring robust data flow using <strong>Postman</strong> and Chrome DevTools to catch issues before they impact the UI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="services-section" style={{ background: 'var(--bg-color)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
            <p className="section-subtitle">My journey as a Software Quality Assurance Engineer.</p>
          </div>
          <div className="services-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div className="service-card" style={{ width: '100%' }}>
              <h3 className="service-title">QA Analyst</h3>
              <p className="service-desc" style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: '500' }}>BetacodesPK • Sept 2025 – Present</p>
              <ul className="service-desc" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Implemented an end-to-end functional testing suite using <strong>Python Playwright</strong> with a POM-structured <strong>Pytest</strong> framework.</li>
                <li>Created an accessibility testing suite using <strong>Playwright, axe-core, and Python</strong>.</li>
                <li>Automated API testing using <strong>Postman</strong> by adding scripts to run automated validation.</li>
                <li>Executed performance and load testing scenarios utilizing <strong>Locust</strong>.</li>
              </ul>
            </div>

            <div className="service-card" style={{ width: '100%' }}>
              <h3 className="service-title">Junior QA</h3>
              <p className="service-desc" style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: '500' }}>AD5coders • Sept 2024 – June 2025</p>
              <ul className="service-desc" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Performed manual testing on e-commerce web and mobile applications.</li>
                <li>Designed and executed test cases based on business requirements, tracking bugs in JIRA and Testmo.</li>
                <li>Conducted sanity, smoke, and regression testing after each release cycle.</li>
              </ul>
            </div>

            <div className="service-card" style={{ width: '100%' }}>
              <h3 className="service-title">Junior QA</h3>
              <p className="service-desc" style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontWeight: '500' }}>K2 Peak Technologies • July 2023 – July 2024</p>
              <ul className="service-desc" style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Assisted senior QA engineers in functional and regression testing.</li>
                <li>Documented test cases, bug reports, and test summary reports.</li>
                <li>Gained exposure to API testing with Postman.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-container">
            <h2 className="contact-title">Ready to <span className="text-gradient">Work Together?</span></h2>
            <p className="contact-desc">
              I'm always looking for exciting opportunities to improve software quality. Feel free to reach out via email or phone!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:hirakhalid162522@gmail.com" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-block', textDecoration: 'none' }}>
                Email: hirakhalid162522@gmail.com
              </a>
              <a href="tel:03345909124" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-block', textDecoration: 'none' }}>
                Call: 0334-5909124
              </a>
            </div>
          </div>
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
