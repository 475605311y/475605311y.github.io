import { Pip } from '../components/Marks'

const TOOLS = [
  {
    id: 'TL-01',
    name: 'VS Code',
    copy: 'Primary script editor & telemetry compiler with custom neon synth syntax',
  },
  {
    id: 'TL-02',
    name: 'Figma',
    copy: 'Vector cockpit interface design, token management & wireframe prototyping',
  },
  {
    id: 'TL-03',
    name: 'Blender',
    copy: 'Hard-surface metal shader development, procedural grids & chrome modeling',
  },
  {
    id: 'TL-04',
    name: 'Three.js / WebGL',
    copy: 'Real-time GPU fragment shaders, perspective grid mathematics & CRT filters',
  },
  {
    id: 'TL-05',
    name: 'Git / GitHub',
    copy: 'Distributed version control, remote pipeline sync & continuous payload builds',
  },
  {
    id: 'TL-06',
    name: 'Alacritty',
    copy: 'GPU-accelerated terminal emulator with custom monochrome monospace typography',
  },
]

const METRICS = [
  { label: 'HOST_ARCH', value: 'x86_64 // NEON-X', tone: 'text-on-surface' },
  { label: 'COMPILER_FLIGHT', value: 'LLVM CLANG 18.1', tone: 'text-primary' },
  { label: 'VRAM_PIPELINE', value: 'DIRECT-X RAY // ACTIVE', tone: 'text-secondary' },
  { label: 'CONTAINER_TIER', value: 'LEVEL-0 BARE-METAL', tone: 'text-on-surface' },
]

