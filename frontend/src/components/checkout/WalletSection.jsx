import { walletBalance } from '../../data/checkoutData.js'
import { Button } from '../ui/Button.jsx'
import { Card } from '../ui/Card.jsx'
import { WalletIcon } from '../ui/Icons.jsx'

export function WalletSection({ applied, onToggle }) {
  return (
    <Card className="px-4 py-4 sm:px-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-blue-50 text-blue-600">
          <WalletIcon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-900">Wallet Balance</p>
          <p className="text-xs text-slate-500">₹{walletBalance.toFixed(2)} available</p>
        </div>
        <Button
          variant={applied ? 'secondary' : 'primary'}
          size="sm"
          onClick={onToggle}
          className="min-w-[72px] px-3"
        >
          {applied ? 'Applied' : 'Apply'}
        </Button>
      </div>

      {applied ? (
        <p className="mt-3 text-xs font-medium text-emerald-600">
          Wallet credit will be deducted from the payable amount.
        </p>
      ) : null}
    </Card>
  )
}