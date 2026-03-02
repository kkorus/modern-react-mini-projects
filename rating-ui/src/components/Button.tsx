import React from 'react';

function Button({
  children,
  onClick,
  isDisabled,
  className,
}: {
  children: React.ReactNode;
  onClick: (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
  className: string;
}) {
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
