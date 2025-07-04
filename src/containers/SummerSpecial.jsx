import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import summerDealImg from '../../src/assets/images/summer-deal.jpeg';
import baliImg from '../../src/assets/images/bali.jpeg';
import santoriniImg from '../../src/assets/images/santorini.jpeg';
import maldivesImg from '../../src/assets/images/maldives.jpg';
import DestinationCard from '../components/DestinationCard/DestinationCard';

const summerDeals = [
    {
        title: 'Bali, Indonesia',
        image: baliImg,
        price: 999,
        description: 'Experience the magic of Bali with our exclusive summer offer!'
    },
    {
        title: 'Santorini, Greece',
        image: santoriniImg,
        price: 1199,
        description: 'Enjoy breathtaking sunsets and whitewashed villages this summer.'
    },
    {
        title: 'Maldives',
        image: maldivesImg,
        price: 1399,
        description: 'Relax on pristine beaches and swim in crystal-clear waters.'
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
    width: '340px',
    maxWidth: '90vw',
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

const SummerSpecial = () => {
    const navigate = useNavigate();
    const [hoveredIdx, setHoveredIdx] = useState(-1);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleBookNow = (deal) => {
        // Use the first word before comma, lowercased, as in Booking.jsx
        const destinationName = deal.title.split(',')[0].toLowerCase().trim();
        navigate(`/book/${destinationName}`);
    };

    return (
        <div style={{ background: 'linear-gradient(135deg, #f5f6fa 0%, #e9ecef 100%)', width: '100%', paddingTop: '80px' }}>
            {/* Hero Section: Image left, text right */}
            <div style={heroSectionStyle}>
                <img
                    src={summerDealImg}
                    alt="Summer Special Banner"
                    style={heroImgStyle}
                />
                <div style={heroTextStyle}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '0.7rem', color: '#2c3e50', fontWeight: 700, letterSpacing: '1px' }}>Summer Special Deals</h1>
                    <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: '600px', marginBottom: 0 }}>
                        Enjoy exclusive summer deals on your favorite destinations! Book now and save big on your next adventure.
                    </p>
                </div>
            </div>
            {/* Deals Cards Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem 3rem 1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', marginBottom: '2.5rem' }}>
                    {summerDeals.map((deal, idx) => (
                        <DestinationCard key={idx} destination={{ ...deal, rating: 4.7 }} buttonStyle={{
                            background: 'linear-gradient(135deg, #43c6ac, #191654)',
                            color: '#fff',
                            width: 'auto',
                            maxWidth: '180px',
                            display: 'block',
                            margin: '18px auto 0 auto',
                        }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SummerSpecial; 