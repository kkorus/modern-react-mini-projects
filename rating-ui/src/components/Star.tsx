import React from 'react';

interface StarProps {
  star: number;
  rating: number;
  hover: number | null;
  color: string;
  onSelect: (_value: number) => void;
  onHover: (_value: number) => void;
  onHoverEnd: () => void;
}

const Star: React.FC<StarProps> = ({
  star,
  rating,
  hover,
  color,
  onSelect,
  onHover,
  onHoverEnd,
}) => {
  const isActive = star <= (hover ?? rating);

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(star);
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={`Rate ${star} out of 5`}
      style={{ color: isActive ? color : '#ccc' }}
      onClick={() => onSelect(star)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => onHover(star)}
      onMouseLeave={onHoverEnd}
      className={isActive ? 'star active' : 'star'}
    >
      {String.fromCharCode(9733)}
    </span>
  );
};

export default Star;
