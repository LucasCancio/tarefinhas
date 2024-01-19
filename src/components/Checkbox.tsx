import { InputHTMLAttributes } from "react";

export function Checkbox({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className="focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-offset-0 w-4 h-4 text-blue-600 bg-transparent border-2 transition-colors checked:hover:bg-purple checked:bg-purple-dark border-blue  hover:border-blue-dark rounded-full"
    />
  );
}
