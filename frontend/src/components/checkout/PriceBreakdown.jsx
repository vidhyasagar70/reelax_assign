import { formatCurrency } from '../../utils/currency.js'

function PriceRow({ label, value, valueClassName = 'text-slate-900' }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className={`font-semibold ${valueClassName}`}>{value}</span>
    </div>
  )
}

export function PriceBreakdown({
  subtotal,
  couponDiscount,
  taxAmount,
  walletDeduction,
  totalDueToday,
  appliedCouponCode,
}) {
  return (
    <div className="space-y-3 rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-5">
      <PriceRow label="Subtotal" value={formatCurrency(subtotal)} />

      {couponDiscount > 0 ? (
        <PriceRow
          label={appliedCouponCode ? `${appliedCouponCode} discount` : 'Coupon discount'}
          value={`- ${formatCurrency(couponDiscount)}`}
          valueClassName="text-emerald-600"
        />
      ) : null}

      <PriceRow label="Tax (18% GST)" value={formatCurrency(taxAmount)} />

      {walletDeduction > 0 ? (
        <PriceRow label="Wallet applied" value={`- ${formatCurrency(walletDeduction)}`} valueClassName="text-emerald-600" />
      ) : null}

      <div className="border-t border-slate-200 pt-3">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Total due today</p>
            <p className="mt-1 text-xs text-slate-500">Payable amount after discounts and tax.</p>
          </div>
          <p className="text-[22px] font-extrabold tracking-tight text-blue-600 sm:text-[24px]">
            {formatCurrency(totalDueToday)}
          </p>
        </div>
      </div>
    </div>
  )
}