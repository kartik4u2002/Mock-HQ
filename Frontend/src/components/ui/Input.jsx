import React from "react";

export default function Input({ label, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        className="rounded-lg p-3 border w-full"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
