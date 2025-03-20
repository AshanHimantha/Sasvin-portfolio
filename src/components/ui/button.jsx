export function Button({ variant, className, children, ...props }) {
  const baseStyles = "px-4 py-2 text-sm font-medium";
  const variantStyles = variant === "outline" ? "border border-solid" : "";
  
  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}