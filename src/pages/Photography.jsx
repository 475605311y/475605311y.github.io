import { useMemo, useState } from 'react'
import { Icon, Pip } from '../components/Marks'

const FILTERS = ['ALL', 'STREET', 'NIGHT', 'STILL']

const FRAMES = [
  {
    id: '01',
    category: 'STREET',
    well: 'WELL_REF: 01',
    kind: '/ 35MM_RAW',
    aspectLabel: 'ASPECT 4:5',
    aspect: 'aspect-[4/5]',
    span: 'lg:col-span-5',
    caption: '35MM_RAW_001',
    exposure: 'EXPOSURE: 1/500s ISO 400',
    meta: 'f/2.8 · 50MM',
    pip: 'cyan',
    wire: 'portrait',
  },
  {
    id: '02',
    category: 'NIGHT',
    well: 'WELL_REF: 02',
    kind: '/ PANORAMIC_SYNTH',
    aspectLabel: 'ASPECT 16:9 // WIDE HORIZON',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-7',
    caption: 'PANORAMA_NEON_GRID',
    extra: 'PAYLOAD QUEUED // 8192 × 4608 PX',
    exposure: 'EXPOSURE: 1/125s ISO 100',
    meta: 'MULTI-STITCH STACK (7 TILES)',
    pip: 'magenta',
    wire: 'horizon',
  },
  {
    id: '03',
    category: 'STILL',
    well: 'WELL_REF: 03',
    kind: '',
    aspectLabel: 'ASPECT 1:1 SQUARE',
    aspect: 'aspect-square',
    span: 'lg:col-span-4',
    caption: 'SHADOW_STUDY',
    exposure: 'EXPOSURE: 1/800s',
    meta: 'ISO 100 // -1.3EV',
    pip: 'cyan',
    wire: 'hatch',
  },
  {
    id: '04',
    category: 'STREET',
    well: 'WELL_REF: 04',
    kind: '',
    aspectLabel: 'ASPECT 16:9',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-4',
    caption: 'INDUSTRIAL_HULL',
    exposure: 'EXPOSURE: 1/60s ISO 1600',
    meta: 'T2.0 · CINE',
    pip: 'cyan',
    wire: 'hull',
  },
  {
    id: '05',
    category: 'STILL',
    well: 'WELL_REF: 05',
    kind: '',
    aspectLabel: 'ASPECT 4:5 VERTICAL',
    aspect: 'aspect-[4/5]',
    span: 'lg:col-span-4',
    caption: 'MONOLITH_CHROME',
    exposure: 'EXPOSURE: 1/1000s',
    meta: 'ISO 64 // 85MM',
    pip: 'magenta',
    wire: 'tower',
  },
]

