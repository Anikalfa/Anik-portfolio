import './globals.css'

export const metadata = {
  title: 'Md. Anik Chowdhury — Portfolio',
  description: 'Computer Science Student & ML Researcher at East West University',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header className="site-header">
          <div className="container header-grid">
            <div />
            <div className="header-right">
              <button id="nav-toggle" aria-label="Toggle navigation">☰</button>
              <nav id="main-nav" className="main-nav">
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#research">Research</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#awards">Awards</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
              <a href="/Anik_Resume.pdf" download className="view-project-btn">Download CV</a>
            </div>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer>
          <p>© 2025 Md. Anik Chowdhury. All rights reserved.</p>
        </footer>

        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            const btn = document.getElementById('nav-toggle');
            const nav = document.getElementById('main-nav');
            if (btn && nav) {
              btn.addEventListener('click', function() {
                nav.classList.toggle('open');
              });
              nav.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                  nav.classList.remove('open');
                });
              });
              document.addEventListener('click', function(e) {
                if (!nav.contains(e.target) && !btn.contains(e.target)) {
                  nav.classList.remove('open');
                }
              });
            }
          })();
        `}} />
      </body>
    </html>
  )
}
