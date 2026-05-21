import { NAV_ACTIONS, SEARCH_PLACEHOLDER } from '../../constants/checkout.js'
import { cn } from '../../utils/classNames.js'
import { Button } from '../ui/Button.jsx'
import { MenuIcon, PlusIcon, SearchIcon, TrophyIcon, UserIcon } from '../ui/Icons.jsx'

function NavbarAction({ label, tone }) {
  return (
    <Button
      variant={tone === 'upgrade' ? 'upgrade' : 'primary'}
      size="sm"
      className={cn('px-3.5', tone === 'primary' && 'bg-blue-600 hover:bg-blue-700')}
    >
      {tone === 'upgrade' ? <TrophyIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
      <span>{label}</span>
    </Button>
  )
}

export function Navbar({ mobileMenuOpen, onToggleMobileMenu, onSearchChange, searchQuery }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1288px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden min-w-0 flex-1 md:block">
          <label className="relative block max-w-[355px]">
            <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              type="search"
              placeholder={SEARCH_PLACEHOLDER}
              className="h-10 w-full rounded-md border border-slate-200 bg-white pl-4 pr-10 text-sm text-slate-900 placeholder:text-slate-400 shadow-[0_1px_0_rgba(15,23,42,0.02)] transition-all duration-200 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </label>
        </div>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {NAV_ACTIONS.map((action) => (
            <NavbarAction key={action.label} label={action.label} tone={action.tone} />
          ))}
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors duration-200 hover:bg-slate-100"
            aria-label="Open profile menu"
          >
            <UserIcon className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition-colors duration-200 hover:bg-slate-100"
            aria-label="Open profile menu"
          >
            <UserIcon className="h-4.5 w-4.5" />
          </button>
          <button
            type="button"
            onClick={onToggleMobileMenu}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors duration-200 hover:bg-slate-50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden">
          <div className="mx-auto flex max-w-[1288px] flex-col gap-3">
            <label className="relative block">
              <SearchIcon className="pointer-events-none absolute right-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
              <input
                value={searchQuery}
                onChange={(event) => onSearchChange(event.target.value)}
                type="search"
                placeholder={SEARCH_PLACEHOLDER}
                className="h-10 w-full rounded-md border border-slate-200 bg-white pl-4 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-100"
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ACTIONS.map((action) => (
                <NavbarAction key={action.label} label={action.label} tone={action.tone} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}