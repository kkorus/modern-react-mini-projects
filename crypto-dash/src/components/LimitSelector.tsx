import React from 'react';

interface LimitSelectorProps {
  limit: number;
  onLimitChange: (limit: number) => void;
}

const LimitSelector: React.FC<LimitSelectorProps> = ({
  limit,
  onLimitChange,
}) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Limit:</label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default LimitSelector;