function Wire({ type }) {
  if (type === 'horizon') {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full stroke-current text-on-surface-variant opacity-40" fill="none" viewBox="0 0 800 450">
        <line x1="0" x2="800" y1="240" y2="240" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="0" x2="800" y1="260" y2="260" strokeWidth="0.75" />
        <line x1="0" x2="800" y1="285" y2="285" strokeWidth="0.75" />
        <line x1="0" x2="800" y1="320" y2="320" strokeWidth="0.75" />
        <line x1="0" x2="800" y1="370" y2="370" strokeWidth="0.75" />
        <line x1="400" x2="0" y1="240" y2="450" strokeWidth="0.75" />
        <line x1="400" x2="160" y1="240" y2="450" strokeWidth="0.75" />
        <line x1="400" x2="320" y1="240" y2="450" strokeWidth="0.75" />
        <line x1="400" x2="480" y1="240" y2="450" strokeWidth="0.75" />
        <line x1="400" x2="640" y1="240" y2="450" strokeWidth="0.75" />
        <line x1="400" x2="800" y1="240" y2="450" strokeWidth="0.75" />
        <ellipse cx="400" cy="240" rx="280" ry="120" strokeDasharray="6 3" strokeWidth="0.5" />
        <ellipse cx="400" cy="240" rx="160" ry="60" stroke="#db1490" strokeWidth="0.5" />
        <circle cx="400" cy="240" r="4" fill="#00d4ff" />
      </svg>
    )
  }
  if (type === 'hatch') {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full stroke-current text-on-surface-variant opacity-35" fill="none" viewBox="0 0 350 350">
        <line x1="20" x2="330" y1="330" y2="20" stroke="#db1490" strokeWidth="1.5" />
        <line x1="60" x2="330" y1="330" y2="60" strokeWidth="0.5" />
        <line x1="100" x2="330" y1="330" y2="100" strokeWidth="0.5" />
        <line x1="140" x2="330" y1="330" y2="140" strokeWidth="0.5" />
        <line x1="20" x2="290" y1="290" y2="20" strokeWidth="0.5" />
        <line x1="20" x2="250" y1="250" y2="20" strokeWidth="0.5" />
        <circle cx="175" cy="175" r="50" stroke="#00d4ff" strokeDasharray="4 2" strokeWidth="0.75" />
      </svg>
    )
  }
  if (type === 'hull') {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full stroke-current text-on-surface-variant opacity-35" fill="none" viewBox="0 0 480 270">
        <polygon points="120,40 360,40 420,140 360,230 120,230 60,140" stroke="#00d4ff" strokeWidth="1" />
        <line x1="120" x2="360" y1="40" y2="230" strokeDasharray="2 4" strokeWidth="0.5" />
        <line x1="360" x2="120" y1="40" y2="230" strokeDasharray="2 4" strokeWidth="0.5" />
        <circle cx="240" cy="135" r="30" stroke="#db1490" strokeWidth="0.75" />
        <line x1="40" x2="440" y1="135" y2="135" strokeWidth="0.5" />
      </svg>
    )
  }
  if (type === 'tower') {
    return (
      <svg className="pointer-events-none absolute inset-0 h-full w-full stroke-current text-on-surface-variant opacity-35" fill="none" viewBox="0 0 320 400">
        <polygon points="160,40 240,120 240,360 80,360 80,120" stroke="#00d4ff" strokeWidth="1" />
        <line x1="160" x2="160" y1="40" y2="360" stroke="#db1490" strokeWidth="0.75" />
        <line x1="80" x2="240" y1="120" y2="120" strokeWidth="0.75" />
        <line x1="80" x2="240" y1="200" y2="200" strokeDasharray="3 3" strokeWidth="0.5" />
        <circle cx="160" cy="200" r="90" strokeDasharray="4 2" strokeWidth="0.5" />
      </svg>
    )
  }
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full stroke-current text-on-surface-variant opacity-35" fill="none" viewBox="0 0 400 500">
      <line x1="0" x2="200" y1="0" y2="250" strokeDasharray="3 3" strokeWidth="0.75" />
      <line x1="400" x2="200" y1="0" y2="250" strokeDasharray="3 3" strokeWidth="0.75" />
      <line x1="0" x2="200" y1="500" y2="250" strokeDasharray="3 3" strokeWidth="0.75" />
      <line x1="400" x2="200" y1="500" y2="250" strokeDasharray="3 3" strokeWidth="0.75" />
      <rect x="50" y="62.5" width="300" height="375" strokeDasharray="2 2" strokeWidth="0.5" />
      <rect x="110" y="137.5" width="180" height="225" strokeWidth="0.5" />
      <circle cx="200" cy="250" r="40" strokeDasharray="4 2" strokeWidth="0.75" />
      <line x1="20" x2="380" y1="250" y2="250" opacity="0.4" strokeWidth="0.5" />
      <line x1="200" x2="200" y1="30" y2="470" opacity="0.4" strokeWidth="0.5" />
    </svg>
  )
}

function PhotoWell({ frame }) {
  return (
    <article className={`${frame.span} flex flex-col bg-[#D8DCE4] p-3 shadow-[inset_1px_1px_0px_#F4F6F8,inset_-1px_-1px_0px_rgba(20,23,28,0.22),2px_3px_8px_rgba(20,23,28,0.12)]`}>
      <div className="font-micro flex items-center justify-between px-1 pb-2 text-on-surface-variant uppercase">
        <div className="flex items-center gap-2">
          <Pip color={frame.pip} />
          <span className="font-code text-on-surface">{frame.well}</span>
          {frame.kind ? <span className="text-outline">{frame.kind}</span> : null}
        </div>
        <span className="tracking-widest">{frame.aspectLabel}</span>
      </div>
      <div className={`relative ${frame.aspect} flex w-full flex-col justify-between overflow-hidden bg-[#BAC0CA] p-4 shadow-[inset_2px_2px_6px_rgba(20,23,28,0.28),inset_-1px_-1px_0px_#F4F6F8]`}>
        <Wire type={frame.wire} />
        <div className="pointer-events-none absolute inset-2 border border-dashed border-primary-container/70 shadow-[inset_0_0_8px_rgba(0,212,255,0.2)]" />
        <div className="font-code relative z-10 flex items-start justify-between text-primary">
          <span className="text-[12px] font-bold text-on-surface">{frame.id}</span>
          <span className="font-micro tracking-widest text-on-surface-variant">[{frame.category}]</span>
        </div>
        <div className="relative z-10 my-auto flex flex-col items-center p-3 text-center bg-surface-variant/90 shadow-[inset_1px_1px_0_#F4F6F8,inset_-1px_-1px_0_rgba(20,23,28,0.2)]">
          <Icon name="hourglass_top" className="mb-1 text-[22px] text-secondary-container" />
          <span className="font-code font-bold tracking-wider text-on-surface">UPLOAD PENDING</span>
          <span className="font-tele mt-0.5 tracking-widest text-primary-container">{frame.caption}</span>
          {frame.extra ? <span className="font-micro mt-1.5 tracking-wider text-on-surface-variant uppercase">{frame.extra}</span> : null}
          <div className="mt-2 h-[2px] w-16 bg-primary-container/70 shadow-[0_0_6px_#00d4ff]" />
        </div>
        <div className="font-tele relative z-10 flex items-center justify-between bg-[#C5CAD3]/90 px-2 py-1 text-on-surface-variant shadow-[inset_1px_1px_0_#F4F6F8]">
          <span className="font-code text-[11px] text-on-surface">{frame.exposure}</span>
          <span className="font-code text-[11px] text-primary">{frame.meta}</span>
        </div>
      </div>
    </article>
  )
}

