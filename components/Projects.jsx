"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({ initial = [] }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = initial.filter(p => {
    const matchCategory = activeFilter === 'all' || p.category === activeFilter
    const matchQuery = !query || 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    return matchCategory && matchQuery
  })

  return (
    <div>
      <div className="projects-controls" style={{ marginBottom: 40 }}>
        <div className="filters" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fullstack')}
          >
            Fullstack
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'ml-ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ml-ai')}
          >
            ML/AI
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'data-engineering' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data-engineering')}
          >
            Data Engineering / Power BI
          </button>
        </div>
        <div className="search-wrapper" style={{ marginTop: 16 }}>
          <input 
            type="search" 
            placeholder="Search projects…" 
            aria-label="Search projects"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: '8px 14px',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.06)',
              background: '#fff',
              fontSize: '0.85rem',
              width: '100%',
              maxWidth: 300
            }}
          />
        </div>
      </div>
      
      <div className="projects-grid">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
