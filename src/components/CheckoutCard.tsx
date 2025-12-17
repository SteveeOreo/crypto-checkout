import type { ReactNode } from "react";

type CheckoutCardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function CheckoutCard({
  title,
  subtitle,
  children,
}: CheckoutCardProps) {
  return (
    <div className="relative w-full max-w-[640px] min-h-[500px] md:min-h-[640px] bg-white text-slate-900 border-2 rounded-[20px] md:rounded-[30px] p-6 md:p-8 lg:p-10 shadow-xl border-[#CCF6E5] flex flex-col">
      {(title || subtitle) && (
        <div className="space-y-1 mb-6 md:mb-8">
          {title && (
            <h1 className="text-xl font-semibold tracking-tight text-center">{title}</h1>
          )}
          {subtitle && <p className="text-sm text-slate-500 text-center">{subtitle}</p>}
        </div>
      )}

      {/* Divider */}
      {(title || subtitle) && <div className="border-t border-[#CCF6E5] mb-6 md:mb-8" />}

      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}