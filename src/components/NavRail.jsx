import { NavLink } from 'react-router-dom'
import { EsMark, NAV_ITEMS } from './Marks'

export default function NavRail() {
  return (
    <>
      <aside className="cockpit-rail-seam fixed top-0 right-0 z-50 hidden h-full w-24 flex-col items-center justify-between border-l border-primary-container bg-[#B4BAC4] py-4 md:flex">
        <div className="flex w-full flex-col items-center gap-4">
          <NavLink to="/" className="panel-bezel bg-[#C5CAD3] p-1" aria-label="emma's space home">
            <EsMark />
          </NavLink>
          <div className="h-px w-8 bg-[#9AA3AE]" />
        </div>
        <nav className="flex w-full flex-1 flex-col items-center justify-center gap-12">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex flex-col items-center gap-2">
          <div className="h-2 w-2 rotate-45 border border-primary-container bg-primary-container/30 shadow-[0_0_6px_#00d4ff]" />
          <span className="font-micro tracking-widest text-on-surface-variant">v4.0.2</span>
        </div>
      </aside>

      <nav className="fixed right-0 bottom-0 left-0 z-50 grid grid-cols-4 border-t border-primary-container bg-[#B4BAC4] md:hidden">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `dock-link flex h-14 flex-col items-center justify-center gap-1 ${isActive ? 'is-active bg-[#C5CAD3]' : ''}`
            }
          >
            <span className="h-1 w-1 rotate-45 bg-current" />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
