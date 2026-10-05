import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { profile, projects, stats } from '../data'
import { asset } from './Gallery'
import { Count, GithubIcon } from './Shared'

const shot = (id, index) => projects.find((p) => p.id === id).shots[index]

const fan = [
  { ...shot('tractor-seva', 1), className: 'hero-shot hero-shot--left', rotate: -8, delay: 0.35 },
  { ...shot('tractor-seva', 0), className: 'hero-shot hero-shot--right', rotate: 8, delay: 0.45 },
  { ...shot('nama-water', 1), className: 'hero-shot hero-shot--center', rotate: 0, delay: 0.25 },
]

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <header className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="blob blob--a" />
        <div className="blob blob--b" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <motion.p className="hero-pill" {...rise(0)}>
            <span className="status-dot" /> Flutter apps in production since 2021
          </motion.p>

          <motion.p className="hero-kicker mono" {...rise(0.05)}>
            // selected work — {profile.name}, {profile.role}
          </motion.p>

          <motion.h1 className="hero-title" {...rise(0.1)}>
            Apps I've built
            <br />
            <span className="hero-title-outline">& shipped</span> to <span className="gradient-text">real users.</span>
          </motion.h1>

          <motion.p className="hero-sub" {...rise(0.18)}>
            Flutter apps for governments, utilities, startups and marketplaces — from offline field inspections in the
            UAE to a 100K+ download utility app in Oman.
          </motion.p>

          <motion.div className="hero-cta" {...rise(0.26)}>
            <a href="#work" className="btn btn--primary">
              Explore projects <ArrowDown size={17} />
            </a>
            <a href="#contact" className="btn btn--ghost">
              <Mail size={17} /> Work with me
            </a>
            <span className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            </span>
          </motion.div>

          <motion.p className="hero-loc mono" {...rise(0.32)}>
            <MapPin size={14} /> {profile.location} · working with clients worldwide
          </motion.p>
        </div>

        <div className="hero-visual">
          <div className="hero-ring" aria-hidden="true" />
          {fan.map(({ src, alt, className, rotate, delay }) => (
            <motion.div
              key={src}
              className={className}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate }}
              transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={asset(src)}
                alt={alt}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 6, delay: delay * 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
          <motion.span className="hero-badge hero-badge--a" {...rise(0.9)}>
            <b>100K+</b> downloads
          </motion.span>
          <motion.span className="hero-badge hero-badge--b" {...rise(1)}>
            <b>Android · iOS</b> one codebase
          </motion.span>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <strong>
              <Count value={s.value} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </header>
  )
}
