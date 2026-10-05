import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="nav-logo-bracket">&lt;</span>
        parth
        <span className="nav-logo-accent">/projects</span>
        <span className="nav-logo-bracket">&gt;</span>
      </a>

      <ul className="nav-links">
        {navLinks.map((l, i) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              <span className="nav-num">0{i + 1}.</span>
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a className="btn btn--outline btn--sm" href={profile.portfolio} target="_blank" rel="noreferrer">
            Full portfolio <ArrowUpRight size={15} />
          </a>
        </li>
      </ul>

      <button
        className="nav-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  )
}
