import { Link } from 'react-router';

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>
        Go back to the home page
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  link: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    textDecoration: 'underline',
    color: '#58a6ff',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#4090db',
    },
  },
} as const;

export default NotFoundPage;
