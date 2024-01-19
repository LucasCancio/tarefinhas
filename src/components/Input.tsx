import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      placeholder="Adicione uma nova tarefa"
      className={twMerge(
        "rounded-md p-2 px-4 focus:border-purple-dark h-14 bg-gray-500 shadow-md",
        className
      )}
    />
  );
}