export default function CodingTools() {
  return (
    <section className="w-full pb-16">
      <div className="mb-8 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-primary-container shadow-[0_0_10px_#00d4ff]" />
            <span className="font-code tracking-widest text-primary uppercase">TERMINAL // ENV: PRODUCTION // KERNEL v4.19</span>
          </div>
          <div className="font-micro flex items-center gap-2 bg-surface-container px-3 py-1 text-on-surface-variant uppercase shadow-inner">
            <span className="font-bold text-secondary">PORT: 8080</span>
            <span className="text-outline-variant">/</span>
            <span>PROTOCOL: SSH-VAULT</span>
            <span className="text-outline-variant">/</span>
            <span className="font-bold text-primary">CHASSIS LINK: ARMED</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-2 md:flex-row md:items-baseline md:justify-between">
          <h1 className="headline-xl tracking-tight text-on-surface uppercase select-none">CODING TOOLS</h1>
          <p className="max-w-xl text-lg text-on-surface-variant">Primary instrumentation stack and developer toolchains.</p>
        </div>
        <div className="relative mt-2 h-[2px] w-full bg-outline-variant/40">
          <div className="absolute top-0 left-0 h-full w-48 bg-primary-container shadow-[0_0_12px_#00d4ff]" />
          <div className="absolute top-[-4px] right-12 h-2 w-2 bg-secondary-container shadow-[0_0_8px_#db1490]" />
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {METRICS.map((item) => (
          <div key={item.label} className="panel-bezel flex flex-col justify-between bg-surface-variant p-3">
            <span className="font-micro uppercase text-on-surface-variant">{item.label}</span>
            <span className={`font-code font-bold ${item.tone}`}>{item.value}</span>
          </div>
        ))}
      </div>

      <div className="panel-bezel relative w-full bg-surface-container-highest shadow-xl">
        <div className="flex h-10 items-center justify-between bg-[#B4BAC4] px-4 shadow-[inset_0_1px_0_#F4F6F8]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary-container shadow-[0_0_8px_#00d4ff]" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-container shadow-[0_0_8px_#db1490]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b]" />
            </div>
            <span className="font-code text-outline-variant">|</span>
            <span className="font-code font-bold tracking-wider text-on-surface">DEV_ENVIRONMENT.EXE [READ_ONLY]</span>
          </div>
          <div className="font-micro hidden items-center gap-4 text-on-surface-variant uppercase sm:flex">
            <span>SEC: RACK-DELTA</span>
            <span className="h-1.5 w-1.5 bg-outline" />
            <span>SLOT_MAP: 06/06 ALLOCATED</span>
            <span className="bg-surface-container px-2 py-0.5 font-mono text-[10px] text-on-surface">LOCKED</span>
          </div>
        </div>

        <div className="font-tele flex items-center justify-between border-t border-b border-[#9AA3AE] bg-surface-variant/80 px-6 py-2 text-on-surface-variant uppercase">
          <div className="flex items-center gap-8">
            <span className="w-16">REG_ID</span>
            <span>SUBSYSTEM / APPLICATION CORE</span>
          </div>
          <div className="hidden items-center gap-16 md:flex">
            <span>PIPELINE FUNCTIONAL DEFINITION</span>
            <span className="w-32 text-right">PAYLOAD_LINK</span>
          </div>
        </div>

        <div className="flex flex-col bg-[#C5CAD3]">
          {TOOLS.map((tool, index) => (
            <div
              key={tool.id}
              className={`group relative flex flex-col justify-between gap-4 bg-[#D8DCE4] px-6 py-5 shadow-[inset_1px_1px_0_#F4F6F8] transition-all duration-75 hover:bg-surface-bright md:flex-row md:items-center ${
                index < TOOLS.length - 1 ? 'border-b border-[#9AA3AE]' : ''
              }`}
            >
              <div className="flex items-start gap-6 md:items-center">
                <span className="font-code bg-surface-variant px-2 py-1 font-bold tracking-widest text-on-surface-variant">{tool.id}</span>
                <div className="flex flex-col">
                  <span className="headline-md tracking-tight text-on-surface uppercase transition-colors duration-75 group-hover:text-primary">
                    {tool.name}
                  </span>
                  <span className="mt-1 text-[13px] text-on-surface-variant md:hidden">{tool.copy}</span>
                </div>
              </div>
              <div className="hidden max-w-xl flex-1 px-4 md:block">
                <p className="text-[15px] leading-6 text-on-surface-variant">{tool.copy}</p>
              </div>
              <div className="flex w-full items-center justify-end md:w-auto">
                <span className="font-code cursor-default border-b border-dashed border-primary-container py-0.5 tracking-widest text-primary uppercase">
                  URL PENDING
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#9AA3AE] bg-[#B4BAC4] px-6 py-3 sm:flex-row">
          <div className="font-code flex items-center gap-3 font-semibold tracking-wider text-on-surface">
            <span className="h-2 w-2 bg-primary-container shadow-[0_0_6px_#00d4ff]" />
            <span>MEM_USAGE: 3.4GB / 64GB // LATENCY: 0.8ms // STATUS: NOMINAL</span>
          </div>
          <div className="font-micro flex items-center gap-6 text-on-surface-variant uppercase">
            <span className="flex items-center gap-1.5">
              <Pip color="magenta" />
              SYS-IO: FLUSHED
            </span>
            <span className="tracking-widest">CRC32: 0x8FA442E</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="panel-bezel flex flex-col justify-between bg-surface-variant p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-tele font-bold tracking-widest text-primary uppercase">ACCELERATOR_STATUS</span>
            <span className="font-micro text-on-surface-variant">QUAD-CORE CHIP</span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="font-micro mb-1 flex justify-between uppercase">
                <span className="text-on-surface">GPU RASTERIZER</span>
                <span className="font-bold text-primary">94.2%</span>
              </div>
              <div className="h-1.5 w-full bg-[#9AA3AE]">
                <div className="h-full w-[94%] bg-primary-container shadow-[0_0_6px_#00d4ff]" />
              </div>
            </div>
            <div>
              <div className="font-micro mb-1 flex justify-between uppercase">
                <span className="text-on-surface">SYNTH SYNTAX PARSER</span>
                <span className="font-bold text-secondary">42.0%</span>
              </div>
              <div className="h-1.5 w-full bg-[#9AA3AE]">
                <div className="h-full w-[42%] bg-secondary-container shadow-[0_0_6px_#db1490]" />
              </div>
            </div>
          </div>
          <div className="font-micro mt-4 flex justify-between border-t border-[#9AA3AE] pt-4 text-on-surface-variant">
            <span>CLOCK: 4.80 GHz</span>
            <span>THERMAL: 48°C NOM</span>
          </div>
        </div>

        <div className="panel-bezel flex flex-col justify-between bg-surface-variant p-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-tele font-bold tracking-widest text-primary uppercase">SCHEMATIC // PROJECTION</span>
            <span className="h-2 w-2 rotate-45 border border-primary-container bg-primary-container/20" />
          </div>
          <div className="panel-bezel relative flex h-24 w-full items-center justify-center overflow-hidden bg-[#BAC0CA]">
            <svg className="h-full w-full text-outline-variant/60" fill="none" stroke="currentColor" viewBox="0 0 300 100">
              <line x1="0" x2="300" y1="90" y2="90" />
              <line x1="0" x2="300" y1="75" y2="75" strokeWidth="0.75" />
              <line x1="150" x2="10" y1="40" y2="100" className="text-primary-container/70" strokeWidth="0.75" />
              <line x1="150" x2="150" y1="40" y2="100" strokeWidth="0.75" />
              <line x1="150" x2="290" y1="40" y2="100" className="text-primary-container/70" strokeWidth="0.75" />
              <circle cx="150" cy="40" r="4" className="text-secondary-container" strokeWidth="1.5" />
            </svg>
            <div className="font-code absolute right-2 bottom-1 text-[9px] font-bold tracking-widest text-on-surface-variant">GRID: 128-VERTEX</div>
          </div>
          <div className="font-micro flex items-center justify-between pt-3 text-on-surface-variant">
            <span>FRAG_SHADER: 60 FPS</span>
            <span className="font-bold text-secondary">CRT_SYNC_ACTIVE</span>
          </div>
        </div>

        <div className="panel-bezel flex flex-col justify-between bg-surface-variant p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-tele font-bold tracking-widest text-primary uppercase">DAEMON_LOG_STREAM</span>
            <span className="font-micro font-bold text-secondary">REALTIME</span>
          </div>
          <div className="panel-bezel space-y-1 bg-[#B6BCC7] p-3 font-mono text-[11px] leading-4 text-on-surface">
            <p className="truncate"><span className="text-primary">[18:41:02]</span> VSC-SYNC: 14 ext armed</p>
            <p className="truncate"><span className="text-secondary">[18:41:44]</span> FIGMA-RPC: token sync ok</p>
            <p className="truncate"><span className="text-primary">[18:42:01]</span> THREE-MESH: buffer cached</p>
            <p className="truncate"><span className="text-on-surface-variant">[18:42:09]</span> ALACRITTY: pty spawned</p>
          </div>
          <div className="font-micro flex items-center justify-between pt-3 text-on-surface-variant">
            <span>INPUT_STREAM: /dev/pts/2</span>
            <span className="font-bold text-primary">READY_</span>
          </div>
        </div>
      </div>
    </section>
  )
}
