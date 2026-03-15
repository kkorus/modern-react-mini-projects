import React from 'react';

interface FilterInputProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <div className="filter">
      <label htmlFor="filter">Filter:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        placeholder="Search by name or symbol..."
        aria-label="Filter coins by name or symbol"
      />
    </div>
  );
};

export default FilterInput;
