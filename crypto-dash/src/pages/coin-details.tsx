import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const API_URL = import.meta.env.VITE_COIN_API_URL;

interface CoinDetails {
  id: string;
  name: string;
  symbol: string;
  image: { large: string };
  description?: { en?: string };
  market_cap_rank?: number | null;
  current_price?: number;
  market_data?: { market_cap?: { usd?: number } };
}

const CoinDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState<CoinDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
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
        {coin ? `${coin.name} (${coin.symbol})` : 'Loading...'}
      </h1>

      {loading && <p>Loading...</p>}
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
        </>
      )}
    </div>
  );
};

export default CoinDetailsPage;
