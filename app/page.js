import Projects from '../components/Projects'
import data from '../data/projects.json'

export default function Page() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" style={{padding:'45px 0'}}>
        <div className="about-grid">
          <div className="about-left">
            <img src="/images/IMG_3038.JPG" alt="Md. Anik Chowdhury" className="about-photo" />
          </div>
          <div className="about-right">
            <h1>Md. Anik Chowdhury</h1>
            <div className="subtitle">Computer Science Student at East West University</div>
            <h2 style={{marginTop:18}}>About Me</h2>
            <p style={{marginTop:12, lineHeight:1.7}}>
              Hello! I'm a passionate computer science student with strong interest in 
              <strong style={{color:'#1e293b'}}> machine learning</strong>, 
              <strong style={{color:'#1e293b'}}> deep learning</strong>, and 
              <strong style={{color:'#1e293b'}}> software engineering</strong>. 
            I work on projects involving web applications and machine learning models.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section id="skills" style={{padding:'45px 0'}}>
        <h2>Technical Skills</h2>
        <div className="skills-categories" style={{ marginTop: 24 }}>
          
          {/* 1. Languages Section */}
          <div className="skill-category">
            <h3 className="category-title">LANGUAGES</h3>
            <div className="skills-grid">
              <div className="skill-badge skill-cpp"><i className="devicon-cplusplus-plain"></i><span>C++</span></div>
              <div className="skill-badge skill-python"><i className="devicon-python-plain"></i><span>Python</span></div>
              <div className="skill-badge skill-javascript"><i className="devicon-javascript-plain"></i><span>JavaScript</span></div>
              <div className="skill-badge skill-c"><i className="devicon-c-plain"></i><span>C</span></div>
              <div className="skill-badge skill-go"><i className="devicon-go-original-wordmark"></i><span>Go</span></div>
              <div className="skill-badge skill-bash"><i className="devicon-bash-plain"></i><span>Bash</span></div>
            </div>
          </div>

          {/* 2. Backend & APIs Section */}
          <div className="skill-category">
            <h3 className="category-title">BACKEND & APIS</h3>
            <div className="skills-grid">
              <div className="skill-badge skill-node"><i className="devicon-nodejs-plain"></i><span>Node.js</span></div>
              <div className="skill-badge skill-express"><i className="devicon-express-original"></i><span>Express.js</span></div>
              <div className="skill-badge skill-flask"><i className="devicon-flask-original"></i><span>Flask</span></div>
              <div className="skill-badge skill-graphql"><i className="devicon-graphql-plain"></i><span>GraphQL</span></div>
              <div className="skill-badge skill-prisma"><i className="devicon-prisma-original"></i><span>Prisma</span></div>
              <div className="skill-badge skill-rabbitmq"><i className="devicon-rabbitmq-original"></i><span>RabbitMQ</span></div>
            </div>
          </div>

          {/* 3. Databases Section */}
          <div className="skill-category">
            <h3 className="category-title">DATABASES</h3>
            <div className="skills-grid">
              <div className="skill-badge skill-postgres"><i className="devicon-postgresql-plain"></i><span>PostgreSQL</span></div>
              <div className="skill-badge skill-mongo"><i className="devicon-mongodb-plain"></i><span>MongoDB</span></div>
              <div className="skill-badge skill-mysql"><i className="devicon-mysql-plain"></i><span>MySQL</span></div>
              <div className="skill-badge skill-redis"><i className="devicon-redis-plain"></i><span>Redis</span></div>
            </div>
          </div>

          {/* 4. ML & Deep Learning Section */}
          <div className="skill-category">
            <h3 className="category-title">ML & DEEP LEARNING</h3>
            <div className="skills-grid">
              <div className="skill-badge skill-pytorch"><i className="devicon-pytorch-original"></i><span>PyTorch</span></div>
              <div className="skill-badge skill-tensorflow"><i className="devicon-tensorflow-original"></i><span>TensorFlow</span></div>
              <div className="skill-badge skill-opencv"><i className="devicon-opencv-plain"></i><span>OpenCV</span></div>
              <div className="skill-badge skill-pandas"><i className="devicon-pandas-plain"></i><span>Pandas</span></div>
              <div className="skill-badge skill-numpy"><i className="devicon-numpy-plain"></i><span>NumPy</span></div>
            </div>
          </div>

          {/* 5. DevOps & Tools Section */}
          <div className="skill-category">
            <h3 className="category-title">DEVOPS & TOOLS</h3>
            <div className="skills-grid">
              <div className="skill-badge skill-docker"><i className="devicon-docker-plain"></i><span>Docker</span></div>
              <div className="skill-badge skill-git"><i className="devicon-git-plain"></i><span>Git</span></div>
              <div className="skill-badge skill-linux"><i className="devicon-linux-plain"></i><span>Linux</span></div>
              <div className="skill-badge skill-postman"><i className="devicon-postman-plain"></i><span>Postman</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{padding:'45px 0'}}>
        <h2>Featured Projects</h2>
        <p style={{marginTop:12, marginBottom:18, maxWidth:550}}>
          A collection of my work spanning machine learning, web development, and network design.
        </p>
        <Projects initial={data} />
      </section>

      {/* EDUCATION */}
      <section id="education" style={{padding:'45px 0'}}>
        <h2>Education</h2>
        <div className="grid-2" style={{gap:18, marginTop:24}}>
          <div className="card">
            <h3>🎓 East West University</h3>
            <p style={{marginTop:8}}>B.Sc. in Computer Science & Engineering</p>
            <p className="muted" style={{marginTop:6, fontSize:'0.85rem'}}>Expected graduation: 2026</p>
          </div>
          <div className="card">
            <h3>📚 Relevant Coursework</h3>
            <ul style={{marginTop:10}}>
              <li>Data Structures & Algorithms</li>
              <li>Database Systems</li>
              <li>Software Engineering</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </section>

    {/* RESEARCH */}
