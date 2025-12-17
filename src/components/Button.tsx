type ButtonProps = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  text,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  const defaultClasses = `w-full py-3 rounded-md font-medium transition ${
    disabled || loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-500"
  } text-white`;

  const appliedClasses = className
    ? `font-medium transition ${className}`
    : defaultClasses;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      className={appliedClasses}
    >
      {loading ? "Processing..." : text}
    </button>
  );
}
