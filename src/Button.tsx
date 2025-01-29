import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", className, children, ...props }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-lg transition-all duration-300";
  const variantStyles =
    variant === "primary"
      ? "bg-indigo-500 hover:bg-indigo-600 text-white"
      : "bg-gray-700 hover:bg-gray-600 text-white";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
