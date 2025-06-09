// src/containers/Home/Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaStar } from 'react-icons/fa';
import './Home.css';
import travelBgVideo from '../../assets/videos/travel-bg.mp4'; // Direct import for video

// Make sure these paths are correct for your image assets
import baliImg from '../../assets/images/bali.jpeg';
import parisImg from '../../assets/images/paris.jpg';
import tokyoImg from '../../assets/images/tokyo.jpg';
import newyorkImg from '../../assets/images/new-york.jpeg';

import summerDealImg from '../../assets/images/summer-deal.jpeg';
import earlyBirdDealImg from '../../assets/images/early-bird-deal.jpeg';
import familyDealImg from '../../assets/images/family-deal.jpeg';

import machuPicchuImg from '../../assets/images/machu-picchu.jpg';
import dubaiImg from '../../assets/images/dubai.jpg'; // Re-using for Great Wall example
import santoriniImg from '../../assets/images/santorini.jpeg';

import DestinationCard from '../../components/DestinationCard/DestinationCard'; // Ensure this path is correct

const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Combined destinations and deals data
    const allDestinations = [
        {
            id: 1,
            title: 'Bali, Indonesia',
            description: 'The island of gods with beautiful beaches and rich culture.',
            price: 1200,
            rating: 4.8,
            image: baliImg,
            category: 'Popular'
        },
        {
            id: 2,
            title: 'Paris, France',
            description: 'The city of love, lights, and timeless romance.',
            price: 1400,
            rating: 4.7,
            image: parisImg,
            category: 'Popular'
        },
        {
            id: 3,
            title: 'Tokyo, Japan',
            description: 'Where tradition seamlessly blends with cutting-edge technology.',
            price: 1600,
            rating: 4.8,
            image: tokyoImg,
            category: 'Popular'
        },
        {
            id: 4,
            title: 'New York City, USA',
            description: 'The city that never sleeps, with iconic landmarks.',
            price: 1600,
            rating: 4.6,
            image: newyorkImg,
            category: 'Popular'
        },
        {
            id: 5,
            title: 'Summer Special',
            description: 'Grab hot deals for your summer vacation.',
            price: 999,
            rating: 4.5,
            image: summerDealImg,
            category: 'Deals'
        },
        {
            id: 6,
            title: 'Early Bird',
            description: 'Book early and save big on your next adventure.',
            price: 799,
            rating: 4.3,
            image: earlyBirdDealImg,
            category: 'Deals'
        },
        {
            id: 7,
            title: 'Weekend Getaway',
            description: 'Perfect short escapes for a refreshing break.',
            price: 599,
            rating: 4.2,
            image: familyDealImg,
            category: 'Deals'
        },
        {
            id: 8,
            title: 'Great Wall of China',
            description: 'Experience the ancient wonder of the world with breathtaking views.',
            price: 1800,
            rating: 4.9,
            image: dubaiImg, // Using dubai image as placeholder
            category: 'Explore'
        },
        {
            id: 9,
            title: 'Machu Picchu',
            description: 'Discover the mysterious Incan citadel in the Andes Mountains.',
            price: 1500,
            rating: 4.7,
            image: machuPicchuImg,
            category: 'Explore'
        },
        {
            id: 10,
            title: 'Santorini, Greece',
            description: 'Stunning sunsets and white-washed buildings in the Aegean Sea.',
            price: 1700,
            rating: 4.8,
            image: santoriniImg,
            category: 'Explore'
        }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const results = allDestinations.filter(destination =>
                destination.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                destination.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
            setShowResults(true);
        }
    };

    const handleBooking = (destinationId) => {
        console.log('Booking clicked for destination ID:', destinationId);
        const destination = allDestinations.find(dest => dest.id === destinationId);
        console.log('Destination details:', destination);
        // Get only the part before the comma
        const destinationName = destination.title.split(',')[0].trim();
        const encodedTitle = encodeURIComponent(destinationName);
        navigate(`/book/${encodedTitle}`);
    };

    return (
        <div className="home">
            <div className="hero-section">
                <video src={travelBgVideo} autoPlay loop muted className="hero-video" />
                <div className="hero-content">
                    <h1>Discover Your <span>Perfect Getaway</span></h1>
                    <p>Book unforgettable experiences at the best prices</p>
                </div>
            </div>

            <div className="search-bar-container">
                <form className="search-form" onSubmit={handleSearch}>
                    <div className="search-input">
                        <input
                            type="text"
                            placeholder="Enter Destination"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit">
                            <FaSearch /> Search
                        </button>
                    </div>
                </form>
            </div>

            {showResults && searchResults.length > 0 ? (
                <div className="search-results">
                    <h2>Search Results</h2>
                    <div className="destination-grid">
                        {searchResults.map(destination => (
                            <div key={destination.id} className="destination-card">
                                <img src={destination.image} alt={destination.title} />
                                <div className="card-content">
                                    <h3>{destination.title}</h3>
                                    <div className="price">${destination.price}</div>
                                    <div className="rating">
                                        <FaStar /> {destination.rating}
                                    </div>
                                    <p>{destination.description}</p>
                                    <button
                                        className="book-now-btn"
                                        onClick={() => handleBooking(destination.id)}
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : showResults ? (
                <div className="no-results">
                    <h2>No destinations found</h2>
                    <p>Try searching with different keywords</p>
                </div>
            ) : (
                <>
                    <section className="popular-destinations">
                        <h2>Popular Destinations</h2>
                        <div className="destination-grid">
                            {allDestinations
                                .filter(dest => dest.category === 'Popular')
                                .map(destination => (
                                    <div key={destination.id} className="destination-card">
                                        <img src={destination.image} alt={destination.title} />
                                        <div className="card-content">
                                            <h3>{destination.title}</h3>
                                            <div className="price">${destination.price}</div>
                                            <div className="rating">
                                                <FaStar /> {destination.rating}
                                            </div>
                                            <p>{destination.description}</p>
                                            <button
                                                className="book-now-btn"
                                                onClick={() => handleBooking(destination.id)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>

                    <section className="special-deals">
                        <h2>Special Deals</h2>
                        <div className="destination-grid">
                            {allDestinations
                                .filter(dest => dest.category === 'Deals')
                                .map(destination => (
                                    <div key={destination.id} className="destination-card">
                                        <img src={destination.image} alt={destination.title} />
                                        <div className="card-content">
                                            <h3>{destination.title}</h3>
                                            <div className="price">${destination.price}</div>
                                            <div className="rating">
                                                <FaStar /> {destination.rating}
                                            </div>
                                            <p>{destination.description}</p>
                                            <button
                                                className="book-now-btn"
                                                onClick={() => handleBooking(destination.id)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>

                    <section className="explore-more">
                        <h2>Explore More Places</h2>
                        <div className="destination-grid">
                            {allDestinations
                                .filter(dest => dest.category === 'Explore')
                                .map(destination => (
                                    <div key={destination.id} className="destination-card">
                                        <img src={destination.image} alt={destination.title} />
                                        <div className="card-content">
                                            <h3>{destination.title}</h3>
                                            <div className="price">${destination.price}</div>
                                            <div className="rating">
                                                <FaStar /> {destination.rating}
                                            </div>
                                            <p>{destination.description}</p>
                                            <button
                                                className="book-now-btn"
                                                onClick={() => handleBooking(destination.id)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default Home;