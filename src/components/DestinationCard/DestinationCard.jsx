import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    console.log('Book Now clicked:', destination);
    if (destination.title === 'Summer Special') {
      navigate('/summer-special');
    } else {
      const firstWord = destination.title.split(',')[0].toLowerCase().trim();
      navigate(`/book/${firstWord}`);
    }
  };

  return (
    <div className="destination-card">
      <div className="destination-image">
        <img src={destination.image} alt={destination.title} />
        <div className="destination-price">${destination.price}</div>
      </div>
      <div className="destination-content">
        <h3>{destination.title}</h3>
        <div className="destination-rating">
          <span>★</span>
          {destination.rating}
        </div>
        <p>{destination.description}</p>
        <button type="button" className="book-now-btn" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default DestinationCard;