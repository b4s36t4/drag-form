import { useState } from "react";

interface Props {
  placeholder?: string;
  type?: string;
  label?: string;
}
const Input = ({ placeholder, type = "text", label }: Props) => {
  return (
    <div className="relative flex flex-col w-full">
      {label && <label className="text-white mb-1">{label}</label>}
      <input
        placeholder={placeholder}
        type={type}
        className="px-2 py-2 w-full rounded-md outline-none"
      />
    </div>
  );
};

export default Input;
