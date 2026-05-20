import { BillingForm } from '../components/checkout/BillingForm.jsx'
import { OrderSummary } from '../components/checkout/OrderSummary.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { coupons, cityOptions, countryOptions, stateOptions } from '../data/checkoutData.js'
import { useCheckoutState } from '../hooks/useCheckoutState.js'
import { AppLayout } from '../layouts/AppLayout.jsx'
import { PageContainer } from '../layouts/PageContainer.jsx'

export default function CheckoutPage() {
  const checkout = useCheckoutState()

  return (
    <AppLayout>
      <Navbar
        mobileMenuOpen={checkout.mobileMenuOpen}
        onToggleMobileMenu={() => checkout.setMobileMenuOpen((currentValue) => !currentValue)}
        onSearchChange={checkout.setSearchQuery}
        searchQuery={checkout.searchQuery}
      />

      <PageContainer>
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(350px,0.92fr)] lg:items-start xl:gap-6">
          <BillingForm
            values={checkout.billingValues}
            errors={checkout.billingErrors}
            onBillingBlur={checkout.handleBillingBlur}
            onCancel={checkout.handleResetBilling}
            onChange={checkout.updateBillingValue}
            onSubmit={checkout.handleSaveBilling}
            saveState={checkout.saveState}
            stateOptions={stateOptions}
            cityOptions={cityOptions}
            countryOptions={countryOptions}
          />

          <OrderSummary
            selectedPlan={checkout.selectedPlan}
            selectedCoupon={checkout.selectedCoupon}
            appliedCouponCode={checkout.appliedCouponCode}
            couponInput={checkout.couponInput}
            couponFeedback={checkout.couponFeedback}
            couponOpen={checkout.couponOpen}
            coupons={coupons}
            walletApplied={checkout.walletApplied}
            subtotal={checkout.subtotal}
            couponDiscount={checkout.couponDiscount}
            taxAmount={checkout.taxAmount}
            walletDeduction={checkout.walletDeduction}
            totalDueToday={checkout.totalDueToday}
            onApplyCoupon={checkout.handleApplyCoupon}
            onCouponInputChange={checkout.setCouponInput}
            onSelectCoupon={checkout.handleSelectCoupon}
            onToggleCouponOpen={checkout.toggleCouponOpen}
            onToggleWalletApplied={checkout.toggleWalletApplied}
            onUpgradePlan={checkout.handleUpgradePlan}
          />
        </div>
      </PageContainer>
    </AppLayout>
  )
}