import CheckoutCard from "../components/CheckoutCard";
import { CopyIcon } from "../components/icons";
import NovacrustLogo from "../images/Novacrust.png";
import CheckoutIcon from "../images/Checkout.png";

type SuccessProps = { onBack: () => void };

export default function Success({ onBack }: SuccessProps) {
  const txId = "NCI23456789";
  const copy = (value: string) => navigator.clipboard?.writeText(value).catch(() => {});

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8 text-white">
      <CheckoutCard>
        {/* Brand heading icon (PNG) */}
        <div className="flex items-center justify-center h-10 mb-8">
          <img src={NovacrustLogo} alt="NOVACRUST" className="pt-1.5 md:h-8" />
        </div>
        
        <div className="text-center space-y-6 md:space-y-8">
          {/* Success indicator */}
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <img src={CheckoutIcon} alt="Processing" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
          </div>

          {/* Status message */}
          <div className="space-y-2 mb-6 md:mb-8">
            <h1 className="md:text-2xl tracking-tight text-[#000E10]">
              Your transaction is processing.
            </h1>
            <p className="text-[#4F4F4F] text-base md:text-lg">The recipient will receive it shortly.</p>
          </div>

          {/* Transaction ID */}
          <div className="bg-[#F7F7F7] rounded-xl px-5 py-4 text-sm flex items-center justify-between border border-[#E5E5E5] mb-6 md:mb-8">
            <p className="text-[#4F4F4F] font-medium">Transaction ID</p>
            <div className="flex items-center gap-3">
              <span className="text-[#013941] font-medium">{txId}</span>
              <button 
                aria-label="Copy transaction id" 
                onClick={() => copy(txId)} 
                className="border border-[#CCF6E5] rounded-md p-2 text-slate-700 hover:text-slate-900 hover:border-[#013941] transition-colors"
              >
                <CopyIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Go back button */}
          <button 
            onClick={onBack} 
            className="text-base md:text-lg font-medium pt-7 text-[#013941] hover:text-[#014a54] hover:underline transition-colors"
          >
            Go back to home
          </button>
        </div>
      </CheckoutCard>
    </div>
  );
}
