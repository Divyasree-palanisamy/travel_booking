import React, { useState } from 'react';
import DestinationCard from '../../components/DestinationCard/DestinationCard';
import baliImage from '../../assets/images/bali.jpeg'; // ✅ Direct import
import santoriniImage from '../../assets/images/santorini.jpeg'; // ✅ Direct import
import maldivesImage from '../../assets/images/maldives.jpg';
import veniceImage from '../../assets/images/venice.jpeg';
import machuPicchuImage from '../../assets/images/machu-picchu.jpg';
import capeTownImage from '../../assets/images/cape-town.jpg';
import sydneyImage from '../../assets/images/sydney.jpg';
import newYorkImage from '../../assets/images/new-york.jpeg';
import dubaiImage from '../../assets/images/dubai.jpg';
import tokyoImage from '../../assets/images/tokyo.jpg';
import parisImage from '../../assets/images/paris.jpg';
import videoBg from '../../assets/videos/travel-bg.mp4';
import './Destinations.css';

const Destinations = () => {
  const [showAll, setShowAll] = useState(false);

  // Full list of destinations
  const allDestinations = [
    {
      id: 1,
      title: 'Bali, Indonesia',
      description: 'The island of gods with beautiful beaches and rich culture.',
      price: 1200,
      rating: 4.8,
      image: baliImage,
      popular: true
    },
    {
      id: 2,
      title: 'Santorini, Greece',
      description: 'Whitewashed buildings with blue domes overlooking the Aegean Sea.',
      price: 1500,
      rating: 4.9,
      image: santoriniImage,
      trending: true
    },
    {
      id: 3,
      title: 'Maldives',
      description: 'Paradise on Earth with overwater bungalows and crystal-clear waters.',
      price: 2000,
      rating: 4.9,
      image: maldivesImage,
      popular: true
    },
    {
      id: 4,
      title: 'Dubai, UAE',
      description: 'A modern oasis where luxury meets innovation.',
      price: 1800,
      rating: 4.7,
      image: dubaiImage,
      trending: true
    },
    {
      id: 5,
      title: 'Tokyo, Japan',
      description: 'Where tradition seamlessly blends with cutting-edge technology.',
      price: 1600,
      rating: 4.8,
      image: tokyoImage,
      popular: true
    },
    {
      id: 6,
      title: 'Paris, France',
      description: 'The city of love, lights, and timeless romance.',
      price: 1400,
      rating: 4.7,
      image: parisImage,
      trending: true
    },
    // Add more destinations here - you'll need to add corresponding images
    // Suggested additional destinations (you'll need to add these images):

    {
      id: 7,
      title: 'Venice, Italy',
      description: 'The floating city of canals and romance.',
      price: 1300,
      rating: 4.6,
      image: veniceImage,
      popular: true
    },
    {
      id: 8,
      title: 'Machu Picchu, Peru',
      description: 'Ancient Incan citadel in the Andes Mountains.',
      price: 1700,
      rating: 4.9,
      image: machuPicchuImage,
      trending: true
    },
    {
      id: 9,
      title: 'Cape Town, South Africa',
      description: 'Where mountains meet the ocean.',
      price: 1200,
      rating: 4.7,
      image: capeTownImage,
      popular: true
    },
    {
      id: 10,
      title: 'Sydney, Australia',
      description: 'Iconic harbor city with stunning beaches.',
      price: 1900,
      rating: 4.8,
      image: sydneyImage,
      trending: true
    },
    {
      id: 11,
      title: 'New York City, USA',
      description: 'The city that never sleeps.',
      price: 1600,
      rating: 4.6,
      image: newYorkImage,
      trending: true
    },
    {
      id: 12,
      title: 'Great Wall of China, China',
      description: 'Walk along one of the world\'s most impressive architectural wonders.',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d'
    }
  ];

  // Display only first 3 destinations initially
  const displayedDestinations = showAll ? allDestinations : allDestinations.slice(0, 3);

  return (
    <section className="destinations">
      <video src={videoBg} autoPlay loop muted className="video-bg" />
      <div className="overlay"></div>
      <div className="destinations-content">
        <div className="destinations-header">
          <h1>Explore Our <span>Destinations</span></h1>
          <p>Discover the world's most breathtaking places with our curated selection</p>
        </div>
        <div className="destinations-grid">
          {displayedDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
        <div className="view-more-container">
          <button
            className="view-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'View All Destinations'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;