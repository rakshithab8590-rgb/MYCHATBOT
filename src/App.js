import LMSBot from "./components/LMSBot";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>YATICORP SkillX</h2>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">AI Card</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Build Your Career 
          with AI</h1>
        <p>Smart Learning • Real Internship • Placement Support</p>
        <button>Get Started</button>
      </section>

      <section className="info-section">

  {/* About */}
  <div className="info-box">
    <h2>🏢 About YATICORP</h2>
    <p>
      YATICORP SkillX is an AI-powered skill development platform that
      provides industry-based training, internships, and placement
      support for students.
    </p>

    <ul>
      <li>✔ Industry Experts</li>
      <li>✔ Live Projects</li>
      <li>✔ Internship Programs</li>
      <li>✔ Placement Assistance</li>
    </ul>
  </div>

  {/* AI Card */}
  <div className="info-box highlight">

    <h2>🪪 AI Learning Card</h2>

    <p>
      Each student receives a smart digital AI Card that tracks:
    </p>

    <div className="ai-features">
      <span>📊 Progress</span>
      <span>🏆 Certificates</span>
      <span>📁 Projects</span>
      <span>💼 Internships</span>
    </div>

  </div>

</section>

      {/* Features */}
      <section className="features">
        <h2>Platform Features</h2>

        <div className="feature-grid">

          <div className="card">
            📚 Smart Courses
          </div>

          <div className="card">
            💼 Internship Program
          </div>

          <div className="card">
            🤖 AI Chatbot
          </div>

          <div className="card">
            🏆 Certifications
          </div>

          <div className="card">
            📊 Progress Tracking
          </div>

          <div className="card">
            🎯 Placement Support
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 YATICORP SkillX | All Rights Reserved</p>
      </footer>

      {/* Chatbot */}
      <LMSBot />

    </div>
  );
}

export default App;