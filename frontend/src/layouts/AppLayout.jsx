export function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f4f7fb] text-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.08),_transparent_28%)]" />
      <div className="pointer-events-none absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-blue-100/35 blur-3xl" />
      <div className="pointer-events-none absolute right-[-7rem] top-[18rem] h-80 w-80 rounded-full bg-amber-100/30 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  )
}