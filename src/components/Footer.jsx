import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="mono">
        <span className="footer-glyph">&lt;/&gt;</span> {profile.name} · Projects · © {new Date().getFullYear()}
      </p>
      <p>
        <a href={profile.portfolio} target="_blank" rel="noreferrer">
          Full portfolio
        </a>
        <span>·</span>
        <a href="#top">Back to top ↑</a>
      </p>
    </footer>
  )
}
