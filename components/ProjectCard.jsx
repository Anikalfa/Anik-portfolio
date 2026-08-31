"use client"
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  const categoryLabel = project.category === 'ml-ai' ? 'ML/AI' :
                       project.category === 'data-engineering' ? 'Data Engineering / Power BI' :
                       'Fullstack'

  return (
    <article className="project-card" style={{ cursor: 'default' }}>
      <div className="project-card-top">
        <span className="project-card-icon">{project.icon || '🚀'}</span>
        <a className="project-github-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
      <h3 className="project-card-title" style={{ color: '#fff' }}>{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="project-tech-tags">
        {project.tags?.map(tag => (
          <span key={tag} className="project-tech-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-bottom">
        <span className={`project-category-badge badge-${project.category}`}>
          {categoryLabel}
        </span>
        <button className="open-modal" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide' : 'Details'}
        </button>
      </div>

      {showDetails && (
        <div style={{
          marginTop: 14,
          padding: 14,
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 10,
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '0.95rem', color: '#fff' }}>
            Project Details
          </h4>
          <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
            {project.details}
          </p>
          <div style={{ marginTop: 12 }}>
            <a 
              className="view-project-btn" 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
              style={{ padding: '8px 16px', fontSize: '0.85rem' }}
            >
              🔗 Open Project
            </a>
          </div>
        </div>
      )}
    </article>
  )
}
