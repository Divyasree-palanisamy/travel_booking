import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DestinationCard from '../../components/DestinationCard/DestinationCard'; // Ensure this path is correct
import './SearchResults.css'; // This is where the new styles go

// Import ALL necessary image assets directly for the SearchResults page
// IMPORTANT: Double-check that these filenames and extensions EXACTLY match your assets folder (e.g., .jpg vs .jpeg)
import baliImg from '../../assets/images/bali.jpeg';
import parisImg from '../../assets/images/paris.jpg';
import tokyoImg from '../../assets/images/tokyo.jpg';
import newyorkImg from '../../assets/images/new-york.jpeg';
import summerDealImg from '../../assets/images/summer-deal.jpeg';
import earlyBirdDealImg from '../../assets/images/early-bird-deal.jpeg';
import familyDealImg from '../../assets/images/family-deal.jpeg';
import machuPicchuImg from '../../assets/images/machu-picchu.jpg';
import greatWallImg from '../../assets/images/great-wall.jpeg'; // Assuming this file exists
import santoriniImg from '../../assets/images/santorini.jpeg';

const SearchResults = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useState({});
    const [filteredDestinations, setFilteredDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy data - now using imported image variables
    const allDestinations = [
        { id: 1, name: 'Bali, Indonesia', description: 'The island of gods with beautiful beaches and rich culture.', price: 1200, rating: 4.8, image: baliImg },
        { id: 2, name: 'Paris, France', description: 'The city of love, lights, and timeless romance.', price: 1400, rating: 4.7, image: parisImg },
        { id: 3, name: 'Tokyo, Japan', description: 'Where tradition seamlessly blends with cutting-edge technology.', price: 1600, rating: 4.8, image: tokyoImg },
        { id: 4, name: 'New York, USA', description: 'The city that never sleeps, with iconic landmarks.', price: 1600, rating: 4.6, image: newyorkImg },
        { id: 5, name: 'Summer Special', description: 'Grab hot deals for your summer vacation.', price: 999, rating: 4.5, image: summerDealImg },
        { id: 6, name: 'Early Bird', description: 'Book early and save big on your next adventure.', price: 799, rating: 4.3, image: earlyBirdDealImg },
        { id: 7, name: 'Weekend Getaway', description: 'Perfect short escapes for a refreshing break.', price: 599, rating: 4.2, image: familyDealImg },
        { id: 8, name: 'Machu Picchu, Peru', description: 'Ancient Inca citadel in the Andes.', price: 800, rating: 4.9, image: machuPicchuImg },
        { id: 9, name: 'Great Wall of China, China', description: 'Iconic historical fortification.', price: 600, rating: 4.7, image: greatWallImg },
        { id: 10, name: 'Santorini, Greece', description: 'Whitewashed buildings with blue domes overlooking the Aegean Sea.', price: 1100, rating: 4.6, image: santoriniImg },
    ];

    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(location.search);
        const paramsObject = {};
        for (const [key, value] of params.entries()) {
            paramsObject[key] = value;
        }
        setSearchParams(paramsObject);

        const destinationQuery = paramsObject.destination ? paramsObject.destination.toLowerCase() : '';

        let results = [];
        if (destinationQuery) {
            // Filter destinations based on the destination query
            results = allDestinations.filter(dest =>
                dest.name.toLowerCase().includes(destinationQuery)
            );
        }
        // If no destination query, or no matching destination, show all destinations
        // This is a common UX pattern for search results: if no query, show all options
        // If you strictly want to show nothing if no query, keep `setFilteredDestinations([]);`
        if (!destinationQuery) {
            results = allDestinations; // Show all if no specific query
        }

        setFilteredDestinations(results);

        // Simulate a small loading delay for better UX
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // 300ms delay

        return () => clearTimeout(timer); // Cleanup timeout
    }, [location.search]); // Rerun effect when the search query changes

    if (loading) {
        return (
            <div className="search-results-page">
                <div className="search-results-container loading-state">
                    <p>Loading search results...</p>
                    {/* You could add a spinner here */}
                </div>
            </div>
        );
    }

    return (
        <div className="search-results-page">
            <div className="search-results-container">
                <h2>Search Results</h2>
                <div className="search-parameters">
                    <h3>Search Parameters:</h3>
                    {Object.keys(searchParams).length > 0 ? (
                        <ul>
                            {Object.entries(searchParams).map(([key, value]) => (
                                <li key={key}><strong>{key}:</strong> {value}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No search parameters provided. Try searching from the homepage!</p>
                    )}
                </div>

                <div className="results-list">
                    <h3>Matching Destinations:</h3>
                    {filteredDestinations.length > 0 ? (
                        <div className="destinations-grid"> {/* Reuse grid style from Home/general CSS */}
                            {filteredDestinations.map(destination => (
                                <DestinationCard key={destination.id} destination={destination} />
                            ))}
                        </div>
                    ) : (
                        <p>No destinations found matching your search criteria. Please try a different search!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
