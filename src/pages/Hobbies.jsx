import { Icon, Pip } from '../components/Marks'

const HOBBIES = [
  {
    kicker: 'HOBBY 01 // FREQUENCY',
    channel: 'CHANNEL_CH_A',
    title: 'Signal',
    accent: 'text-secondary',
    spec: 'IMAGE SLOT // SPEC: 1024x1024 // EMPTY',
    slot: 'RF_SPECTRUM_ANALYSIS_MOD_01',
    icon: 'graphic_eq',
    copy: 'Monitoring deep shortwave radio emissions and synthesized acoustic telemetry. Constructing modular ambient audio frequencies.',
    tag: 'FREQ: 1420.405 MHz',
    status: 'ACTIVE_RECEIVER',
    statusColor: 'text-primary',
    pip: 'cyan',
    wire: 'signal',
  },
  {
    kicker: 'HOBBY 02 // REPOSITORY',
    channel: 'SECTOR_DATABASE',
    title: 'Archive',
    accent: 'text-primary',
    spec: 'IMAGE SLOT // SPEC: 1024x1024 // EMPTY',
    slot: 'OPTICAL_CRT_INDEX_BAY',
    icon: 'terminal',
    copy: 'Collecting discontinued 1980s industrial hardware, flight manuals, and CRT phosphor displays for physical preservation.',
    tag: 'CATALOG: 412 UNITS',
    status: 'INVENTORY_VERIFIED',
    statusColor: 'text-secondary',
    pip: 'magenta',
    wire: 'archive',
  },
]

function HobbyWire({ type }) {
  if (type === 'archive') {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-35" viewBox="0 0 400 400">
        <line x1="200" y1="0" x2="200" y2="400" className="text-primary-container" stroke="currentColor" strokeDasharray="4 4" />
        <line x1="0" y1="200" x2="400" y2="200" className="text-primary-container" stroke="currentColor" strokeDasharray="4 4" />
        <circle cx="200" cy="200" r="80" fill="none" className="text-outline" stroke="currentColor" />
        <circle cx="200" cy="200" r="140" fill="none" className="text-outline" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.5" />
        <polygon points="200,60 340,200 200,340 60,200" fill="none" className="text-primary-container" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    )
  }
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none" viewBox="0 0 400 400">
      <defs>
        <pattern id="grid-signal" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" className="text-outline" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-signal)" />
      <path d="M 0 200 Q 100 120 200 200 T 400 200" fill="none" className="text-secondary-container" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 0 200 Q 100 280 200 200 T 400 200" fill="none" className="text-primary-container" stroke="currentColor" />
    </svg>
  )
}

