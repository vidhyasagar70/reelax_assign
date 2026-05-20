const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export function formatCurrency(value) {
  return currencyFormatter.format(value)
}

export function roundToPaise(value) {
  return Math.round(value * 100) / 100
}