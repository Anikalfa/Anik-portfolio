//Ex-1

function isFieldMissing(input) {
    if (input.trim() === "") {
        return "Missing";
    } else {
        return "OK";
    }
}

console.log(isFieldMissing(""));
console.log(isFieldMissing(" "));
console.log(isFieldMissing("John Doe"));

//Ex-2
function extractSkills(skillsString) {
    return skillsString
        .split(',')                        
        .map(skill => skill.trim().toLowerCase()) 
        .filter(skill => skill !== "");    
}


console.log(extractSkills("JavaScript, Python, HTML,css , node.js "));

//Ex-3
function getInitials(fullName) {
    return fullName
        .split(" ") 
        .filter(part => part.length > 1 && !part.endsWith(".")) 
        .map(part => part[0].toUpperCase()) 
        .join(".") + "."; 
}


console.log(getInitials("Sadia K. Rahman")); 
console.log(getInitials("Hasibul Islam"));   

//Ex-4
function formatHeadline(headline) {
    return headline
        .split(" ") 
        .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(" ");
}


console.log(formatHeadline("full stack DEVELOPER & javascript ENTHUSIAST"));


//Ex-5
function preferredLocations(locationsArray, n) {
    if (n === undefined) {
        return locationsArray.length > 0 ? [locationsArray[0]] : [];
    }
    if (n < 0) {
        return [];
    }
    return locationsArray.slice(0, n);
}


console.log(preferredLocations(["Dhaka", "Sylhet", "Barisal"], 2)); 
console.log(preferredLocations(["Dhaka"], -1)); 
console.log(preferredLocations(["Dhaka", "Chittagong", "Rajshahi"])); 

//Ex-6

function findSkillPair(skills, targetLength) {
    for (let i = 0; i < skills.length - 1; i++) {
        const combinedLength = skills[i].length + skills[i + 1].length;
        if (combinedLength === targetLength) {
            return [i, i + 1];
        }
    }
    return []; 
}


console.log(findSkillPair(["java", "python", "js", "html"], 10));

//Ex-7

function rearrangeSkill(skills, fromIndex, toIndex) {
    if (
        fromIndex < 0 || fromIndex >= skills.length ||
        toIndex < 0 || toIndex >= skills.length
    ) {
        return skills; 
    }

    const updatedSkills = [...skills]; 
    const [movedSkill] = updatedSkills.splice(fromIndex, 1); 
    updatedSkills.splice(toIndex, 0, movedSkill); 

    return updatedSkills;
}


console.log(rearrangeSkill(["html", "css", "js", "react"], 0, 2));


//EX:8
function analyzeResume(candidate) {
    // Helper to check if a field is missing
    function isFieldMissing(value) {
        const trimmed = value.trim();
        return trimmed === "" ? "Missing" : trimmed;
    }

    // Helper to extract lowercase skills from a string
    function extractSkills(skillsString) {
        return skillsString
            .split(",")
            .map(skill => skill.trim().toLowerCase())
            .filter(skill => skill !== "");
    }

    // Helper to convert a sentence to title case
    function formatHeadline(headline) {
        return headline
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
    }

    // Return new cleaned resume object
    return {
        name: isFieldMissing(candidate.name),
        email: isFieldMissing(candidate.email),
        skills: extractSkills(candidate.skills),
        headline: formatHeadline(candidate.headline),
        projects: candidate.projects
    };
}

// 🔍 Test input
const candidate = {
    name: " Nahid Islam ",
    email: " ",
    skills: "JavaScript, Python, HTML,css , node.js ",
    headline: " aspiring FULLSTACK developer ",
    projects: ["ecommerce", "gamebot", "portfolio", "chatapp"]
};

// 🔍 Test run
console.log(analyzeResume(candidate));



