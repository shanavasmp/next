import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;