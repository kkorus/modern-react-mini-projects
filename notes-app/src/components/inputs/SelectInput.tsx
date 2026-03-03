import React from 'react';

interface SelectInputProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  required?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectInput({
  label,
  name,
  options,
  value,
  required = false,
  placeholder,
  onChange,
}: SelectInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
      >
        {placeholder && (
          <option value="">{placeholder}</option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
