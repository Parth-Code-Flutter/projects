export const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const positions = ['is-left', 'is-center', 'is-right']

export default function Gallery({ shots, className = '' }) {
  return (
    <div className={`gallery ${className}`}>
      {shots.slice(0, 3).map((s, i) => (
        <img
          key={s.src}
          className={`shot ${positions[i]}`}
          src={asset(s.src)}
          alt={s.alt}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )
}
