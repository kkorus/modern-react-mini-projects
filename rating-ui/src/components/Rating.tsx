import React, { useState } from 'react';
import Star from './Star';
import Modal from './Modal';
import Button from './Button';

interface RatingProps {
  title: string;
  color: string;
  feedback: string[];
}

const Rating: React.FC<RatingProps> = ({
  title = 'Rate Your Experience',
  color = '#ffd700',
  feedback = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
}: {
  title: string;
  color: string;
  feedback: string[];
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleSubmit = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    if (rating > 0) {
      setIsSubmitted(true);
    }
  };

  const closeModal = (): void => {
    setIsSubmitted(false);
    setRating(0);
    setHover(null);
  };

  return (
    <div className="rating-container">
      <h2>{title}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            onSelect={setRating}
            onHover={setHover}
            onHoverEnd={() => setHover(null)}
          />
        ))}
      </div>
      {rating > 0 && (
        <p className="feedback">
          {feedback[rating - 1] ?? ''}
        </p>
      )}

      <Button
        className="submit-btn"
        onClick={handleSubmit}
        isDisabled={rating === 0}
      >
        Submit
      </Button>
      <Modal isOpen={isSubmitted} rating={rating} onClose={closeModal} />
    </div>
  );
};

export default Rating;
