import React from 'react';

interface TextInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  label,
  name,
  placeholder,
  value,
  required = false,
  onChange,
}: TextInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      <input
        id={name}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
      />
    </div>
  );
}

export default TextInput;
