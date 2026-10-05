import { sectors } from '../data'

export default function Marquee() {
  const row = [...sectors, ...sectors]
  return (
    <div className="marquee" aria-label={`Industries: ${sectors.join(', ')}`}>
      <div className="marquee-track" aria-hidden="true">
        {row.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
