function createIcon(children, title) {
  return function Icon({ className = 'h-4 w-4', stroke = 'currentColor' }) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden={title ? undefined : 'true'}
        role={title ? 'img' : 'presentation'}
      >
        {title ? <title>{title}</title> : null}
        {children}
      </svg>
    )
  }
}

export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </>,
  'Search',
)

export const PlusIcon = createIcon(
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>,
  'Add',
)

export const MenuIcon = createIcon(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>,
  'Menu',
)

export const UserIcon = createIcon(
  <>
    <circle cx="12" cy="8" r="3.25" />
    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
  </>,
  'Profile',
)

export const ChevronDownIcon = createIcon(
  <path d="m6 9 6 6 6-6" />,
  'Expand',
)

export const WalletIcon = createIcon(
  <>
    <path d="M4.5 7.5h14a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-12a3 3 0 0 1-3-3v-5.5a2 2 0 0 1 2-2Z" />
    <path d="M15.5 12.5h4" />
  </>,
  'Wallet',
)

export const TagIcon = createIcon(
  <>
    <path d="M3.5 12.5 12 4l8.5 8.5-8.5 8.5-8.5-8.5Z" />
    <circle cx="8.5" cy="8.5" r="1.1" fill="currentColor" stroke="none" />
  </>,
  'Coupon',
)

export const ArrowRightIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>,
  'Continue',
)

export const ArrowLeftIcon = createIcon(
  <>
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </>,
  'Back',
)

export const CheckCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="8.2" />
    <path d="m8.5 12 2.2 2.2L15.8 9" />
  </>,
  'Selected',
)

export const TrophyIcon = createIcon(
  <>
    <path d="M8 6h8v2a4 4 0 0 1-8 0V6Z" />
    <path d="M9 18h6" />
    <path d="M12 14v4" />
    <path d="M6 7H4a2 2 0 0 0 2 2" />
    <path d="M18 7h2a2 2 0 0 1-2 2" />
  </>,
  'Upgrade',
)