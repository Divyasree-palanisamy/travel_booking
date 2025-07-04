import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import familyDealImg from '../assets/images/family-deal.jpeg';
import newyorkImg from '../assets/images/new-york.jpeg';
import veniceImg from '../assets/images/venice.jpeg';
import capeTownImg from '../assets/images/cape-town.jpg';
import DestinationCard from '../components/DestinationCard/DestinationCard';

const getawayPlaces = [
    {
        title: 'New York City, USA',
        image: newyorkImg,
        price: 1100,
        description: 'The city that never sleeps, perfect for a quick urban adventure.'
    },
    {
        title: 'Venice, Italy',
        image: veniceImg,
        price: 950,
        description: 'Romantic canals and stunning architecture for a memorable weekend.'
    },
    {
        title: 'Cape Town, South Africa',
        image: capeTownImg,
        price: 1050,
        description: 'Mountains, beaches, and vibrant culture in one quick getaway.'
    }
];

const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto 1.2rem auto',
    padding: '1.2rem 1rem 1.2rem 1rem',
    background: 'linear-gradient(135deg, #b2f7ef 0%, #e0e7ff 100%)',
    borderRadius: '24px',
    boxShadow: '0 8px 32px rgba(67,198,172,0.10)',
    flexWrap: 'wrap',
};

const heroImgStyle = {
    width: '260px',
    maxWidth: '80vw',
    height: 'auto',
    borderRadius: '18px',
    boxShadow: '0 2px 8px rgba(67,198,172,0.08)',
    flexShrink: 0,
};

const heroTextStyle = {
    flex: 1,
    minWidth: '260px',
    textAlign: 'left',
};

const cardBaseStyle = {
    background: 'linear-gradient(135deg, #b2f7ef 0%, #e0e7ff 100%)',
    borderRadius: '18px',
    boxShadow: '0 4px 24px rgba(44,62,80,0.10)',
    maxWidth: '340px',
    minWidth: '260px',
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem 1.2rem 1.2rem 1.2rem',
    position: 'relative',
    transition: 'box-shadow 0.2s',
    margin: '0 0.5rem',
    cursor: 'pointer',
    overflow: 'hidden',
};

const cardHoverStyle = {
    background: 'linear-gradient(135deg, #b2f7ef 0%, #e0e7ff 100%)',
    transform: 'scale(1.035)',
};

const WeekendGetawayDestinations = () => {
    const navigate = useNavigate();
    const [hoveredIdx, setHoveredIdx] = useState(-1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBookNow = (place) => {
        const destinationName = place.title.split(',')[0].toLowerCase().trim();
        navigate(`/book/${destinationName}`);
    };

    return (
        <div style={{ background: 'linear-gradient(135deg, #f5f6fa 0%, #e9ecef 100%)', width: '100%', paddingTop: '80px' }}>
            {/* Hero Section: Image left, text right */}
            <div style={heroSectionStyle}>
                <img
                    src={familyDealImg}
                    alt="Weekend Getaway Banner"
                    style={heroImgStyle}
                />
                <div style={heroTextStyle}>
                    <h1 style={{ fontSize: '2.1rem', marginBottom: '0.5rem', color: '#2c3e50', fontWeight: 700, letterSpacing: '1px' }}>Weekend Getaway Destinations</h1>
                    <p style={{ fontSize: '1.08rem', color: '#333', maxWidth: '600px', marginBottom: 0 }}>
                        Escape for the weekend! Choose from these quick and exciting destinations for your next short break.
                    </p>
                </div>
            </div>
            {/* Deals Cards Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '2.5rem' }}>
                    {getawayPlaces.map((place, idx) => (
                        <DestinationCard
                            key={idx}
                            destination={{ ...place, rating: 4.7 }}
                            buttonStyle={{
                                background: 'linear-gradient(135deg, #43c6ac, #191654)',
                                color: '#fff',
                                width: 'auto',
                                maxWidth: '180px',
                                display: 'block',
                                margin: '18px auto 0 auto',
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeekendGetawayDestinations; 