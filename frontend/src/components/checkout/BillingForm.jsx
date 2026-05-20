import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'
import { InputField } from '../ui/InputField.jsx'
import { SelectField } from '../ui/SelectField.jsx'
import { ArrowLeftIcon } from '../ui/Icons.jsx'

export function BillingForm({
  values,
  errors,
  onBillingBlur,
  onCancel,
  onChange,
  onSubmit,
  saveState,
  stateOptions,
  cityOptions,
  countryOptions,
}) {
  const citySelectOptions = cityOptions[values.state] ?? [{ value: '', label: 'Select city' }]

  return (
    <div>
      <div className="mb-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors duration-200 hover:text-blue-600"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to plans</span>
        </button>
      </div>

      <Card className="px-4 py-5 sm:px-5 sm:py-6">
        <div className="mt-4">
        <h1 className="text-[26px] font-semibold tracking-tight text-slate-900">Review your details</h1>
        <p className="mt-2 text-[15px] font-bold text-slate-700">Billing Information</p>
      </div>

      <form className="mt-5" onSubmit={onSubmit} noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField
            label="Company Name"
            value={values.companyName}
            onChange={(event) => onChange('companyName', event.target.value)}
            onBlur={() => onBillingBlur('companyName')}
            placeholder="Company name"
            error={errors.companyName}
            required
          />
          <InputField
            label="Email"
            value={values.email}
            onChange={(event) => onChange('email', event.target.value)}
            onBlur={() => onBillingBlur('email')}
            placeholder="Email address"
            error={errors.email}
            required
            type="email"
          />
          <InputField
            label="GST Number (Optional)"
            value={values.gstNumber}
            onChange={(event) => onChange('gstNumber', event.target.value.toUpperCase())}
            onBlur={() => onBillingBlur('gstNumber')}
            placeholder="GST Number"
            error={errors.gstNumber}
            className="uppercase"
          />
          <InputField
            label="PAN Number (Optional)"
            value={values.panNumber}
            onChange={(event) => onChange('panNumber', event.target.value.toUpperCase())}
            onBlur={() => onBillingBlur('panNumber')}
            placeholder="PAN Number"
            error={errors.panNumber}
            className="uppercase"
          />
          <InputField
            label="Premise/House no."
            value={values.premise}
            onChange={(event) => onChange('premise', event.target.value)}
            onBlur={() => onBillingBlur('premise')}
            placeholder="Premise/House no."
            error={errors.premise}
            required
          />
          <InputField
            label="Street"
            value={values.street}
            onChange={(event) => onChange('street', event.target.value)}
            onBlur={() => onBillingBlur('street')}
            placeholder="Street"
            error={errors.street}
            required
          />
          <SelectField
            label="State"
            value={values.state}
            onChange={(event) => onChange('state', event.target.value)}
            onBlur={() => onBillingBlur('state')}
            error={errors.state}
            required
          >
            {stateOptions.map((option) => (
              <option key={option.value || option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectField>
          <SelectField
            label="City"
            value={values.city}
            onChange={(event) => onChange('city', event.target.value)}
            onBlur={() => onBillingBlur('city')}
            error={errors.city}
            required
          >
            {citySelectOptions.map((option) => (
              <option key={option.value || option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectField>
          <SelectField
            label="Country"
            value={values.country}
            onChange={(event) => onChange('country', event.target.value)}
            onBlur={() => onBillingBlur('country')}
            error={errors.country}
            required
          >
            {countryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectField>
          <InputField
            label="Pin Code"
            value={values.pinCode}
            onChange={(event) => onChange('pinCode', event.target.value.replace(/\D/g, '').slice(0, 6))}
            onBlur={() => onBillingBlur('pinCode')}
            placeholder="Pincode"
            error={errors.pinCode}
            required
            inputMode="numeric"
          />
        </div>

        <div className="mt-6 flex flex-col items-stretch justify-end gap-3 border-t border-slate-200 pt-5 sm:flex-row">
          <Button variant="secondary" size="md" onClick={onCancel} className="sm:w-28">
            Cancel
          </Button>
          <Button variant="primary" size="md" type="submit" className="sm:w-32">
            {saveState === 'saved' ? 'Saved' : 'Save Details'}
          </Button>
        </div>
      </form>
      </Card>
    </div>
  )
}