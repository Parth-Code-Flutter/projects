import { Database, Layers, Map, Plug, Rocket } from 'lucide-react'
import { builds, skills } from '../data'
import { GithubIcon, Reveal, SectionHead } from './Shared'

const icons = { layers: Layers, database: Database, map: Map, plug: Plug, rocket: Rocket }

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHead
        index="03"
        label="skills"
        title={
          <>
            What goes into <span className="gradient-text">every app.</span>
          </>
        }
        sub="The Flutter toolkit behind the projects above, from architecture to the store release."
      />

      <div className="skills">
        {skills.map((s, i) => {
          const Icon = icons[s.icon] ?? Layers
          return (
            <Reveal key={s.title} className="skill" delay={i * 0.05}>
              <span className="skill-icon">
                <Icon size={22} strokeWidth={1.7} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="tags tags--sm">
                {s.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="builds-head">
        <h3>
          More Flutter builds <span className="mono">on GitHub</span>
        </h3>
      </Reveal>
      <div className="builds">
        {builds.map((b, i) => (
          <Reveal key={b.name} delay={i * 0.05}>
            <a className="build" href={b.href} target="_blank" rel="noreferrer">
              <span className="build-name mono">
                <GithubIcon size={16} /> {b.name}
              </span>
              <p>{b.desc}</p>
              <span className="build-tags">
                <i className="lang-dot" /> Dart
                {b.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
