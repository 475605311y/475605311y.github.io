export const NAV_ITEMS = [
  { to: '/', label: 'HOME', path: 'home' },
  { to: '/photography', label: 'PHOTOGRAPHY', path: 'photography' },
  { to: '/hobbies', label: 'HOBBIES', path: 'hobbies' },
  { to: '/coding-tools', label: 'CODING TOOLS', path: 'coding-tools' },
]

export function Icon({ name, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden>
      {name}
    </span>
  )
}

export function EsMark({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      role="img"
      aria-label="emma's space"
    >
      <rect x="1.5" y="1.5" width="29" height="29" fill="#C5CAD3" stroke="#00D4FF" strokeWidth="1.25" />
      <path d="M7 8h18M7 8v16h11" fill="none" stroke="#14171C" strokeWidth="1.8" />
      <path d="M7 16h10" fill="none" stroke="#FF3CAC" strokeWidth="1.6" />
      <path d="M18 16h7v8H18" fill="none" stroke="#00D4FF" strokeWidth="1.6" />
    </svg>
  )
}

export function Pip({ color = 'cyan', pulse = false }) {
  const fill = color === 'magenta' ? 'bg-secondary-container shadow-[0_0_6px_#db1490]' : 'bg-primary-container shadow-[0_0_8px_#00d4ff]'
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${fill} ${pulse ? 'animate-pulse' : ''}`} />
}
