import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import profile from "./data/profile.json";
import { SectionHeader } from "./components/SectionHeader";
import { aiWorkflowHighlights, experienceEntries, navItems, skills } from "./data/portfolio";

function App() {
  return (
    <main className="page-shell">
      <header className="topbar shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" aria-label="Diana Arsenii home">
          DA<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" /> OPEN TO THE RIGHT OPPORTUNITY
          </p>
          <h1>
            Thoughtful systems.<br />
            <em>Meaningful</em> product impact.
          </h1>
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="#contact">
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-aside" aria-label="Professional summary">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="hero-monogram">
            D<span>A</span>
          </div>
          <div className="aside-caption">
            <span>{profile.location}</span>
            <span>WORKING WORLDWIDE ↗</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>FRONTEND ENGINEERING</span>
          <span>REACT · TYPESCRIPT · PRODUCT THINKING</span>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDownRight size={20} />
          </a>
        </div>
      </section>

      <section className="intro-band" aria-label="Engineering philosophy">
        <div className="shell intro-inner">
          <p className="eyebrow">A LITTLE ABOUT MY APPROACH</p>
          <div>
            <p className="intro-statement">
              I care about the details users notice and the engineering choices that
              make great experiences feel effortless.
            </p>
            <div className="value-grid" aria-label="Core engineering values">
              <div className="value-item">
                <span>Quality</span>
                <strong>Reliable product decisions.</strong>
              </div>
              <div className="value-item">
                <span>User experience</span>
                <strong>Thoughtful, clear, and usable.</strong>
              </div>
              <div className="value-item">
                <span>Ownership</span>
                <strong>From idea to release.</strong>
              </div>
              <div className="value-item">
                <span>Performance</span>
                <strong>Fast feels as important as beautiful.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <SectionHeader
          eyebrow="SELECTED EXPERIENCE"
          title="Work with a purpose."
          lead="I enjoy turning ambiguity into a clear, testable plan and pairing product thinking with engineering rigor."
        />

        <div className="experience-grid" aria-label="Work experience highlights">
          {experienceEntries.map((entry) => (
            <article className="experience-card" key={entry.id}>
              <div className={`experience-visual experience-visual--${entry.accent}`} aria-hidden="true">
                <div className="visual-topbar" />
                <div className="visual-window">
                  <div className="visual-panel visual-panel--primary">
                    <span>impact</span>
                    <strong>{entry.metrics[0]?.value ?? ""}</strong>
                  </div>
                  <div className="visual-panel visual-panel--secondary">
                    <span>role</span>
                    <strong>{entry.role}</strong>
                  </div>
                </div>
                <div className="visual-bars">
                  <span style={{ height: "28%" }} />
                  <span style={{ height: "42%" }} />
                  <span style={{ height: "64%" }} />
                  <span style={{ height: "82%" }} />
                  <span style={{ height: "96%" }} />
                </div>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <span className="experience-period">{entry.period}</span>
                  <span className="experience-role">{entry.role}</span>
                </div>

                <div className="experience-meta">
                  <span>Timeline</span>
                  <strong>{entry.period}</strong>
                </div>

                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>

                <ul className="experience-list">
                  {entry.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="experience-metrics">
                  {entry.metrics.map((metric) => (
                    <div key={metric.label} className="experience-metric">
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section shell" id="ai" aria-labelledby="ai-title">
        <SectionHeader
          eyebrow="AI-DRIVEN DEVELOPMENT"
          title="AI accelerates the work — engineering judgment still decides the quality."
          lead="I use AI as a force multiplier for research, iteration speed, and quality review, while keeping product requirements, user needs, and validation as the source of truth."
        />

        <div className="ai-grid">
          <div className="ai-callout">
            <div className="ai-icon" aria-hidden="true">
              <Sparkles size={22} />
            </div>
            <p>
              My practical AI usage is focused on accelerating discovery and reducing repetitive work:
              concept exploration, code comprehension, refactoring ideas, test generation, and drafting release notes.
            </p>
          </div>

          <div className="ai-cards">
            {aiWorkflowHighlights.map((item) => (
              <article className="ai-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cv-section shell" id="cv" aria-labelledby="cv-title">
        <div className="cv-panel">
          <div>
            <p className="eyebrow">DOWNLOADABLE CV</p>
            <h2 id="cv-title">A concise overview of my experience, tools, and impact.</h2>
          </div>
          <div className="cv-actions">
            <a className="button button-dark" href={`/${profile.cvFileName}`} target="_blank" rel="noreferrer" download>
              Download CV <Download size={17} />
            </a>
            <p>PDF · Updated for recruiter review</p>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>
              Engineer by craft.<br />
              <em>Collaborator</em> by nature.
            </h2>
          </div>

          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="shell skill-area">
          <p className="eyebrow">TOOLS & AREAS OF FOCUS</p>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <p className="eyebrow">HAVE A GOOD CHALLENGE?</p>
        <h2>
          Let’s make something<br />
          <em>work beautifully.</em>
        </h2>
        <p className="contact-copy">
          I’m always happy to connect about thoughtful products, frontend engineering,
          and opportunities to build meaningful experiences with teams who care about
          execution and product quality.
        </p>
        <a className="button button-dark" href={`mailto:${profile.email}`}>
          Say hello <Mail size={17} />
        </a>

        <div className="social-links" aria-label="Social links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#home">
          DA<span>.</span>
        </a>
        <p>Designed and built with care · {new Date().getFullYear()}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
