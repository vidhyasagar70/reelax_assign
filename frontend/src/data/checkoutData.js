export const initialBillingValues = {
  companyName: 'abhigyan',
  email: 'abhigyan.pandey@getreelax.com',
  gstNumber: '',
  panNumber: '',
  premise: '',
  street: '',
  state: '',
  city: '',
  country: 'India',
  pinCode: '',
}

export const countries = [{ value: 'India', label: 'India' }]
export const countryOptions = countries

export const stateOptions = [
  { value: '', label: 'Select state' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
]

export const cityOptions = {
  Delhi: [
    { value: '', label: 'Select city' },
    { value: 'New Delhi', label: 'New Delhi' },
    { value: 'Dwarka', label: 'Dwarka' },
    { value: 'Saket', label: 'Saket' },
  ],
  Haryana: [
    { value: '', label: 'Select city' },
    { value: 'Gurugram', label: 'Gurugram' },
    { value: 'Faridabad', label: 'Faridabad' },
    { value: 'Panipat', label: 'Panipat' },
  ],
  Karnataka: [
    { value: '', label: 'Select city' },
    { value: 'Bengaluru', label: 'Bengaluru' },
    { value: 'Mysuru', label: 'Mysuru' },
    { value: 'Mangaluru', label: 'Mangaluru' },
  ],
  Maharashtra: [
    { value: '', label: 'Select city' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Nagpur', label: 'Nagpur' },
  ],
  'Tamil Nadu': [
    { value: '', label: 'Select city' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Coimbatore', label: 'Coimbatore' },
    { value: 'Madurai', label: 'Madurai' },
  ],
}

export const plans = [
  {
    id: 'startup',
    name: 'Startup',
    monthlyPrice: 4999,
    annualPrice: 14999,
    creditsPerMonth: 5000,
    taxRate: 0.072,
    description: 'Includes 5,000 credits/mo.',
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 8999,
    annualPrice: 26999,
    creditsPerMonth: 12000,
    taxRate: 0.072,
    description: 'Built for scaling outreach teams.',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 14999,
    annualPrice: 44999,
    creditsPerMonth: 25000,
    taxRate: 0.072,
    description: 'Advanced collaboration and analytics.',
  },
]

export const coupons = [
  {
    code: 'WELCOME20',
    headline: 'WELCOME20',
    description: '20% off on your first month',
    discountType: 'percent',
    discountValue: 20,
  },
  {
    code: 'ANNUAL50',
    headline: 'ANNUAL50',
    description: '50% off on annual plans',
    discountType: 'percent',
    discountValue: 50,
  },
]

export const walletBalance = 500