<section id="research" style={{ padding: '45px 0' }}>
  <h2>Research & Publications</h2>
  <p style={{ marginTop: 12, marginBottom: 18, maxWidth: 550 }}>
    My research focuses on machine learning applications and explainable AI methods.
  </p>

  <div className="publications-grid">
      
    <div className="publication-card">
      <h4>
        Towards Personalized Bangla Book Recommendation: A Large-Scale Multi-Entity Book Graph Dataset
      </h4>
      <p>
        arXiv Preprint (2026). A large-scale multi-entity knowledge graph dataset for personalized Bangla book recommendation and graph-based learning research.
      </p>
      <a
        href="https://arxiv.org/abs/2602.12129"
        target="_blank"
        rel="noopener noreferrer"
        className="view-btn"
      >
        🔗 View Preprint
      </a>
    </div>

    <div className="publication-card">
      <h4>
        Explainable Machine-Learning Forecasts of Building-Energy Demand from Weather Signals
      </h4>
      <p>
        Published in IEEE Access (Conference Paper). A comparative study of classical ensemble and hybrid deep learning models.
      </p>
      <a
        href="https://www.researchgate.net/publication/395976664_Explainable_Machine-Learning_Forecasts_of_Building-Energy_Demand_from_Weather_Signals_A_Comparative_Study_of_Classical_Ensemble_and_Hybrid_DL_Models"
        target="_blank"
        rel="noopener noreferrer"
        className="view-btn"
      >
        🔗 View Paper
      </a>
    </div>

  </div>
</section>


      {/* EXPERIENCE */}
      <section id="experience" style={{padding:'45px 0'}}>
        <h2>Experience</h2>
        <div className="grid-2" style={{gap:18, marginTop:24}}>
          <div className="card">
            <h3>Project Experience</h3>
            <p className="muted" style={{fontSize:'0.8rem', marginBottom:8}}>East West University Academic Supervision  • 2024 - Present</p>
            <p>One year of experience working on various projects under academic supervision.</p>
          </div>
          
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" style={{padding:'45px 0'}}>
        <h2>Awards & Achievements</h2>
        <div className="grid-2" style={{gap:18, marginTop:24}}>
          <div className="card">
            <h4>🏆 Merit Scholarship</h4>
            <p style={{marginTop:8}}>Maintained CGPA of 3.50+ for multiple semesters. Tuition fee waiver for four academic years.</p>
          </div>
          <div className="card">
            <h4>📝 Publications</h4>
            <p style={{marginTop:8}}>Published research papers in IEEE Access and Springer Conference Paper on machine learning.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:'45px 0'}}>
        <h2>Get In Touch</h2>
        <p style={{marginTop:12, marginBottom:18, maxWidth:450}}>
          I'm open to discussing new opportunities, collaborations, or just chatting about technology.
        </p>
        <div className="grid-2" style={{gap:18, maxWidth:500}}>
          <div className="card" style={{textAlign:'center'}}>
            <h4>📧 Email</h4>
            <a href="mailto:chowdhury.anik2000@gmail.com" style={{marginTop:8, display:'block', fontSize:'0.9rem'}}>
              chowdhury.anik2000@gmail.com
            </a>
          </div>
          <div className="card" style={{textAlign:'center'}}>
            <h4>💼 LinkedIn</h4>
            <a href="https://www.linkedin.com/in/anikchowdhury-alfa/" target="_blank" rel="noreferrer" style={{marginTop:8, display:'block', fontSize:'0.9rem'}}>
              Anik Chowdhury
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
