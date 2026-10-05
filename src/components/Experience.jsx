import { experience } from '../data'
import { Reveal, SectionHead } from './Shared'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead
        index="02"
        label="experience"
        title={
          <>
            5+ years of <span className="gradient-text">shipping Flutter apps.</span>
          </>
        }
        sub="Remote and on-site work for clients in the UAE, Oman, India and beyond."
      />

      <ol className="timeline">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.period} className={`tl-item ${i === 0 ? 'is-current' : ''}`} delay={i * 0.05}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-meta">
              <span className="tl-period mono">{e.period}</span>
              <span className="tl-mode">{e.mode}</span>
            </div>
            <div className="tl-card">
              <h3>{e.role}</h3>
              <p className="tl-focus">{e.focus}</p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
