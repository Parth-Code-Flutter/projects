import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Apple, ArrowUpRight, Building2, Check, Landmark, Lock, Play, Smartphone } from 'lucide-react'
import { categories, projects } from '../data'
import Phone from './Phone'
import { SectionHead } from './Shared'

const storeIcon = { apple: Apple, play: Play }

function ProjectCase({ project, index, total }) {
  const { title, client, sector, metric, summary, built, tech, platforms, links, note, screen, accent } = project
  const category = categories.find((c) => c.id === project.category)
  const ClientIcon = client.includes('Government') ? Landmark : Building2

  return (
    <motion.article
      layout
      className={`case ${index % 2 ? 'case--flip' : ''}`}
      style={{ '--a1': accent[0], '--a2': accent[1] }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="case-visual">
        <div className="case-glow" aria-hidden="true" />
        <span className="case-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Phone screen={screen} accent={accent} className="case-phone" />
        <div className="case-metric">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      </div>

      <div className="case-body">
        <p className="case-count mono">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          {category && (
            <span className="case-cat" style={{ '--c': category.color }}>
              {category.label}
            </span>
          )}
          <span className="case-sector">{sector}</span>
        </p>
        <h3 className="case-title">{title}</h3>
        <p className="case-client">
          <ClientIcon size={16} /> {client}
        </p>
        <p className="case-summary">{summary}</p>

        <p className="case-h mono">// what I built</p>
        <ul className="case-built">
          {built.map((b) => (
            <li key={b}>
              <Check size={15} />
              {b}
            </li>
          ))}
        </ul>

        <ul className="tags tags--sm case-tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="case-foot">
          <span className="case-platforms">
            <Smartphone size={15} /> {platforms.join(' · ')}
          </span>
          <div className="case-links">
            {links.map((l) => {
              const Icon = storeIcon[l.store] ?? ArrowUpRight
              return (
                <a key={l.href} className="store-btn" href={l.href} target="_blank" rel="noreferrer">
                  <Icon size={16} />
                  {l.label}
                  <ArrowUpRight size={14} className="store-arrow" />
                </a>
              )
            })}
            {note && (
              <span className="case-note">
                <Lock size={14} /> {note}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const tabs = useMemo(
    () => [
      { id: 'all', label: 'All work', count: projects.length },
      ...categories
        .map((c) => ({ ...c, count: projects.filter((p) => p.category === c.id).length }))
        .filter((c) => c.count > 0),
    ],
    [],
  )
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="section" id="work">
      <SectionHead
        index="01"
        label="selected work"
        title={
          <>
            Projects that are <span className="gradient-text">live in production.</span>
          </>
        }
        sub="Each one shipped to real users. Here's who it was for, what problem it solves and exactly what I built."
      />

      <div className="filters" role="tablist" aria-label="Filter projects">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={filter === t.id}
            className={`filter ${filter === t.id ? 'is-active' : ''}`}
            onClick={() => setFilter(t.id)}
          >
            {filter === t.id && <motion.span layoutId="filter-pill" className="filter-pill" />}
            <span className="filter-label">
              {t.label} <sup>{t.count}</sup>
            </span>
          </button>
        ))}
      </div>

      <div className="cases">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProjectCase key={p.id} project={p} index={i} total={list.length} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
