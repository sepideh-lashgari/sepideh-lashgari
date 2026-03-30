import React from 'react'
import './App.css'
function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <span className="logo"><span className="logo-bold">S</span>epideh.</span>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Full-Stack Developer<br/>& Security Enthusiast</h1>
        <p>I build modern web apps with clean code and a security-first mindset.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🔐 Password Manager</h3>
            <p>Secure web app with encryption and user authentication.</p>
            <div className="tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="project-card">
            <h3>📊 Finance Tracker</h3>
            <p>Personal budget tracker with charts and monthly reports.</p>
            <div className="tags">
              <span>React</span>
              <span>PostgreSQL</span>
              <span>REST API</span>
            </div>
          </div>
          <div className="project-card">
            <h3>🛡️ Auth System</h3>
            <p>Authentication with JWT, bcrypt hashing and role-based access.</p>
            <div className="tags">
              <span>Node.js</span>
              <span>JWT</span>
              <span>Security</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <p>Open to work — let's connect!</p>
        <div className="contact-links">
          <a href="https://github.com/sepideh-lashgari">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>
      </section>

    </div>
  )
}

export default App
