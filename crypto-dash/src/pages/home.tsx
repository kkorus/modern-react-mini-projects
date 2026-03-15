import type { Coin } from '../App';
import CoinCard from '../components/CoinCard';
import LimitSelector from '../components/LimitSelector';
import FilterInput from '../components/FilterInput';
import SortSelector from '../components/SortSelector';

interface HomeProps {
  coins: Coin[];
  filter: string;
  setFilter: (filter: string) => void;
  limit: number;
  setLimit: (limit: number) => void;
  sortBy: 'market_cap_desc' | 'price' | 'name';
  setSortBy: (sortBy: 'market_cap_desc' | 'price' | 'name') => void;
  loading: boolean;
  error: string | null;
}

const HomePage: React.FC<HomeProps> = ({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase()),
    )
    .slice()
    .sort((a, b) => {
      if (sortBy === 'market_cap_desc') {
        return b.market_cap - a.market_cap;
      } else if (sortBy === 'price') {
        return a.current_price - b.current_price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  return (
    <div>
      <h1>Crypto Dash</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}

      <div className="top-controls">
        <FilterInput
          filter={filter}
          onFilterChange={(filter) => setFilter(filter)}
        />
        <LimitSelector
          limit={limit}
          onLimitChange={(limit) => setLimit(limit)}
        />
        <SortSelector
          sortBy={sortBy}
          onSortChange={(sortBy) => setSortBy(sortBy)}
        />
      </div>

      {!loading && !error && (
        <main className="grid">
          {filteredCoins.length > 0 ? (
            filteredCoins.map((coin) => <CoinCard key={coin.id} coin={coin} />)
          ) : (
            <p>No coins found</p>
          )}
        </main>
      )}
    </div>
  );
};

export default HomePage;
