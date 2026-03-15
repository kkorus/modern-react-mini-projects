import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <h1>About Crypto Dash</h1>
      <p>
        Crypto Dash is a simple dashboard for tracking cryptocurrency prices. It
        uses the CoinGecko API to get the latest data on cryptocurrencies.
      </p>
      <p>
        The dashboard displays a list of cryptocurrencies with their current
        prices, 24h price changes, and market caps. It also allows you to sort
        the cryptocurrencies by market cap, price, or name.
      </p>
      <p>The dashboard is built with React and TypeScript.</p>
      <p>The dashboard is hosted on Vercel.</p>
    </div>
  );
};

export default AboutPage;
