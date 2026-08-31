/* =====================================================
   MODERN PORTFOLIO — SCRIPTS.JS
   Features: Scroll reveal · Counter animation · Projects · Theme · Nav
   ===================================================== */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* ─── Scroll Progress Bar ─── */
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    document.body.prepend(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = `${progress}%`;
    }, { passive: true });

    /* ─── Sticky Header ─── */
    const header = document.getElementById('header');
    const onScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ─── Mobile Navigation ─── */
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger?.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen.toString());
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when link clicked
    navLinks?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            hamburger?.classList.remove('open');
            hamburger?.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    /* ─── Active Nav Link on Scroll ─── */
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    const markActive = () => {
        let current = '';
        sections.forEach(sec => {
            const offset = sec.offsetTop - 120;
            if (window.scrollY >= offset) current = sec.getAttribute('id');
        });
        navItems.forEach(link => {
            const href = link.getAttribute('href').slice(1);
            link.classList.toggle('active', href === current);
        });
    };
    window.addEventListener('scroll', markActive, { passive: true });
    markActive();

    /* ─── Scroll Reveal ─── */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                    let delay = 0;
                    siblings.forEach((sib, idx) => {
                        if (sib === entry.target) delay = idx * 80;
                    });
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    revealElements.forEach(el => revealObserver.observe(el));

    /* ─── Counter Animation ─── */
    const countEls = document.querySelectorAll('.stat-num[data-count]');
    const countObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const target = parseInt(el.dataset.count, 10);
                const duration = 1800;
                const start = performance.now();
                const easeOut = t => 1 - Math.pow(1 - t, 3);

                const tick = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    el.textContent = Math.round(easeOut(progress) * target).toLocaleString();
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
                countObserver.unobserve(el);
            });
        },
        { threshold: 0.5 }
    );
    countEls.forEach(el => countObserver.observe(el));

    /* ─── Theme Toggle ─── */
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeIcon) themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
        localStorage.setItem('portfolio-theme', theme);
    };

    applyTheme(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    /* ─── Projects ─── */
    const PROJECTS_JSON = 'data/projects.json';
    let allProjects = [];
    let activeFilter = 'all';

    const projectsGrid = document.getElementById('projects-grid');
    const filtersContainer = document.getElementById('filters-container');
    const searchInput = document.getElementById('project-search');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    if (!projectsGrid) return;

    // Load projects
    fetch(PROJECTS_JSON)
        .then(res => {
            if (!res.ok) throw new Error('Failed to load projects');
            return res.json();
        })
        .then(data => {
            allProjects = data;
            // Setup filter button listeners directly
            filtersContainer?.addEventListener('click', e => {
                const btn = e.target.closest('.filter-btn');
                if (!btn) return;
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeFilter = btn.dataset.filter;
                applyFilters();
            });
            renderProjects(data);
        })
        .catch(() => {
            if (projectsGrid) {
                projectsGrid.innerHTML = '<p style="color:var(--clr-text-muted);text-align:center;padding:40px 0">Projects coming soon…</p>';
            }
        });

    function applyFilters() {
        const q = searchInput?.value.toLowerCase().trim() ?? '';
        const filtered = allProjects.filter(p => {
            const matchCategory = activeFilter === 'all' || p.category === activeFilter;
            const matchQ = !q
                || p.title.toLowerCase().includes(q)
                || p.description.toLowerCase().includes(q)
                || p.tags?.join(' ').toLowerCase().includes(q);
            return matchCategory && matchQ;
        });
        renderProjects(filtered);
    }

    function renderProjects(list) {
        if (!projectsGrid) return;
        if (!list.length) {
            projectsGrid.innerHTML = '<p style="color:var(--clr-text-muted);text-align:center;padding:40px 0">No projects found.</p>';
            return;
        }
        projectsGrid.innerHTML = '';

        // Build and append cards
        list.forEach((p, i) => {
            const card = createCard(p, i);
            projectsGrid.appendChild(card);
        });
    }

    function createCard(project, index) {
        const article = document.createElement('article');
        article.className = 'project-card';
        article.dataset.id = project.id;
        article.style.animationDelay = `${index * 80}ms`;

        const tagsHtml = (project.tags || [])
            .map(t => `<span class="project-tech-tag">${escHtml(t)}</span>`)
            .join('');

        const categoryLabel = project.category === 'ml-ai' ? 'ML/AI' :
                             project.category === 'data-engineering' ? 'Data Engineering / Power BI' :
                             'Fullstack';

        article.innerHTML = `
      <div class="project-card-top">
        <span class="project-card-icon">${project.icon || '🚀'}</span>
        <a class="project-github-link" href="${escHtml(project.link)}" target="_blank" rel="noopener" aria-label="GitHub Repository">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
      <h3 class="project-card-title">${escHtml(project.title)}</h3>
      <p class="project-card-description">${escHtml(project.description)}</p>
      <div class="project-tech-tags">${tagsHtml}</div>
      <div class="project-card-bottom">
        <span class="project-category-badge badge-${escHtml(project.category)}">${escHtml(categoryLabel)}</span>
        <button class="project-btn project-btn-outline open-modal" data-id="${escHtml(project.id)}">
          Details
        </button>
      </div>
    `;
        return article;
    }

    // Search
    searchInput?.addEventListener('input', applyFilters);

    // Modal open (clickable card delegates to openModal)
    projectsGrid.addEventListener('click', e => {
        const card = e.target.closest('.project-card');
        if (!card || e.target.closest('.project-github-link')) return;
        const project = allProjects.find(p => p.id === card.dataset.id);
        if (!project) return;
        openModal(project);
    });


    function openModal(project) {
        if (!modal) return;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.details || project.description;
        modalTags.innerHTML = (project.tags || [])
            .map(t => `<span class="chip">${escHtml(t)}</span>`)
            .join('');
        modalLink.href = project.link;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    modalClose?.addEventListener('click', closeModal);
    modalBackdrop?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
    });

    /* ─── Contact Form ─── */
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');
    const FORM_ENDPOINT = ''; // Set your Formspree endpoint here

    contactForm?.addEventListener('submit', e => {
        e.preventDefault();
        const data = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };

        if (!FORM_ENDPOINT) {
            if (contactFeedback) {
                contactFeedback.textContent = '✉️ Form received! Set a FORM_ENDPOINT in scripts.js to enable submissions. Copy your message and email me directly.';
                contactFeedback.style.color = 'var(--clr-accent-2)';
            }
            contactForm.reset();
            return;
        }

        if (contactFeedback) contactFeedback.textContent = 'Sending…';

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) throw new Error('Network error');
                if (contactFeedback) {
                    contactFeedback.textContent = '✅ Message sent — thank you!';
                }
                contactForm.reset();
            })
            .catch(() => {
                if (contactFeedback) {
                    contactFeedback.textContent = '❌ Could not send. Try emailing me directly.';
                    contactFeedback.style.color = 'var(--clr-accent-3)';
                }
            });
    });

    /* ─── Utilities ─── */
    function escHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
});
