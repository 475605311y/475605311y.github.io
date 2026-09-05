import { Link } from 'react-router-dom'
import Galaxy from '../components/Galaxy'
import { Icon, Pip } from '../components/Marks'

const BAYS = [
  {
    to: '/photography',
    code: 'BAY_01 // SEC_PHOTO',
    index: '01',
    title: 'PHOTOGRAPHY',
    count: '24 ARTIFACTS',
    note: 'OPTICS & LIGHT',
    pip: 'cyan',
  },
  {
    to: '/hobbies',
    code: 'BAY_02 // SEC_DEV',
    index: '02',
    title: 'HOBBIES',
    count: '03 MODULES',
    note: 'ANALOG AUDIO & SYNTH',
    pip: 'magenta',
  },
  {
    to: '/coding-tools',
    code: 'BAY_03 // SEC_TOOLS',
    index: '03',
    title: 'CODING TOOLS',
    count: '12 PROTOCOLS',
    note: 'DEV ENV & SCRIPTS',
    pip: 'cyan',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-4 pb-16">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 rounded-sm bg-surface-container px-3 py-1 shadow-sm">
            <Pip pulse />
            <span className="font-code uppercase tracking-widest text-primary">SYS // PORTFOLIO // ONLINE // CH-01</span>
          </div>
          <div className="font-tele hidden items-center gap-3 text-on-surface-variant sm:flex">
            <span>BAY_REF: LV-426</span>
            <span className="text-outline-variant">•</span>
            <span>BUS: SYNC_ESTABLISHED</span>
            <span className="text-outline-variant">•</span>
            <span className="font-code text-secondary">READY</span>
          </div>
        </div>
        <div className="relative mt-2">
          <h1 className="headline-xl bg-gradient-to-r from-[#FF9900] via-[#FF3CAC] to-[#00D4FF] bg-clip-text uppercase tracking-tighter text-transparent select-none drop-shadow-[0_2px_24px_rgba(255,60,172,0.25)] sm:tracking-normal">
            emma's space
          </h1>
          <p className="headline-md mt-1 max-w-2xl font-medium tracking-tight text-on-surface">
            a personal homepage for work, light, and tools.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col justify-between overflow-hidden rounded-sm bg-surface-variant p-3 shadow-md">
        <div className="relative z-30 flex w-full items-center justify-between rounded-sm bg-surface-container/70 px-2 py-1 backdrop-blur-sm">
          <div className="font-code flex items-center gap-3 text-on-surface-variant">
            <span className="font-bold text-secondary">RADAR-SCOPE</span>
            <span className="text-outline-variant">::</span>
            <span className="tracking-wider text-on-surface">GALAXY_FEED_01</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-micro text-on-surface-variant">FOV 104°</span>
            <span className="h-2 w-2 rounded-sm bg-primary-container shadow-[0_0_6px_#00d4ff]" />
          </div>
        </div>
        <div className="relative my-2 w-full overflow-hidden bg-[#07080A]" style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={0.5}
            glowIntensity={0.3}
            saturation={0.7}
            hueShift={220}
            twinkleIntensity={0.2}
            rotationSpeed={0.1}
            repulsionStrength={0.5}
            autoCenterRepulsion={0}
            starSpeed={0.3}
            speed={0.7}
          />
          <img
            src="/hero-photo.jpg"
            alt=""
            className="pointer-events-none absolute inset-0 z-10 m-auto max-h-[78%] max-w-[70%] object-contain"
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:100%_4px] opacity-20" />
          <div className="pointer-events-none absolute top-4 left-4 z-10 h-6 w-6 border-t-2 border-l-2 border-primary-container" />
          <div className="pointer-events-none absolute top-4 right-4 z-10 h-6 w-6 border-t-2 border-r-2 border-primary-container" />
          <div className="pointer-events-none absolute bottom-4 left-4 z-10 h-6 w-6 border-b-2 border-l-2 border-primary-container" />
          <div className="pointer-events-none absolute right-4 bottom-4 z-10 h-6 w-6 border-r-2 border-b-2 border-primary-container" />
          <div className="pointer-events-none font-micro absolute bottom-3 left-4 z-10 flex items-center gap-4 text-[#C5CAD3]">
            <span>REF: ES_80X_CAM_FEED</span>
            <span className="text-outline-variant">/</span>
            <span>GALAXY // MOUSE_VECTOR_ARMED</span>
          </div>
          <div className="pointer-events-none font-micro absolute right-4 bottom-3 z-10 tracking-widest text-secondary">SYS.STABLE</div>
        </div>
        <div className="font-micro relative z-10 flex w-full items-center justify-between px-2 pt-1 text-on-surface-variant uppercase">
          <div className="flex items-center gap-2">
            <Icon name="sensors" className="text-[14px] text-primary" />
            <span>SENSORS: RADIAL POLARIZATION 98.4%</span>
          </div>
          <div className="hidden items-center gap-4 sm:flex">
            <span>FRAME: 16:9 RECESSED</span>
            <span>SECTOR: 0x8F94</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {BAYS.map((bay) => (
          <Link
            key={bay.to}
            to={bay.to}
            className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-surface-variant p-5 shadow-sm transition-all duration-75 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="absolute top-0 right-0 h-0 w-0 border-t-[18px] border-l-[18px] border-t-secondary border-l-transparent" />
            <div>
              <div className="flex items-center justify-between">
                <span className="font-micro uppercase tracking-widest text-on-surface-variant">{bay.code}</span>
                <span className="font-code text-secondary">{bay.index}</span>
              </div>
              <h2 className="headline-md mt-2 font-semibold tracking-tight text-on-surface">{bay.title}</h2>
              <p className="mt-1 text-[13px] text-on-surface-variant">{bay.count}</p>
            </div>
            <div className="font-tele mt-4 flex items-center justify-between pt-3 text-on-surface-variant">
              <span className="flex items-center gap-1.5">
                <Pip color={bay.pip} />
                {bay.note}
              </span>
              <Icon name="arrow_forward" className="text-[16px] text-primary transition-transform duration-75 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-6 pt-4 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rotate-45 bg-primary-container shadow-[0_0_8px_#00d4ff]" />
          <span className="font-tele uppercase text-on-surface-variant">SYS DISPATCH: PAYLOAD AUTHORIZED // READY TO ENGAGE</span>
        </div>
        <Link
          to="/photography"
          className="group relative -skew-x-12 cursor-pointer bg-surface-variant px-10 py-3.5 shadow-md transition-all duration-75 hover:bg-surface-container-lowest hover:shadow-[0_0_20px_rgba(255,60,172,0.6)]"
        >
          <span className="font-code flex skew-x-12 items-center gap-3 font-bold tracking-[0.2em] text-on-surface uppercase group-hover:text-secondary">
            ENTER ARCHIVE
            <Icon name="rocket_launch" className="text-[20px] text-primary group-hover:text-secondary" />
          </span>
          <span className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_2px_#00D4FF]" />
        </Link>
      </div>

      <div className="font-tele relative mt-4 flex w-full flex-col items-center justify-between gap-2 overflow-hidden rounded-sm bg-surface-container p-3 text-on-surface-variant sm:flex-row">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:100%_3px] opacity-20" />
        <div className="relative z-10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
          <span className="font-code text-on-surface">LAT 34.0522° N // LNG 118.2437° W // ORBITAL DEVIATION 0.0042</span>
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <span>FRAME-SYNC: 60Hz</span>
          <span className="text-outline-variant">|</span>
          <span>MOD_RACK: ONLINE</span>
          <span className="text-outline-variant">|</span>
          <span className="font-code text-primary">CHKSUM: 0x9AF4</span>
        </div>
      </div>
    </div>
  )
}
