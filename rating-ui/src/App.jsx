import Rating from './components/Rating';

const App = () => {
  return (
    <div>
      <Rating
        title="Rate Your Experience"
        color="red"
        feedback={['Poor', 'Fair', 'Good', 'Very Good', 'Excellent']}
      />
    </div>
  );
};

export default App;
