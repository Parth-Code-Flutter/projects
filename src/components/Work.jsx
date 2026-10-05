import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Apple,
  ArrowUpRight,
  Building2,
  Check,
  ClipboardCheck,
  Landmark,
  Lock,
  Play,
  Radio,
  ShoppingBag,
  Smartphone,
  Users,
} from 'lucide-react'
import { categories, projects } from '../data'
import Gallery, { asset } from './Gallery'
import { SectionHead } from './Shared'

const storeIcon = { apple: Apple, play: Play }
const glyphs = { inspect: ClipboardCheck, live: Radio, shop: ShoppingBag, org: Users }
const pad = (n) => String(n).padStart(2, '0')

function CaseHeader({ project, number, total }) {
  const category = categories.find((c) => c.id === project.category)
  const ClientIcon = project.client.includes('Government') ? Landmark : Building2
  return (
    <>
      <p className="case-count mono">
        {pad(number)} / {pad(total)}
        {category && (
          <span className="case-cat" style={{ '--c': category.color }}>
            {category.label}
          </span>
        )}
        <span className="case-sector">{project.sector}</span>
      </p>
      <div className="case-heading">
        {project.icon && <img className="case-icon" src={asset(project.icon)} alt="" width="56" height="56" />}
        <div>
          <h3 className="case-title">{project.title}</h3>
          <p className="case-client">
            <ClientIcon size={16} /> {project.client}
          </p>
        </div>
      </div>
    </>
  )
}

function CaseFooter({ project }) {
  return (
    <div className="case-foot">
      <span className="case-platforms">
        <Smartphone size={15} /> {project.platforms.join(' · ')}
      </span>
      <div className="case-links">
        {project.links.map((l) => {
          const Icon = storeIcon[l.store] ?? ArrowUpRight
          return (
            <a key={l.href} className="store-btn" href={l.href} target="_blank" rel="noreferrer">
              <Icon size={16} />
              {l.label}
              <ArrowUpRight size={14} className="store-arrow" />
            </a>
          )
        })}
        {project.note && (
          <span className="case-note">
            <Lock size={14} /> {project.note}
          </span>
        )}
      </div>
    </div>
  )
}

const enter = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.97 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function FeaturedCase({ project, number, total, flip }) {
  const { metric, summary, built, tech, shots, accent } = project
  return (
    <motion.article
      layout
      className={`case ${flip ? 'case--flip' : ''}`}
      style={{ '--a1': accent[0], '--a2': accent[1] }}
      {...enter}
    >
      <div className="case-visual">
        <div className="case-glow" aria-hidden="true" />
        <span className="case-num" aria-hidden="true">
          {pad(number)}
        </span>
        <Gallery shots={shots} />
        <div className="case-metric">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      </div>

      <div className="case-body">
        <CaseHeader project={project} number={number} total={total} />
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

        <CaseFooter project={project} />
      </div>
    </motion.article>
  )
}

function PrivateCase({ project, number, total }) {
  const { metric, summary, built, tech, accent } = project
  const Glyph = glyphs[project.glyph] ?? Building2
  return (
    <motion.article layout className="pcase" style={{ '--a1': accent[0], '--a2': accent[1] }} {...enter}>
      <div className="pcase-top">
        <span className="pcase-glyph">
          <Glyph size={22} strokeWidth={1.7} />
        </span>
        <div className="pcase-metric">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      </div>

      <CaseHeader project={project} number={number} total={total} />
      <p className="case-summary">{summary}</p>

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

      <CaseFooter project={project} />
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
  const featured = list.filter((p) => p.shots?.length)
  const confidential = list.filter((p) => !p.shots?.length)

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
          {featured.map((p, i) => (
            <FeaturedCase key={p.id} project={p} number={i + 1} total={list.length} flip={i % 2 === 1} />
          ))}
        </AnimatePresence>
      </div>

      {confidential.length > 0 && (
        <>
          <div className="private-head">
            <h3>
              <Lock size={20} /> Private client work
            </h3>
            <p>Screens and store listings for these apps are confidential, so here's what I built instead.</p>
          </div>
          <div className="pcases">
            <AnimatePresence mode="popLayout">
              {confidential.map((p, i) => (
                <PrivateCase key={p.id} project={p} number={featured.length + i + 1} total={list.length} />
              ))}
            </AnimatePresence>
          </div>
        </>
      )}
    </section>
  )
}
