import { Link } from 'react-router';

const Header: React.FC = () => {
  return (
    <div className="top-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