export default function Photography() {
  const [filter, setFilter] = useState('ALL')
  const [handshake, setHandshake] = useState(0)
  const visible = useMemo(
    () => (filter === 'ALL' ? FRAMES : FRAMES.filter((frame) => frame.category === filter)),
    [filter],
  )

  return (
    <div className="flex flex-col pb-16">
      <div className="flex flex-col justify-between gap-4 border-b border-outline-variant/40 pt-4 pb-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-1.5">
          <div className="font-tele flex items-center gap-3 uppercase tracking-widest text-on-surface-variant">
            <span className="font-code flex items-center gap-1.5 text-primary">
              <span className="h-2 w-2 bg-primary-container shadow-[0_0_8px_#00d4ff]" />
              PAYLOAD_BAY // OPTICAL_SUBSYSTEM
            </span>
            <span className="text-outline-variant">/</span>
            <span className="font-code tracking-widest text-secondary">WAIT // IMAGE PAYLOAD</span>
          </div>
          <h1 className="headline-xl tracking-tight text-on-surface uppercase select-none">PHOTOGRAPHY WORKS</h1>
        </div>
        <div className="font-tele flex flex-col items-start gap-1 bg-surface-variant/70 px-4 py-2.5 text-on-surface-variant shadow-[inset_1px_1px_0_#F4F6F8,inset_-1px_-1px_0_rgba(20,23,28,0.18)] md:items-end">
          <div className="font-code flex items-center gap-2 text-primary">
            <Icon name="sensors" className="text-[16px]" />
            <span>OPTICAL SENSORS: 4800K // F1.8 // RAW</span>
          </div>
          <div className="font-micro flex flex-wrap items-center gap-3">
            <span>FOCAL: 35.0MM EQUIV</span>
            <span className="text-outline-variant">|</span>
            <span>SENSOR: FULL-FRAME COLD-CCD</span>
            <span className="text-outline-variant">|</span>
            <span className="text-secondary-container">SHUTTER SYNC: ARMED</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 py-6">
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {FILTERS.map((item) => {
            const active = filter === item
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(item)}
                className={`font-code cursor-pointer border px-5 py-2 tracking-widest uppercase transition-all duration-75 ${
                  active
                    ? 'border-primary-container bg-surface-variant text-primary-container shadow-[0_0_12px_rgba(0,212,255,0.45),inset_0_0_6px_rgba(0,212,255,0.25)]'
                    : 'border-outline-variant/60 bg-surface-variant text-on-surface-variant hover:bg-surface-container hover:text-primary-container'
                }`}
              >
                [ {item} ]
              </button>
            )
          })}
        </div>
        <div className="font-tele hidden items-center gap-4 text-on-surface-variant sm:flex">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-ping bg-secondary-container" />
            <span className="font-code text-secondary">BAY STATUS: ENROUTE</span>
          </span>
          <span className="text-outline-variant">::</span>
          <span>TOTAL REGISTERS: {String(visible.length).padStart(2, '0')}_UNITS</span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-12">
        {visible.map((frame) => (
          <PhotoWell key={frame.id} frame={frame} />
        ))}
      </div>

      <div className="mt-8 flex w-full flex-col items-center justify-between gap-4 bg-surface-variant/80 p-4 shadow-[inset_1px_1px_0px_#F4F6F8,inset_-1px_-1px_0px_rgba(20,23,28,0.22)] sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 bg-primary-container shadow-[0_0_8px_#00d4ff]" />
          <div className="flex flex-col">
            <span className="font-code tracking-wider text-on-surface">
              HARDWARE BUFFER: {handshake}/5 HANDSHAKES // {visible.length} WELLS MOUNTED
            </span>
            <span className="font-micro text-on-surface-variant">TRANSFER PROTOCOL: HIGH-DENSITY BUS 100 Gbps // PARITY NOMINAL</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setHandshake((value) => value + 1)}
          className="font-code flex cursor-pointer items-center gap-2 border border-outline-variant/80 bg-[#D8DCE4] px-6 py-2.5 tracking-widest text-on-surface uppercase transition-all duration-75 hover:border-primary-container hover:bg-surface hover:text-primary-container hover:shadow-[0_0_12px_rgba(0,212,255,0.4)] active:translate-x-px active:translate-y-px"
        >
          <Icon name="sync" className="text-[16px]" />
          RETRY PAYLOAD HANDSHAKE
        </button>
      </div>
    </div>
  )
}
