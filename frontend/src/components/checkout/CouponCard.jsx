import { cn } from '../../utils/classNames.js'

export function CouponCard({ coupon, icon: Icon, selected, applied, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(coupon.code)}
      className={cn(
        'flex w-full items-center justify-between gap-4 rounded-md border bg-white px-4 py-3.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        selected || applied
          ? 'border-blue-400 bg-blue-50 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]'
          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50',
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-extrabold tracking-wide text-slate-900">{coupon.headline}</span>
          {applied ? <span className="text-[11px] font-bold text-blue-600">Applied</span> : null}
        </div>
        <p className="mt-1 text-[11px] font-medium text-slate-500">{coupon.description}</p>
      </div>
      </div>
      <div
        className={cn(
          'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-all duration-200',
          selected || applied ? 'border-blue-500 bg-blue-50' : 'border-slate-300 bg-white',
        )}
      >
        {selected || applied ? <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> : null}
      </div>
    </button>
  )
}