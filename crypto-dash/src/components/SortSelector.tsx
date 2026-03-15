interface SortSelectorProps {
  sortBy: 'market_cap_desc' | 'price' | 'name';
  onSortChange: (sortBy: 'market_cap_desc' | 'price' | 'name') => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) =>
          onSortChange(e.target.value as 'market_cap_desc' | 'price' | 'name')
        }
      >
        <option value="market_cap_desc">Market Cap (Descending)</option>
        <option value="price">Price (Ascending)</option>
        <option value="name">Name (Ascending)</option>
      </select>
    </div>
  );
};

export default SortSelector;