export default function Hobbies() {
  return (
    <div className="flex w-full flex-col gap-8 pb-16">
      <div className="relative overflow-hidden bg-surface-container-high/70 p-6 shadow-md md:p-8">
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-primary-container/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-secondary-container/5 blur-2xl" />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-code inline-flex items-center gap-1.5 bg-surface-variant px-2.5 py-0.5 text-on-surface-variant">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-secondary-container" />
              SYS // ARCHIVE // SECTOR_04 // IDLE
            </span>
            <span className="font-tele text-outline">TELEMETRY_LOG_REVISION: 84.10</span>
          </div>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h1 className="headline-xl tracking-tight text-on-surface uppercase">Personal Hobbies</h1>
              <p className="mt-1 text-lg text-on-surface-variant">Abstract pursuits, signal analysis, and nocturnal simulations.</p>
            </div>
            <div className="flex items-center gap-6 bg-surface-container p-3 shadow-sm">
              <div className="flex flex-col">
                <span className="font-micro uppercase text-outline">Array Status</span>
                <span className="font-code text-primary">RECEPTOR_ONLINE</span>
              </div>
              <div className="h-6 w-px bg-surface-variant" />
              <div className="flex flex-col">
                <span className="font-micro uppercase text-outline">Storage Buffer</span>
                <span className="font-code text-secondary">ALLOCATED_4.8TB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {HOBBIES.map((hobby) => (
          <article key={hobby.title} className="group relative flex flex-col bg-surface-container p-6 shadow-md transition-all duration-150 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className={`font-code tracking-wider uppercase ${hobby.accent}`}>{hobby.kicker}</span>
              <span className="font-micro rounded bg-surface-variant px-2 py-0.5 text-outline-variant">{hobby.channel}</span>
            </div>
            <h2 className="headline-md mb-4 text-on-surface">{hobby.title}</h2>
            <div className="relative mb-5 flex aspect-square w-full flex-col items-center justify-center overflow-hidden bg-surface-variant p-6 shadow-inner">
              <HobbyWire type={hobby.wire} />
              <div className="absolute top-2 right-2 h-4 w-4 bg-secondary-container shadow-[0_0_8px_#db1490]" />
              <div className="relative z-10 flex flex-col items-center rounded bg-surface-container-high/85 p-4 text-center shadow-sm backdrop-blur-sm">
                <Icon name={hobby.icon} className={`mb-1 ${hobby.accent}`} />
                <span className="font-code tracking-widest text-on-surface uppercase">{hobby.spec}</span>
                <span className="font-micro mt-1 text-outline">{hobby.slot}</span>
              </div>
            </div>
            <p className="mb-4 flex-1 text-[15px] leading-6 text-on-surface-variant">{hobby.copy}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="font-tele rounded bg-surface-container-highest px-3 py-1 font-semibold tracking-wider text-on-surface">{hobby.tag}</span>
              <span className={`font-code flex items-center gap-1 ${hobby.statusColor}`}>
                <Pip color={hobby.pip} />
                {hobby.status}
              </span>
            </div>
          </article>
        ))}
      </div>

      <article className="group relative flex w-full flex-col bg-surface-container p-6 shadow-md transition-all duration-150 hover:shadow-xl lg:p-8">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-code tracking-wider text-primary uppercase">HOBBY 03 // VELOCITY</span>
          <span className="font-micro rounded bg-surface-variant px-2.5 py-1 text-outline-variant">TELEMETRY_LOG // CORRIDOR_NIGHT</span>
        </div>
        <div className="mb-4 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
          <h2 className="headline-md text-on-surface">Night Drive</h2>
          <span className="font-code text-outline">GRID_COORDINATES: LAT 47.6062° N // LON 122.3321° W</span>
        </div>
        <div className="relative mb-6 flex aspect-[21/9] w-full flex-col items-center justify-center overflow-hidden bg-surface-variant p-6 shadow-inner">
          <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1000 420">
            <defs>
              <linearGradient id="horizon-glow" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#db1490" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect x="0" y="210" width="1000" height="210" fill="url(#horizon-glow)" />
            <line x1="0" y1="210" x2="1000" y2="210" className="text-primary-container" stroke="currentColor" strokeWidth="1.5" />
            <line x1="500" y1="210" x2="0" y2="420" className="text-primary-container" stroke="currentColor" strokeWidth="1.5" />
            <line x1="500" y1="210" x2="150" y2="420" className="text-primary-container" stroke="currentColor" strokeDasharray="6 4" />
            <line x1="500" y1="210" x2="850" y2="420" className="text-primary-container" stroke="currentColor" strokeDasharray="6 4" />
            <line x1="500" y1="210" x2="1000" y2="420" className="text-primary-container" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="500" cy="210" r="4" className="text-secondary-container" fill="currentColor" />
          </svg>
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_#00d4ff]" />
          <div className="relative z-10 flex flex-col items-center rounded bg-surface-container-high/85 p-5 text-center shadow-sm backdrop-blur-sm">
            <Icon name="speed" className="mb-1 text-primary" />
            <span className="font-code tracking-widest text-on-surface uppercase">IMAGE SLOT // SPEC: 1920x820 // PANORAMIC RECESSED</span>
            <span className="font-micro mt-1 text-outline">EXPRESSWAY_VELOCITY_VECTOR_FEED</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <p className="max-w-2xl text-[15px] leading-6 text-on-surface-variant">
            Navigating elevated expressway perimeters during zero-traffic hours under sodium vapor illumination. Testing analog telemetry sensors.
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <span className="font-tele rounded bg-surface-container-highest px-3 py-1 font-semibold tracking-wider text-on-surface">RUNTIME: 03:00 - 05:00 UTC</span>
            <span className="font-code flex items-center gap-1.5 rounded bg-surface-variant px-3 py-1 text-primary">
              <Pip pulse />
              DIAGNOSTICS_SYNCED
            </span>
          </div>
        </div>
      </article>
    </div>
  )
}
