import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Download, Mail, Phone } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, Reveal } from './Shared'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="section contact" id="contact">
      <Reveal>
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <p className="section-label">
            <span className="section-index">04</span>
            <span className="section-line" />
            contact
          </p>
          <h2 className="contact-title">
            Got an app idea?
            <br />
            <span className="gradient-text">Let's build it next.</span>
          </h2>
          <p className="contact-sub">
            Available for Flutter projects and full-time roles, remote or on-site. I usually reply within a day.
          </p>

          <div className="contact-email">
            <a href={`mailto:${profile.email}`} className="mono">
              {profile.email}
            </a>
            <button onClick={copy} aria-label="Copy email address">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="contact-actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Mail size={17} /> Send an email
            </a>
            <a className="btn btn--ghost" href={`tel:${profile.phone}`}>
              <Phone size={17} /> {profile.phoneDisplay}
            </a>
            <a className="btn btn--ghost" href={profile.resume} target="_blank" rel="noreferrer">
              <Download size={17} /> Resume
            </a>
          </div>

          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href={profile.portfolio} target="_blank" rel="noreferrer">
              Full portfolio <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
