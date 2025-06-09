import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import travelBgVideo from '../assets/videos/travel-bg.mp4';
// Make sure this path is correct for your DestinationCard component
import DestinationCard from './DestinationCard/DestinationCard';

// Import all necessary image assets
// IMPORTANT: Double-check that these filenames and extensions EXACTLY match your assets folder (e.g., .jpg vs .jpeg)
import baliImg from '../assets/images/bali.jpeg';
import parisImg from '../assets/images/paris.jpg';
import tokyoImg from '../assets/images/tokyo.jpg';
import newyorkImg from '../assets/images/new-york.jpeg';

import summerDealImg from '../assets/images/summer-deal.jpeg';
import earlyBirdDealImg from '../assets/images/early-bird-deal.jpeg';
import familyDealImg from '../assets/images/family-deal.jpeg'; // Assuming this image exists for a "Weekend Getaway" deal

// Images for the "Explore More Places" section
import machuPicchuImg from '../assets/images/machu-picchu.jpg'; // Verify .jpg or .jpeg
import dubaiImg from '../assets/images/dubai.jpg';               // Verify .jpg or .jpeg (this was used in a previous iteration of featuredDestinations, now used in 'places')
import santoriniImg from '../assets/images/santorini.jpeg';     // Verify .jpeg or .jpg

const Home = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Unified data for all cards
    const allDestinations = [
        { id: 1, title: 'Bali, Indonesia', name: 'Bali, Indonesia', image: baliImg, description: 'The island of gods with beautiful beaches and rich culture.', price: 1200, rating: 4.8 },
        { id: 2, title: 'Paris, France', name: 'Paris, France', image: parisImg, description: 'The city of love, lights, and timeless romance.', price: 1400, rating: 4.7 },
        { id: 3, title: 'Tokyo, Japan', name: 'Tokyo, Japan', image: tokyoImg, description: 'Where tradition seamlessly blends with cutting-edge technology.', price: 1600, rating: 4.8 },
        { id: 4, title: 'New York City, USA', name: 'New York City, USA', image: newyorkImg, description: 'The city that never sleeps, with iconic landmarks.', price: 1600, rating: 4.6 },
        { id: 5, title: 'Summer Special', name: 'Summer Special', image: summerDealImg, description: 'Grab hot deals for your summer vacation.', price: 999, rating: 4.5 },
        { id: 6, title: 'Early Bird', name: 'Early Bird', image: earlyBirdDealImg, description: 'Book early and save big on your next adventure.', price: 799, rating: 4.3 },
        { id: 7, title: 'Weekend Getaway', name: 'Weekend Getaway', image: familyDealImg, description: 'Perfect short escapes for a refreshing break.', price: 599, rating: 4.2 },
        { id: 101, title: 'Machu Picchu, Peru', name: 'Machu Picchu, Peru', image: machuPicchuImg, description: 'Ancient Inca citadel in the Andes.', price: 800, rating: 4.9 },
        { id: 102, title: 'Great Wall of China, China', name: 'Great Wall of China, China', image: dubaiImg, description: 'Iconic historical fortification.', price: 600, rating: 4.7 },
        { id: 103, title: 'Santorini, Greece', name: 'Santorini, Greece', image: santoriniImg, description: 'Whitewashed buildings with blue domes overlooking the Aegean Sea.', price: 1100, rating: 4.6 },
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

    // Book Now handler for all cards
    const handleBookNow = (destination) => {
        const firstWord = destination.title.split(',')[0].toLowerCase().trim();
        navigate(`/book/${firstWord}`);
    };

    return (
        <div className="home-page">
            {/* Hero section with only background and heading */}
            <div className="full-width-container">
                <section className="hero-section">
                    <video src={travelBgVideo} autoPlay loop muted className="hero-video"></video>
                    <div className="hero-content">
                        <h1>Discover Your Perfect Getaway</h1>
                        <p>Book unforgettable experiences at the best prices</p>
                    </div>
                </section>
            </div>

            {/* Enhanced Search Section */}
            <div className="search-section">
                <div className="search-container">
                    <form className="search-form" onSubmit={handleSearch}>
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                placeholder="Where do you want to go?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            <button type="submit" className="search-button">
                                <span className="search-icon">🔍</span>
                                <span className="search-text">Search</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="content-container">
                {showResults ? (
                    searchResults.length > 0 ? (
                        <section className="search-results">
                            <h2>Search Results</h2>
                            <div className="destinations-grid">
                                {searchResults.map(destination => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <div className="no-results">
                            <h2>No destinations found</h2>
                            <p>Try searching with different keywords</p>
                        </div>
                    )
                ) : (
                    <>
                        <section className="popular-destinations">
                            <h2>Popular Destinations</h2>
                            <div className="destinations-grid">
                                {allDestinations.slice(0, 4).map(destination => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                            </div>
                        </section>
                        <section className="special-deals">
                            <h2>Special Deals</h2>
                            <div className="deals-container">
                                {allDestinations.slice(4, 7).map(destination => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                            </div>
                        </section>
                        <section className="explore-places">
                            <h2>Explore More Places</h2>
                            <div className="destinations-grid">
                                {allDestinations.slice(7).map(destination => (
                                    <DestinationCard key={destination.id} destination={destination} />
                                ))}
                            </div>
                        </section>
                        <section className="testimonials">
                            <h2>What Our Travelers Say</h2>
                            <div className="testimonial-cards">
                                <div className="testimonial">
                                    <p>"Best travel experience ever! Everything was perfectly organized."</p>
                                    <p className="author">- Sarah M.</p>
                                </div>
                                <div className="testimonial">
                                    <p>"Amazing deals and excellent customer service. Will book again!"</p>
                                    <p className="author">- John D.</p>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </div>
        </div>
    );
};

export default Home;
