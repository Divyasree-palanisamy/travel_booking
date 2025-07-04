import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ destination, style, buttonStyle }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const isSummerSpecial = (destination.title && destination.title.trim().toLowerCase() === 'summer special') ||
      (destination.name && destination.name.trim().toLowerCase() === 'summer special');
    const isEarlyBird = (destination.title && destination.title.trim().toLowerCase() === 'early bird') ||
      (destination.name && destination.name.trim().toLowerCase() === 'early bird');
    const isWeekendGetaway = (destination.title && destination.title.trim().toLowerCase() === 'weekend getaway') ||
      (destination.name && destination.name.trim().toLowerCase() === 'weekend getaway');
    if (isSummerSpecial) {
      navigate('/summer-special');
    } else if (isEarlyBird) {
      navigate('/early-bird');
    } else if (isWeekendGetaway) {
      navigate('/weekend-getaway');
    } else {
      const firstWord = destination.title.split(',')[0].toLowerCase().trim();
      navigate(`/book/${firstWord}`);
    }
  };

  return (
    <div className="destination-card" style={style}>
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
        <button type="button" className="book-now-btn" style={buttonStyle} onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default DestinationCard;