import { useEffect, useState } from 'react'
import { EsMark, Pip } from './Marks'

function formatUtc(date) {
  return date.toISOString().slice(11, 19)
}

export default function StatusBar() {
  const [utc, setUtc] = useState(() => formatUtc(new Date()))

  useEffect(() => {
    const id = setInterval(() => setUtc(formatUtc(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className="fixed top-0 right-0 left-0 z-40 h-11 border-b border-[#9AA3AE] bg-surface-container-high/90 shadow-[inset_0_-1px_0_#F4F6F8] backdrop-blur-md md:right-24">
      <div className="font-tele flex h-11 w-full items-center justify-between px-4 text-on-surface-variant uppercase md:px-6">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <span className="flex items-center gap-2">
            <Pip pulse />
            <span className="font-code text-primary">SYS // SIGNAL OK // 99.8%</span>
          </span>
          <span className="hidden text-outline-variant sm:inline">|</span>
          <span className="hidden tracking-wider sm:inline">LAT 47°36'35"N · LON 122°19'59"W</span>
          <span className="hidden text-outline-variant lg:inline">|</span>
          <span className="font-micro hidden text-on-surface-variant lg:inline">ORBIT-REF: ES-2084-A</span>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-code">UTC {utc}</span>
          <div className="panel-bezel hidden h-8 w-8 items-center justify-center bg-[#C5CAD3] sm:flex">
            <EsMark className="h-6 w-6" />
          </div>
        </div>
      </div>
    </header>
  )
}
