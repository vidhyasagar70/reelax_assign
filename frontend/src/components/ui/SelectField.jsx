import { forwardRef } from 'react'
import { cn } from '../../utils/classNames.js'
import { ChevronDownIcon } from './Icons.jsx'

export const SelectField = forwardRef(function SelectField(
  { label, error, className, wrapperClassName, children, ...props },
  ref,
) {
  return (
    <label className={cn('block', wrapperClassName)}>
      <span className="mb-2 block text-[14px] font-medium font-inter text-label-text">{label}</span>
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'h-12 w-full appearance-none rounded-md border border-slate-200 bg-slate-50 px-4 pr-10 text-sm text-slate-900 transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100',
            error && 'border-rose-300 focus:border-rose-400 focus:ring-rose-100',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      </div>
      {error ? <p className="mt-1.5 text-xs font-medium text-rose-500">{error}</p> : null}
    </label>
  )
})