/* ---------------------- Dynamic Projects & Contact ---------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const PROJECTS_JSON = 'projects.json';
    let projects = [];
    let activeFilter = 'all';

    const projectsGrid = document.getElementById('projects-grid');
    const filtersContainer = document.querySelector('.filters');
    const searchInput = document.getElementById('project-search');

    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTags = document.getElementById('modal-tags');
    const modalLink = document.getElementById('modal-link');
    const modalClose = document.querySelector('.modal-close');

    // Contact form
    const contactForm = document.getElementById('contact-form');
    const contactFeedback = document.getElementById('contact-feedback');
    // Replace with your Formspree endpoint, e.g. https://formspree.io/f/xyz
    const FORM_ENDPOINT = '';

    function fetchProjects() {
        fetch(PROJECTS_JSON)
            .then(res => res.json())
            .then(data => {
                projects = data;
                renderFilters(projects);
                renderProjects(projects);
            })
            .catch(err => console.error('Failed to load projects:', err));
    }

    function uniqueTags(list) {
        const set = new Set();
        list.forEach(p => p.tags.forEach(t => set.add(t)));
        return Array.from(set).sort();
    }

    function renderFilters(list) {
        const tags = uniqueTags(list);
        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.filter = tag;
            btn.textContent = tag;
            filtersContainer.appendChild(btn);
        });

        filtersContainer.addEventListener('click', (e) => {
            if (!e.target.matches('.filter-btn')) return;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            activeFilter = e.target.dataset.filter;
            applyFilters();
        });
    }

    function projectCard(project) {
        const el = document.createElement('article');
        el.className = 'project-card';
        el.tabIndex = 0;
        el.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-actions">
              <button class="view-project-btn open-modal" data-id="${project.id}">Details</button>
              <a class="view-project-btn" href="${project.link}" target="_blank" rel="noopener">View Project</a>
            </div>
        `;
        return el;
    }

    function renderProjects(list) {
        projectsGrid.innerHTML = '';
        if (!list.length) {
            projectsGrid.innerHTML = '<p>No projects found.</p>';
            return;
        }
        list.forEach(p => projectsGrid.appendChild(projectCard(p)));
    }

    function applyFilters() {
        const q = (searchInput.value || '').toLowerCase().trim();
        const filtered = projects.filter(p => {
            const matchesQ = p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q);
            const matchesTag = activeFilter === 'all' ? true : p.tags.includes(activeFilter);
            return matchesQ && matchesTag;
        });
        renderProjects(filtered);
    }

    // Open modal with project details
    projectsGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.open-modal');
        if (!btn) return;
        const id = btn.dataset.id;
        const project = projects.find(p => p.id === id);
        if (!project) return;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.details || project.description;
        modalTags.innerHTML = project.tags.map(t => `<span class="tag">${t}</span>`).join(' ');
        modalLink.href = project.link;
        openModal();
    });

    function openModal() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    searchInput.addEventListener('input', () => {
        applyFilters();
    });

    // Contact form submit handler
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            message: contactForm.message.value
        };
        contactFeedback.textContent = 'Sending...';

        if (!FORM_ENDPOINT) {
            contactFeedback.textContent = 'Set `FORM_ENDPOINT` in scripts.js to enable form submissions. Copy message into your email client instead.';
            contactForm.reset();
            return;
        }

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                contactFeedback.textContent = 'Message sent — thank you!';
                contactForm.reset();
            })
            .catch(err => {
                console.error(err);
                contactFeedback.textContent = 'Could not send message. Try again later.';
            });
    });

    // Theme toggle setup
    const themeToggle = document.getElementById('theme-toggle');
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('aria-pressed', 'true');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.setAttribute('aria-pressed', 'false');
            themeToggle.textContent = '🌙';
        }
    };

    const saved = localStorage.getItem('theme');
    setTheme(saved === 'dark' ? 'dark' : 'light');

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        setTheme(next);
        localStorage.setItem('theme', next);
    });

    // Initial load
    fetchProjects();
});



