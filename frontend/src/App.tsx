import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
    setLoading(false);
  };

  return (
    <div id="root">
      {/* Header */}
      <header className="header">
        <h1>Himanshi Yenugupalli</h1>
        <a
          href="/Himanshi_Yenugupalli_Resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume
        </a>
      </header>

      {/* About Me */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          B.Sc. IT student graduating June 2025, passionate about web development and eager to contribute
          to innovative projects.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <ul>
          <li>Technical Communication</li>
          <li>Microsoft Office</li>
          <li>Basic C++</li>
          <li>HTML, CSS, JavaScript, Java</li>
          <li>Frontend Development</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>TravelChecklist_CodeCircuit</h3>
          <p>
            Built a travel packing checklist web app with category organization for the CodeCircuit Hackathon.
            Responsive frontend using HTML5, CSS3 (Flexbox, Grid, Animations), and Vanilla JavaScript.
            Deployed on Netlify.
          </p>
          <a href="https://travelchecklistcodecircuit.netlify.app/" target="_blank" rel="noreferrer">
            Live Site
          </a>
        </div>

        <div className="card">
          <h3>Bookshelf_CodeCircuit</h3>
          <p>
            Book list web app with genre filtering and favorites toggle for CodeCircuit Hackathon.
            Built with HTML5, CSS3, and JavaScript, hosted on Netlify.
          </p>
          <a href="https://bookshelfbrowse.netlify.app/" target="_blank" rel="noreferrer">
            Live Site
          </a>
        </div>

        <div className="card">
          <h3>Musical Instrument Learning Web App</h3>
          <p>
            Platform with a Rule-Based Chord Song Suggestion Chatbot.
            Technologies: Java, JavaScript, HTML, CSS, MySQL, deployed on Apache Tomcat.
          </p>
          <a
            href="https://github.com/himanshiyenugupalli/MusicalInstrumentLearningWebApp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email:</label><br />
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            required
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            style={{ height: 100 }}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && <p className="status-msg">{status}</p>}
      </section>

      {/* Social Media */}
      <footer className="footer">
        <a href="https://linkedin.com/in/himanshi-yenugupalli" target="_blank" rel="noreferrer">
          LinkedIn
        </a>

        <a href="https://github.com/himanshiyenugupalli" target="_blank" rel="noreferrer">
          GitHub
        </a>
        
        <a href="mailto:himanshiyenugupalli@gmail.com">Email</a>
      </footer>
    </div>
  );
}

export default App;
