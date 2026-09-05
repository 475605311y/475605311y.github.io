import { Outlet } from 'react-router-dom'
import NavRail from './NavRail'
import StatusBar from './StatusBar'

export default function Layout() {
  return (
    <div className="cockpit-hull min-h-screen text-on-surface">
      <StatusBar />
      <NavRail />
      <div className="pt-11 pb-16 md:mr-24 md:pb-0">
        <main className="min-h-[calc(100svh-2.75rem-3.25rem)] w-full px-5 sm:px-8 md:px-12 lg:px-16">
          <Outlet />
        </main>
        <footer className="font-tele mt-8 flex items-center justify-between border-t border-[#9AA3AE] bg-surface-container-high/60 px-5 py-4 text-on-surface-variant uppercase sm:px-8 md:px-12 lg:px-16">
          <span>EMMA'S SPACE // TELEMETRY FRAMEWORK</span>
          <span className="hidden sm:inline">CHASSIS RESISTANCE: NOMINAL</span>
        </footer>
      </div>
    </div>
  )
}
