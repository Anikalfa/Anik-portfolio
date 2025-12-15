import './globals.css'

export const metadata = {
  title: 'Md. Anik Chowdhury — Portfolio',
  description: 'Portfolio of Md. Anik Chowdhury',
  icons: {
    icon: '/images/IMG_3038.JPG'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
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
                  <li><a href="#education">Education</a></li>
                  <li><a href="#research">Research</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#awards">Awards</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>

              <a href="/CV-Anik-Chowdhury.html" download className="view-project-btn secondary">Download CV</a>
            </div>
          </div>
        </header>

        <main className="container">{children}</main>

        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            const btn = document.getElementById('nav-toggle');
            const nav = document.getElementById('main-nav');
            btn && btn.addEventListener('click', ()=> nav.classList.toggle('open'));
          })();
        `}} />
      </body>
    </html>
  )
}
