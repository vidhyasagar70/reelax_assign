import { useState } from 'react'
import { coupons, initialBillingValues, plans, walletBalance } from '../data/checkoutData.js'
import { roundToPaise } from '../utils/currency.js'
import { validateCheckoutForm } from '../utils/validation.js'

const initialTouchedState = {}

function getCouponDiscount(plan, couponCode) {
  if (couponCode === 'WELCOME20') {
    return roundToPaise(plan.monthlyPrice * 0.2)
  }

  if (couponCode === 'ANNUAL50') {
    return roundToPaise(plan.annualPrice * 0.5)
  }

  return 0
}

function normalizeCode(value) {
  return value.trim().toUpperCase()
}

export function useCheckoutState() {
  const [billingValues, setBillingValues] = useState(initialBillingValues)
  const [billingErrors, setBillingErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState(initialTouchedState)
  const [selectedPlanId, setSelectedPlanId] = useState('startup')
  const [selectedCouponCode, setSelectedCouponCode] = useState('WELCOME20')
  const [couponInput, setCouponInput] = useState('')
  const [appliedCouponCode, setAppliedCouponCode] = useState('')
  const [couponFeedback, setCouponFeedback] = useState('')
  const [walletApplied, setWalletApplied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [couponOpen, setCouponOpen] = useState(true)
  const [saveState, setSaveState] = useState('idle')
  const [searchQuery, setSearchQuery] = useState('')

  const selectedPlan = plans.find((plan) => plan.id === selectedPlanId) ?? plans[0]
  const selectedCoupon = coupons.find((coupon) => coupon.code === selectedCouponCode) ?? coupons[0]
  const appliedCoupon = coupons.find((coupon) => coupon.code === appliedCouponCode) ?? null

  const subtotal = selectedPlan.annualPrice
  const couponDiscount = appliedCoupon ? getCouponDiscount(selectedPlan, appliedCoupon.code) : 0
  const taxableAmount = roundToPaise(Math.max(0, subtotal - couponDiscount))
  const taxAmount = roundToPaise(taxableAmount * selectedPlan.taxRate)
  const walletDeduction = walletApplied ? Math.min(walletBalance, taxableAmount + taxAmount) : 0
  const totalDueToday = roundToPaise(taxableAmount + taxAmount - walletDeduction)

  function updateBillingValue(field, value) {
    setBillingValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }))

    setSaveState('idle')

    if (billingErrors[field]) {
      const nextErrors = validateCheckoutForm({
        ...billingValues,
        [field]: value,
      })

      setBillingErrors(nextErrors)
    }
  }

  function markFieldTouched(field) {
    setTouchedFields((currentTouched) => ({
      ...currentTouched,
      [field]: true,
    }))
  }

  function handleBillingBlur(field) {
    markFieldTouched(field)
    setBillingErrors(validateCheckoutForm(billingValues))
  }

  function handleSaveBilling(event) {
    event.preventDefault()

    const nextErrors = validateCheckoutForm(billingValues)
    setBillingErrors(nextErrors)
    setTouchedFields({
      companyName: true,
      email: true,
      gstNumber: true,
      panNumber: true,
      premise: true,
      street: true,
      state: true,
      city: true,
      country: true,
      pinCode: true,
    })

    if (Object.keys(nextErrors).length === 0) {
      setSaveState('saved')
    }
  }

  function handleResetBilling() {
    setBillingValues(initialBillingValues)
    setBillingErrors({})
    setTouchedFields(initialTouchedState)
    setSaveState('idle')
    setCouponFeedback('')
  }

  function handleSelectPlan(planId) {
    setSelectedPlanId(planId)
    setWalletApplied(false)
  }

  function handleUpgradePlan() {
    handleSelectPlan('growth')
  }

  function handleSelectCoupon(code) {
    setSelectedCouponCode(code)
    setCouponInput(code)
    setCouponFeedback('')
  }

  function handleApplyCoupon() {
    const candidateCode = normalizeCode(couponInput || selectedCouponCode)
    const matchedCoupon = coupons.find((coupon) => coupon.code === candidateCode)

    if (!matchedCoupon) {
      setCouponFeedback('Enter a valid coupon code.')
      setAppliedCouponCode('')
      return
    }

    setSelectedCouponCode(matchedCoupon.code)
    setCouponInput(matchedCoupon.code)
    setAppliedCouponCode(matchedCoupon.code)
    setCouponFeedback(`${matchedCoupon.code} applied successfully.`)
  }

  function toggleWalletApplied() {
    setWalletApplied((currentValue) => !currentValue)
  }

  function toggleCouponOpen() {
    setCouponOpen((currentValue) => !currentValue)
  }

  return {
    billingValues,
    billingErrors,
    touchedFields,
    selectedPlan,
    selectedCoupon,
    appliedCoupon,
    selectedPlanId,
    selectedCouponCode,
    couponInput,
    couponFeedback,
    walletApplied,
    mobileMenuOpen,
    couponOpen,
    saveState,
    searchQuery,
    subtotal,
    couponDiscount,
    taxableAmount,
    taxAmount,
    walletDeduction,
    totalDueToday,
    walletBalance,
    handleBillingBlur,
    handleApplyCoupon,
    handleResetBilling,
    handleSaveBilling,
    handleSelectCoupon,
    handleSelectPlan,
    handleUpgradePlan,
    markFieldTouched,
    setCouponInput,
    setMobileMenuOpen,
    setSearchQuery,
    toggleCouponOpen,
    toggleWalletApplied,
    updateBillingValue,
  }
}