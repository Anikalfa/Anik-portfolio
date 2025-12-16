import Projects from '../components/Projects'
import data from '../data/projects.json'

export default function Page() {
  return (
    <>
      <section id="about" style={{padding:'40px 0'}}>
        <div className="about-grid">
          <div className="about-left">
            <img src="/images/IMG_3038.JPG" alt="Anik" className="about-photo" />
          </div>

          <div className="about-right">
            <h1 style={{marginTop:0}}>Md. Anik Chowdhury</h1>
            <div className="subtitle">Computer Science Student at East West University</div>
            <h2 style={{marginTop:18}}>About</h2>
            <p style={{color:'var(--muted)'}}>Hello! I'm a computer science student with interest in machine learning and software engineering. I participate in competitive programming and work on projects involving web applications and ML models.</p>
            <p style={{marginTop:12}}><a href="/Anik_Resume.pdf" download className="view-project-btn">Download CV</a></p>
          </div>
        </div>
      </section>

      <section id="projects" style={{padding:'40px 0'}}>
        <h2> Projects</h2>
        <Projects initial={data} />
      </section>

      
      
      
      <section id="education" style={{padding:'40px 0'}}>
        <h2>Education</h2>
        <div className="grid-2" style={{gap:20}}>
          <div className="card">
            <h3>East West University</h3>
            <p>B.Sc. in Computer Science & Engineering</p>
            <p className="muted">Expected graduation: 2026</p>
          </div>
          <div className="card">
            <h3>Relevant Coursework</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Database Systems</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="research" style={{padding:'40px 0'}}>
        <h2>Research</h2>

        <div id="publications" className="publications-section" style={{marginTop:8}}>
          <div className="publications-grid">
            <div className="publication-card">
              <h4>Explainable Machine-Learning Forecasts of Building-Energy Demand from Weather Signals</h4>
              <p>Published in IEEE Access (Conference Paper).</p>
              <a href="https://www.researchgate.net/publication/395976664_Explainable_Machine-Learning_Forecasts_of_Building-Energy_Demand_from_Weather_Signals_A_Comparative_Study_of_Classical_Ensemble_and_Hybrid_DL_Models" target="_blank" rel="noopener noreferrer" className="view-btn">🔗 Conference Paper Link</a>
            </div>

            <div className="publication-card">
              <h4>AI in Autonomous Vehicle Safety</h4>
              <p>Published in Springer. Discusses explainable AI methods for improving decision-making in autonomous driving systems.</p>
              {/* Put the paper PDF at /public/assets/AI-Autonomous-Vehicles.pdf if you want the PDF link to work */}
              <a href="/assets/AI-Autonomous-Vehicles.pdf" target="_blank" rel="noopener noreferrer" className="view-btn">📄 Read Paper (PDF)</a>
              <a href="https://doi.org/yyyy" target="_blank" rel="noopener noreferrer" className="view-btn">🔗 Journal Link</a>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" style={{padding:'40px 0'}}>
        <h2>Awards & Achievements</h2>
        <div className="grid-2" style={{gap:20}}>
          <div className="card">
            <h4>Competitive Programming</h4>
            <p className="muted">Solved 1000+ problems across platforms; participated in national contests and ICPC-style challenges.</p>
          </div>
          <div className="card">
            <h4>Dean's List</h4>
            <p className="muted">Recognized for academic excellence in multiple semesters.</p>
          </div>
        </div>
      </section>

      <section id="experience" style={{padding:'40px 0'}}>
        <h2>Experience</h2>
        <div className="grid-2" style={{gap:20}}>
          <div className="card">
            <h3>Undergraduate Teaching Assistant</h3>
            <p className="muted">Assisted in labs and grading for programming and data structures courses. Held weekly office hours and supported student projects.</p>
          </div>
          <div className="card">
            <h3>Software Intern (Example)</h3>
            <p className="muted">Worked on a small team to build web features, wrote unit tests, and contributed to deployment scripts.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{padding:'40px 0'}}>
        <h2>Contact</h2>
        <p style={{color:'var(--muted)'}}>Email: <a href="mailto:chowdhury.anik2000@gmail.com">chowdhury.anik2000@gmail.com</a></p>
        <p style={{color:'var(--muted)'}}>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
      </section>
    </>
  )
}
