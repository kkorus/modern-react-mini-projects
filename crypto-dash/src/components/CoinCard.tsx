import React from 'react';
import type { Coin } from '../App';
import { Link } from 'react-router';

interface CoinCardProps {
  coin: Coin;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div key={coin.id} className="coin-card">
        <div className="coin-header">
          <img src={coin.image} alt={coin.name} className="coin-image" />
          <div>
            <h2>{coin.name}</h2>
            <p className="symbol">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <p>
          <span className="coin-label">Price:</span>{' '}
          {coin.current_price.toLocaleString(undefined, {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <p
          className={
            coin.price_change_percentage_24h != null
              ? coin.price_change_percentage_24h >= 0
                ? 'positive'
                : 'negative'
              : ''
          }
          title="24h price change"
          aria-label={
            coin.price_change_percentage_24h != null
              ? `24h price change: ${coin.price_change_percentage_24h >= 0 ? '+' : ''}${coin.price_change_percentage_24h.toFixed(2)}%`
              : '24h price change: N/A'
          }
        >
          <span className="coin-label">24h Change:</span>{' '}
          {coin.price_change_percentage_24h != null ? (
            <>
              {coin.price_change_percentage_24h >= 0 ? '+' : ''}
              {coin.price_change_percentage_24h.toFixed(2)}%
            </>
          ) : (
            'N/A'
          )}
        </p>
        <p>
          <span className="coin-label">Market Cap:</span>{' '}
          {coin.market_cap.toLocaleString(undefined, {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
