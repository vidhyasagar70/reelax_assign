import { forwardRef } from 'react'
import { cn } from '../../utils/classNames.js'

export const InputField = forwardRef(function InputField(
  {
    label,
    error,
    hint,
    className,
    wrapperClassName,
    inputClassName,
    required,
    icon,
    ...props
  },
  ref,
) {
  const hasLabel = Boolean(label)

  return (
    <label className={cn('block', wrapperClassName)}>
      {hasLabel ? (
        <span className="mb-2 block text-[12px] font-semibold text-slate-500">
          {label}
          {required ? <span className="ml-0.5 text-rose-500">*</span> : null}
        </span>
      ) : null}
      <div className="relative">
        {icon ? (
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
            {icon}
          </div>
        ) : null}
        <input
          ref={ref}
          className={cn(
            'h-12 w-full rounded-md border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100',
            icon && 'pl-10',
            error && 'border-rose-300 focus:border-rose-400 focus:ring-rose-100',
            className,
            inputClassName,
          )}
          {...props}
        />
      </div>
      {error ? <p className="mt-1.5 text-xs font-medium text-rose-500">{error}</p> : null}
      {hint && !error ? <p className="mt-1.5 text-xs text-slate-500">{hint}</p> : null}
    </label>
  )
})