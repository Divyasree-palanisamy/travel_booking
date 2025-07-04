import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { FaStar, FaCalendarAlt, FaUser, FaChild, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaInfoCircle } from 'react-icons/fa';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import './Booking.css';

const Booking = () => {
    const { destinationName } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [bookingInfo, setBookingInfo] = useState({
        name: '',
        email: '',
        phone: '',
        adults: 1,
        children: 0,
        checkIn: '',
        checkOut: '',
        specialRequests: ''
    });

    // Expanded dataset for all real destinations (not special deals)
    const destinations = [
        {
            id: 1,
            title: 'Bali, Indonesia',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
            price: 1200,
            rating: 4.8,
            description: 'Experience the perfect blend of pristine beaches, lush rice terraces, and vibrant culture. Discover ancient temples, indulge in world-class surfing, and unwind at luxury beachfront resorts.',
            location: 'Bali, Indonesia',
            duration: '7 days',
            features: [
                { icon: '🏖️', text: 'Private Beach Access' },
                { icon: '🏊', text: 'Infinity Pool' },
                { icon: '🍽️', text: 'Fine Dining' },
                { icon: '🧘', text: 'Spa & Wellness' }
            ],
            highlights: [
                'Visit ancient temples and rice terraces',
                'Experience traditional Balinese dance',
                'Enjoy water sports and diving',
                'Relax at luxury spa resorts'
            ]
        },
        {
            id: 2,
            title: 'Santorini, Greece',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            price: 1500,
            rating: 4.9,
            description: 'Immerse yourself in the magic of whitewashed buildings, blue-domed churches, and stunning sunsets. Explore ancient ruins, enjoy wine tasting, and relax in luxury cave hotels.',
            location: 'Santorini, Greece',
            duration: '5 days',
            features: [
                { icon: '🏖️', text: 'Beach Resorts' },
                { icon: '🌅', text: 'Sunset Views' },
                { icon: '🍷', text: 'Wine Tours' },
                { icon: '🏛️', text: 'Ancient Ruins' }
            ],
            highlights: [
                'Watch the sunset in Oia',
                'Swim at Red Beach',
                'Tour the island by boat',
                'Sample local wines'
            ]
        },
        {
            id: 3,
            title: 'Tokyo, Japan',
            image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
            price: 1600,
            rating: 4.8,
            description: 'Discover a city where ancient traditions meet futuristic innovation. From serene temples to neon-lit streets, experience the perfect blend of old and new Japan.',
            location: 'Tokyo, Japan',
            duration: '6 days',
            features: [
                { icon: '🗾', text: 'Mount Fuji Tour' },
                { icon: '🍣', text: 'Sushi Experience' },
                { icon: '🛍️', text: 'Shopping Districts' },
                { icon: '🌸', text: 'Cherry Blossom Viewing' }
            ],
            highlights: [
                'Visit the historic Asakusa district',
                'Experience the Shibuya Crossing',
                'Enjoy cherry blossoms in spring',
                'Explore Akihabara electronics town'
            ]
        },
        {
            id: 4,
            title: 'Paris, France',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
            price: 1400,
            rating: 4.7,
            description: 'Fall in love with the City of Light. From iconic landmarks to charming cafés, experience world-class art, fashion, and cuisine in this romantic capital.',
            location: 'Paris, France',
            duration: '5 days',
            features: [
                { icon: '🗼', text: 'Eiffel Tower View' },
                { icon: '🎨', text: 'Museum Pass' },
                { icon: '🍷', text: 'Wine Tasting' },
                { icon: '🚢', text: 'River Cruise' }
            ],
            highlights: [
                'Skip-the-line access to major attractions',
                'Guided tour of the Louvre Museum',
                'Evening Seine River cruise',
                'Shopping at Champs-Élysées'
            ]
        },
        {
            id: 5,
            title: 'New York City, USA',
            image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
            price: 1600,
            rating: 4.6,
            description: 'Experience the energy of the city that never sleeps. From iconic skyscrapers to world-class entertainment, discover why NYC is the ultimate urban adventure.',
            location: 'New York City, USA',
            duration: '5 days',
            features: [
                { icon: '🗽', text: 'Statue of Liberty' },
                { icon: '🌆', text: 'Skyline Views' },
                { icon: '🎭', text: 'Broadway Shows' },
                { icon: '🍕', text: 'Famous Pizza' }
            ],
            highlights: [
                'See Times Square at night',
                'Walk through Central Park',
                'Visit world-class museums',
                'Shop on Fifth Avenue'
            ]
        },
        {
            id: 6,
            title: 'Maldives',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            price: 2000,
            rating: 4.9,
            description: 'Paradise on Earth with overwater bungalows and crystal-clear waters.',
            location: 'Maldives',
            duration: '6 days',
            features: [
                { icon: '🏝️', text: 'Overwater Bungalows' },
                { icon: '🐠', text: 'Snorkeling' },
                { icon: '🌅', text: 'Sunset Cruises' },
                { icon: '🍹', text: 'Beach Bars' }
            ],
            highlights: [
                'Relax on white sand beaches',
                'Snorkel in coral reefs',
                'Enjoy luxury resorts',
                'Experience Maldivian culture'
            ]
        },
        {
            id: 7,
            title: 'Dubai, UAE',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            price: 1800,
            rating: 4.7,
            description: 'A modern oasis where luxury meets innovation.',
            location: 'Dubai, UAE',
            duration: '5 days',
            features: [
                { icon: '🏙️', text: 'Skyscrapers' },
                { icon: '🏝️', text: 'Palm Islands' },
                { icon: '🛍️', text: 'Luxury Shopping' },
                { icon: '🏜️', text: 'Desert Safari' }
            ],
            highlights: [
                'Visit Burj Khalifa',
                'Shop at Dubai Mall',
                'Desert safari adventure',
                'Relax at Jumeirah Beach'
            ]
        },
        {
            id: 8,
            title: 'Venice, Italy',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            price: 1300,
            rating: 4.6,
            description: 'The floating city of canals and romance.',
            location: 'Venice, Italy',
            duration: '4 days',
            features: [
                { icon: '🚤', text: 'Gondola Rides' },
                { icon: '🏛️', text: 'Historic Architecture' },
                { icon: '🍝', text: 'Italian Cuisine' },
                { icon: '🎭', text: 'Carnival Masks' }
            ],
            highlights: [
                'Ride a gondola on the Grand Canal',
                "Visit St. Mark's Basilica",
                "Explore Doge's Palace",
                'Enjoy authentic Italian food'
            ]
        },
        {
            id: 9,
            title: 'Machu Picchu, Peru',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            price: 1700,
            rating: 4.9,
            description: 'Ancient Incan citadel in the Andes Mountains.',
            location: 'Machu Picchu, Peru',
            duration: '4 days',
            features: [
                { icon: '⛰️', text: 'Mountain Trekking' },
                { icon: '🏞️', text: 'Scenic Views' },
                { icon: '🏛️', text: 'Historic Ruins' },
                { icon: '🌄', text: 'Sunrise Tour' }
            ],
            highlights: [
                'Guided tour of Machu Picchu',
                'Hiking the Inca Trail',
                'Explore Sacred Valley',
                'Cultural experiences in Cusco'
            ]
        },
        {
            id: 10,
            title: 'Cape Town, South Africa',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            price: 1200,
            rating: 4.7,
            description: 'Where mountains meet the ocean.',
            location: 'Cape Town, South Africa',
            duration: '5 days',
            features: [
                { icon: '⛰️', text: 'Table Mountain' },
                { icon: '🏖️', text: 'Beaches' },
                { icon: '🍷', text: 'Winelands' },
                { icon: '🐧', text: 'Penguin Colony' }
            ],
            highlights: [
                'Cable car up Table Mountain',
                'Tour the Cape Winelands',
                'See penguins at Boulders Beach',
                'Explore the V&A Waterfront'
            ]
        },
        {
            id: 11,
            title: 'Sydney, Australia',
            image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
            price: 1900,
            rating: 4.8,
            description: 'Iconic harbor city with stunning beaches.',
            location: 'Sydney, Australia',
            duration: '6 days',
            features: [
                { icon: '🌉', text: 'Harbour Bridge' },
                { icon: '🎭', text: 'Opera House' },
                { icon: '🏄', text: 'Surf Beaches' },
                { icon: '🌺', text: 'Botanic Gardens' }
            ],
            highlights: [
                'Climb the Sydney Harbour Bridge',
                'Tour the Opera House',
                'Relax at Bondi Beach',
                'Stroll through the Royal Botanic Garden'
            ]
        },
        {
            id: 12,
            title: 'Great Wall of China, China',
            image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d',
            price: 1899,
            rating: 4.9,
            description: 'Walk along one of the world\'s most impressive architectural wonders. Experience the ancient marvel that spans thousands of miles across China\'s northern landscape.',
            location: 'Great Wall of China, China',
            duration: '5 days',
            features: [
                { icon: '🏛️', text: 'Historic Tour' },
                { icon: '⛰️', text: 'Mountain Views' },
                { icon: '📸', text: 'Photo Spots' },
                { icon: '🏃', text: 'Hiking Trails' }
            ],
            highlights: [
                'Guided tour of the Great Wall',
                'Visit the Mutianyu section',
                'Experience local culture',
                'Enjoy panoramic views'
            ]
        }
    ];

    // List of Early Bird destinations (first word, lowercased)
    const earlyBirdNames = ['paris', 'tokyo', 'bali'];
    const isEarlyBird = earlyBirdNames.includes(destinationName.toLowerCase());

    useEffect(() => {
        // Find destination by first word of title
        const foundDestination = destinations.find(dest => {
            const destFirstWord = dest.title.split(',')[0].toLowerCase().trim();
            const searchName = destinationName.toLowerCase().trim();
            return destFirstWord === searchName;
        });

        if (foundDestination) {
            setDestination(foundDestination);
        } else {
            console.error('Destination not found:', destinationName);
            // Optionally redirect to home if destination not found
            // navigate('/');
        }
        setLoading(false);
    }, [destinationName]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const calculateTotal = () => {
        const adultPrice = destination.price * bookingInfo.adults;
        const childPrice = (destination.price * 0.7) * bookingInfo.children;
        return adultPrice + childPrice;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show the CustomAlert modal instead of a toast
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        navigate('/'); // Redirect after closing the modal
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star filled">★</span>);
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half-filled">★</span>);
        }

        // Add empty stars
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star">★</span>);
        }

        return stars;
    };

    if (loading || !destination) {
        return <div className="loading">Loading...</div>;
    }

    // Helper to create a slug from the title
    const slug = destination.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    return (
        <div className="booking-page">
            <div className="booking-container">
                <div className="booking-header">
                    <h2>Book Your Dream Vacation</h2>
                    <p>Complete your booking details below</p>
                    <button
                        type="button"
                        style={{
                            margin: '18px 0 0 0',
                            padding: '8px 18px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, #43c6ac, #191654)',
                            color: '#fff',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
                            transition: 'background 0.2s, transform 0.2s',
                            display: 'inline-block',
                        }}
                        onClick={() => navigate(-1)}
                    >
                        ← Back
                    </button>
                </div>

                <div className="booking-details">
                    <div className="booking-image-container">
                        <img
                            src={destination.image}
                            alt={destination.title}
                            className="booking-image"
                        />
                        <div className="image-overlay">
                            <h4>{destination.title}</h4>
                            <p>{destination.location}</p>
                        </div>
                    </div>

                    <div className="booking-info">
                        <h3>{destination.title}</h3>
                        <div className="booking-description">
                            <p>{destination.description}</p>
                        </div>
                        <div className="price">${destination.price} per person</div>
                        <div className="rating">
                            <div className="stars-container">
                                {renderStars(destination.rating)}
                            </div>
                            <span className="rating-number">{destination.rating}</span>
                        </div>
                        <div className="booking-features">
                            {destination.features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <span>{feature.icon}</span>
                                    <span>{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="booking-form">
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-section">
                            <h3><FaUser /> Personal Information</h3>
                            <div className="input-group">
                                <label htmlFor="name"><FaUser /> Full Name</label>
                                <input type="text" id="name" name="name" value={bookingInfo.name} onChange={handleInputChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email"><FaEnvelope /> Email Address</label>
                                <input type="email" id="email" name="email" value={bookingInfo.email} onChange={handleInputChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone"><FaPhoneAlt /> Phone Number</label>
                                <input type="tel" id="phone" name="phone" value={bookingInfo.phone} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><FaCalendarAlt /> Trip Details</h3>
                            <div className="input-group">
                                <label htmlFor="adults"><FaUser /> Number of Adults</label>
                                <input type="number" id="adults" name="adults" min="1" value={bookingInfo.adults} onChange={handleInputChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="children"><FaChild /> Number of Children</label>
                                <input type="number" id="children" name="children" min="0" value={bookingInfo.children} onChange={handleInputChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="checkIn"><FaCalendarAlt /> Check-in Date</label>
                                <input type="date" id="checkIn" name="checkIn" value={bookingInfo.checkIn} onChange={handleInputChange} required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="checkOut"><FaCalendarAlt /> Check-out Date</label>
                                <input type="date" id="checkOut" name="checkOut" value={bookingInfo.checkOut} onChange={handleInputChange} required />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3><FaInfoCircle /> Additional Information</h3>
                            <div className="input-group">
                                <label htmlFor="specialRequests">Special Requests</label>
                                <textarea id="specialRequests" name="specialRequests" rows="4" value={bookingInfo.specialRequests} onChange={handleInputChange} placeholder="Any special requests or requirements?" />
                            </div>
                        </div>

                        <div className="form-section">
                            <h3>Price Summary</h3>
                            <div className="input-group">
                                <div className="price-details">
                                    <div className="price-row">
                                        <span>Adults ({bookingInfo.adults})</span>
                                        <span>${destination.price * bookingInfo.adults}</span>
                                    </div>
                                    {bookingInfo.children > 0 && (
                                        <div className="price-row">
                                            <span>Children ({bookingInfo.children})</span>
                                            <span>${(destination.price * 0.7) * bookingInfo.children}</span>
                                        </div>
                                    )}
                                    <div className="price-row total">
                                        <span>Total</span>
                                        <span>${calculateTotal()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="submit-booking-btn">
                            Complete Booking
                        </button>
                    </form>
                </div>

                <div className="additional-info">
                    <h3>Trip Highlights</h3>
                    <div className="info-grid">
                        {destination.highlights.map((highlight, index) => (
                            <div key={index} className="input-group">
                                <div className="info-card">
                                    <h4>Highlight {index + 1}</h4>
                                    <p>{highlight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {showAlert && (
                <CustomAlert
                    message={`Your booking for ${destination.title} has been confirmed! Payment process details will be sent to your email: ${bookingInfo.email}.`}
                    onClose={handleCloseAlert}
                    type="success"
                />
            )}
        </div>
    );
};

export default Booking;  