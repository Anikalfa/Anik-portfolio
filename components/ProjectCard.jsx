"use client"
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="project-card">
      {project.image && <img src={project.image} alt={project.title} />}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
        <h3>{project.title}</h3>
        <div style={{display:'flex',gap:8}}>
          <button className="view-project-btn" onClick={() => setOpen(true)}>Details</button>
          <a className="view-project-btn secondary" href={project.link} target="_blank" rel="noreferrer">View</a>
        </div>
      </div>
      <p>{project.description}</p>

      {open && (
        <div style={{marginTop:12,padding:12,background:'#fff',borderRadius:8,boxShadow:'var(--card-shadow)'}}>
          <h4 style={{marginTop:0}}>{project.title}</h4>
          <p style={{color:'var(--muted)'}}>{project.details}</p>
          <div style={{marginTop:8}}>
            {project.tags.map(t => <span key={t} style={{display:'inline-block',marginRight:6,padding:'4px 8px',background:'#eef4ff',borderRadius:8,color:'var(--accent)'}}>{t}</span>)}
          </div>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <a className="view-project-btn secondary" href={project.link} target="_blank" rel="noreferrer">Open Project</a>
            <button className="view-project-btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </article>
  )
}
