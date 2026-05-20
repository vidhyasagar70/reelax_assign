import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'
import { InputField } from '../ui/InputField.jsx'
import { TagIcon, ChevronDownIcon } from '../ui/Icons.jsx'
import { CouponCard } from './CouponCard.jsx'

export function CouponSection({
  coupons,
  couponInput,
  couponFeedback,
  couponOpen,
  appliedCouponCode,
  selectedCouponCode,
  onCouponInputChange,
  onApplyCoupon,
  onSelectCoupon,
  onToggleCouponOpen,
}) {
  return (
    <Card className="px-4 py-4 sm:px-5">
      <button
        type="button"
        onClick={onToggleCouponOpen}
        className="flex w-full items-center justify-between gap-3 text-left"
        aria-expanded={couponOpen}
      >
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-slate-50 text-slate-500">
            <TagIcon className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">Apply Coupon</p>
          </div>
        </div>
        <ChevronDownIcon
          className={couponOpen ? 'h-4.5 w-4.5 text-slate-400 transition-transform duration-200' : 'h-4.5 w-4.5 rotate-180 text-slate-400 transition-transform duration-200'}
        />
      </button>

      {couponOpen ? (
        <div className="mt-4 space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <InputField
                label=""
                value={couponInput}
                onChange={(event) => onCouponInputChange(event.target.value)}
                placeholder="Enter coupon code"
                wrapperClassName="mb-0"
                className="bg-white"
              />
            </div>
            <Button variant="primary" size="md" onClick={onApplyCoupon} className="sm:min-w-[92px]">
              Apply
            </Button>
          </div>

          {couponFeedback ? <p className="text-xs font-medium text-blue-600">{couponFeedback}</p> : null}

          <div className="space-y-2">
            {coupons.map((coupon) => (
              <CouponCard
                key={coupon.code}
                coupon={coupon}
                selected={selectedCouponCode === coupon.code}
                applied={appliedCouponCode === coupon.code}
                onSelect={onSelectCoupon}
              />
            ))}
          </div>
        </div>
      ) : null}
    </Card>
  )
}