import { useState } from "react";
import Button from "../components/Button";
import CheckoutCard from "../components/CheckoutCard";
import { ArrowLeftIcon, CopyIcon, InfoIcon } from "../components/icons";

type CheckoutProps = { onSuccess: () => void };

export default function Checkout({ onSuccess }: CheckoutProps) {
  const [loading, setLoading] = useState(false);
  const network = "ETH";
  const amount = "100 ETH";
  const address = "4LiV4YjbsxL6739MKghUd";

  const copy = (value: string) =>
    navigator.clipboard?.writeText(value).catch(() => {});

  const handleConfirmSent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-8">
      <CheckoutCard>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            aria-label="Back" 
            className="text-slate-700 hover:text-slate-900 transition-colors flex-shrink-0"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h2 className="text-base md:text-lg font-medium text-[#013941] text-center flex-1 px-4">
            Send ETH to the address below
          </h2>
          <span className="w-6 h-6 flex-shrink-0" />
        </div>

        {/* Address pill */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2.5 bg-[#CCF6E5] text-[#013941] px-5 py-2.5 rounded-full border border-[#CCF6E5]">
            <span className="font-medium text-sm md:text-base">{address}</span>
            <button
              aria-label="Copy address"
              onClick={() => copy(address)}
              className="text-[#013941]/80 hover:text-[#013941] transition-colors"
            >
              <CopyIcon className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Summary card */}
        <div className="bg-[#F7F7F7] rounded-lg p-5 mb-6 text-sm space-y-4 border border-[#E5E5E5]">
          <div className="flex justify-between items-center">
            <span className="text-slate-600">Amount to send</span>
            <div className="flex items-center gap-2">
              <span className=" text-slate-900">{amount}</span>
              <button
                aria-label="Copy amount"
                onClick={() => copy(amount)}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                <CopyIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Network</span>
            <span className=" text-slate-900">{network}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Wallet</span>
            <span className=" text-slate-900">Other</span>
          </div>
        </div>

        {/* Info note */}
        <div className="flex items-start gap-3 text-slate-600 text-sm mb-8">
          <InfoIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Only send {"{USDT}"} to this address. Ensure the sender is on the {"{CELO}"} network otherwise you might lose your deposit
          </p>
        </div>

        {/* Action */}
        <Button
          text="I have sent it"
          loading={loading}
          disabled={loading}
          onClick={handleConfirmSent}
          className="bg-[#013941] w-full h-[60px] rounded-[30px] text-white flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed font-instrument text-base font-medium hover:bg-[#014a54] transition-colors mt-auto"
        />
      </CheckoutCard>
    </div>
  );
}