import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'
import { InputField } from '../ui/InputField.jsx'
import { CouponCard } from './CouponCard.jsx'
import { formatCurrency } from '../../utils/currency.js'
import { ArrowRightIcon } from '../ui/Icons.jsx'
import { BadgePercent, ChevronDown, ChevronUp, Tag, Wallet } from 'lucide-react'

export function OrderSummary({
  selectedPlan,
  selectedCoupon,
  appliedCouponCode,
  couponInput,
  couponFeedback,
  couponOpen,
  coupons,
  walletApplied,
  subtotal,
  couponDiscount,
  taxAmount,
  walletDeduction,
  totalDueToday,
  onApplyCoupon,
  onCouponInputChange,
  onSelectCoupon,
  onToggleCouponOpen,
  onToggleWalletApplied,
  onUpgradePlan,
}) {
  return (
    <div className="space-y-4 lg:sticky lg:top-24">
      {/* Container 1: Order Summary to Upgrade Button */}
      <Card className="px-4 py-5 sm:px-5">
        <h2 className="text-[23px] font-extrabold tracking-tight text-slate-900">Order Summary</h2>

        <div className="mt-4 rounded-lg border border-blue-200 bg-white px-4 py-4 shadow-[0_0_0_1px_rgba(59,130,246,0.06)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[28px] font-extrabold leading-none tracking-tight text-slate-900">
                {formatCurrency(selectedPlan.monthlyPrice)} <span className="text-sm font-semibold text-slate-500">/month</span>
              </p>
              <p className="mt-2 text-xs font-medium text-slate-500">Includes {selectedPlan.creditsPerMonth.toLocaleString('en-IN')} credits/mo.</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">Selected Plan</p>
              <p className="text-xl font-extrabold text-slate-900">{selectedPlan.name}</p>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="md"
          onClick={onUpgradePlan}
          className="mt-3 w-full justify-center border border-blue-500 text-blue-600 hover:bg-blue-50"
        >
          <ArrowRightIcon className="h-4 w-4 rotate-180" />
          <span className="text-blue-600">Upgrade to Growth Plan</span>
        </Button>
      </Card>

      {/* Container 2: Wallet to Proceed Button */}
      <Card className="overflow-hidden px-0 py-0">
        <div className="px-4 py-4 sm:px-5">
          <div className="rounded-md border border-gray-200 bg-white px-4 py-4 shadow-[0_1px_0_rgba(15,23,42,0.02)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-blue-100 bg-blue-50 text-blue-600">
                <Wallet className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-900">Wallet Balance</p>
                <p className="text-xs text-slate-500">₹500.00 available</p>
              </div>
              <Button
                variant={walletApplied ? 'secondary' : 'primary'}
                size="md"
                onClick={onToggleWalletApplied}
                className="h-11 min-w-[84px] px-4"
              >
                {walletApplied ? 'Applied' : 'Apply'}
              </Button>
            </div>

            {walletApplied ? (
              <p className="mt-3 text-xs font-medium text-emerald-600">
                Wallet credit will be deducted from the payable amount.
              </p>
            ) : null}
          </div>
        </div>

        <div className="px-4 sm:px-5">
          <div className="overflow-hidden rounded-md border border-gray-200 bg-white">
            <button
              type="button"
              onClick={onToggleCouponOpen}
              className="flex w-full items-center justify-between gap-3 border-b border-gray-200 px-4 py-4 text-left"
              aria-expanded={couponOpen}
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-blue-50 text-blue-500">
                  <Tag className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Apply Coupon</p>
                  <p className="mt-0.5 text-xs text-slate-500">Choose or enter a code below</p>
                </div>
              </div>
              {couponOpen ? (
                <ChevronUp className="h-4.5 w-4.5 text-slate-400" />
              ) : (
                <ChevronDown className="h-4.5 w-4.5 text-slate-400" />
              )}
            </button>

            {couponOpen ? (
              <div className="space-y-4 px-4 py-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <InputField
                      label=""
                      value={couponInput}
                      onChange={(event) => onCouponInputChange(event.target.value)}
                      placeholder="Enter coupon code"
                      wrapperClassName="mb-0"
                      className="h-11 border-gray-300 bg-white focus:border-blue-400"
                    />
                  </div>
                  <Button variant="primary" size="md" onClick={onApplyCoupon} className="h-11 sm:min-w-[92px]">
                    Apply
                  </Button>
                </div>

                {couponFeedback ? <p className="text-xs font-medium text-blue-600">{couponFeedback}</p> : null}

                <div className="space-y-3">
                  {coupons.map((coupon) => (
                    <CouponCard
                      key={coupon.code}
                      coupon={coupon}
                      icon={coupon.code === 'WELCOME20' ? Tag : BadgePercent}
                      selected={selectedCoupon?.code === coupon.code}
                      applied={appliedCouponCode === coupon.code}
                      onSelect={onSelectCoupon}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-4 py-4 sm:px-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-semibold text-slate-900">{formatCurrency(subtotal)}</span>
            </div>

            {couponDiscount > 0 ? (
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-slate-500">
                  {appliedCouponCode ? `${appliedCouponCode} discount` : 'Coupon discount'}
                </span>
                <span className="font-semibold text-emerald-600">- {formatCurrency(couponDiscount)}</span>
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-500">Tax (18% GST)</span>
              <span className="font-semibold text-slate-900">{formatCurrency(taxAmount)}</span>
            </div>

            {walletDeduction > 0 ? (
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-slate-500">Wallet applied</span>
                <span className="font-semibold text-emerald-600">- {formatCurrency(walletDeduction)}</span>
              </div>
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
        </div>

        <div className="px-4 pb-4 sm:px-5">
          <Button variant="primary" size="lg" className="w-full rounded-md text-sm font-bold shadow-[0_16px_30px_rgba(37,99,235,0.24)]">
            Proceed to Payment
          </Button>
        </div>
      </Card>
    </div>
  )
}