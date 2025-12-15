"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({ initial = [] }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('all')

  const tags = Array.from(new Set(initial.flatMap(p => p.tags))).sort()

  const filtered = initial.filter(p => {
    const matchesQ = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
    const matchesTag = tag === 'all' ? true : p.tags.includes(tag)
    return matchesQ && matchesTag
  })

  return (
    <div>
      <div style={{display:'flex',gap:12,alignItems:'center',marginBottom:16,flexWrap:'wrap'}}>
        <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
          <button onClick={() => setTag('all')} className={tag==='all'? 'filter-active':''}>All</button>
          {tags.map(t => (
            <button key={t} onClick={() => setTag(t)} className={tag===t? 'filter-active':''} style={{marginRight:8}}>{t}</button>
          ))}
        </div>
        <input placeholder="Search projects..." value={query} onChange={e => setQuery(e.target.value)} style={{marginLeft:'auto',padding:8,borderRadius:6,border:'1px solid rgba(0,0,0,0.08)'}} />
      </div>

      <div className="projects-grid">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
