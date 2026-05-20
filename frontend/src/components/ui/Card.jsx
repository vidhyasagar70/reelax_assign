import { cn } from '../../utils/classNames.js'

export function Card({ children, className }) {
  return (
    <section
      className={cn(
        'rounded-lg border border-slate-200 bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)]',
        className,
      )}
    >
      {children}
    </section>
  )
}