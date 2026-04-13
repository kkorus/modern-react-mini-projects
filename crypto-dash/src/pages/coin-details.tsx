import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Spinner from '../components/Spinner';

const API_BASE_URL = import.meta.env.VITE_COINGECKO_API_BASE_URL;

interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  description?: { en?: string };
  market_cap_rank?: number | null;
  current_price?: number;
  market_data?: { market_cap?: { usd?: number } };
  links?: { homepage?: string[]; blockchain_links?: string[] };
  categories?: string[];
}

const CoinDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<CoinDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/coins/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'An unknown error occurred',
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCoinDetails();
  }, [id]);

  return (
    <div className="coin-details-container">
      <Link to="/">Back to Home</Link>
      <h1 className="coin-details-title">
        {coin ? `${coin.name} (${coin.symbol.toUpperCase()})` : 'Loading...'}
      </h1>

      {loading && <Spinner color="yellow" />}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <>
          <img
            src={coin?.image?.large}
            alt={coin?.name ?? ''}
            className="coin-details-image"
          />

          <p className="coin-details-description">
            {coin?.description?.en
              ? `${coin.description.en.split('.')[0]}.`
              : 'No description available.'}
          </p>

          <div className="coin-details-info">
            <h3>Rank: #{coin?.market_cap_rank}</h3>
            <h3>
              Current Price: $
              {coin?.current_price != null
                ? coin.current_price.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                  })
                : 'N/A'}
            </h3>
            <h3>
              Market Cap: $
              {coin?.market_data?.market_cap?.usd != null
                ? coin.market_data.market_cap.usd.toLocaleString(undefined, {
                    style: 'currency',
                    currency: 'USD',
                  })
                : 'N/A'}
            </h3>
          </div>
          <div className="coin-details-links">
            {coin?.links?.homepage?.[0] && (
              <p>
                <a
                  href={coin?.links?.homepage?.[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Website
                </a>
              </p>
            )}
            {coin?.links?.blockchain_links?.[0] && (
              <p>
                <a
                  href={coin?.links?.blockchain_links?.[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blockchain Explorer
                </a>
              </p>
            )}
            {(coin?.categories?.length ?? 0) > 0 && (
              <p>
                <span className="coin-label">Categories:</span>
                {coin?.categories?.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </p>
            )}
          </div>
        </>
      )}
      {!loading && !error && !coin && <div>No data found</div>}
    </div>
  );
};

export default CoinDetailsPage;
