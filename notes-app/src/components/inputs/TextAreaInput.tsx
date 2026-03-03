import React from 'react';

interface TextAreaInputProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextAreaInput({
  label,
  name,
  placeholder,
  value,
  required,
  onChange,
}: TextAreaInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
}

export default TextAreaInput;
