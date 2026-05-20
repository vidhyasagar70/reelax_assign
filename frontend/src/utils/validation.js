const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const pinPattern = /^\d{6}$/
const gstPattern = /^[0-9A-Z]{15}$/
const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/

function isEmpty(value) {
  return !value || !value.trim()
}

export function validateCheckoutForm(values) {
  const errors = {}

  if (isEmpty(values.companyName)) {
    errors.companyName = 'Company name is required.'
  }

  if (isEmpty(values.email)) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.state) {
    errors.state = 'State is required.'
  }

  if (!values.city) {
    errors.city = 'City is required.'
  }

  if (!values.country) {
    errors.country = 'Country is required.'
  }

  if (isEmpty(values.premise)) {
    errors.premise = 'Premise/house number is required.'
  }

  if (isEmpty(values.street)) {
    errors.street = 'Street is required.'
  }

  if (isEmpty(values.pinCode)) {
    errors.pinCode = 'PIN code is required.'
  } else if (!pinPattern.test(values.pinCode.trim())) {
    errors.pinCode = 'Enter a valid 6-digit PIN code.'
  }

  if (values.gstNumber && !gstPattern.test(values.gstNumber.trim().toUpperCase())) {
    errors.gstNumber = 'Enter a valid GST number.'
  }

  if (values.panNumber && !panPattern.test(values.panNumber.trim().toUpperCase())) {
    errors.panNumber = 'Enter a valid PAN number.'
  }

  return errors
}