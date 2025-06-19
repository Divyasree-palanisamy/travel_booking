import React from 'react';
import './Home/Home.css';
import summerDealImg from '../assets/images/summer-deal.jpeg';
import { deals } from '../constants/data';

const summerDeal = deals.find(deal => deal.title === 'Summer Special');

const SummerSpecial = () => {
    return (
        <div className="home-page">
            <div className="full-width-container">
                <section className="hero-section">
                    <img src={summerDealImg} alt="Summer Special" className="hero-video" style={{ objectFit: 'cover', width: '100%', height: '400px', filter: 'brightness(0.7)' }} />
                    <div className="hero-content" style={{ top: '30%', left: '10%' }}>
                        <h1 style={{ fontSize: '3rem', color: '#fff', textShadow: '2px 2px 8px #000' }}>Summer Special</h1>
                        <p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold' }}>Unbeatable summer deals for your dream vacation!</p>
                    </div>
                </section>
            </div>
            <div className="content-container" style={{ marginTop: '-80px' }}>
                <section className="special-deals" style={{ background: 'linear-gradient(135deg, #f8ffae 0%, #43c6ac 100%)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', borderRadius: '20px', padding: '40px 30px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
                        <img src={summerDealImg} alt="Summer Special" style={{ width: '350px', borderRadius: '18px', boxShadow: '0 4px 24px rgba(67,198,172,0.2)' }} />
                        <div style={{ flex: 1, minWidth: '250px' }}>
                            <h2 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '20px' }}>Get {summerDeal.discount} on All Beach Destinations!</h2>
                            <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '18px' }}>{summerDeal.description}</p>
                            <ul style={{ fontSize: '1.1rem', color: '#2980b9', marginBottom: '18px' }}>
                                <li>✔️ Valid until {summerDeal.validUntil}</li>
                                <li>✔️ Use code: <span style={{ fontWeight: 'bold', color: '#e67e22' }}>{summerDeal.code}</span></li>
                                <li>✔️ Limited time only!</li>
                            </ul>
                            <button className="book-now-btn" style={{ fontSize: '1.2rem', padding: '16px 40px', marginTop: '10px', background: 'linear-gradient(135deg, #43c6ac, #191654)' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                Book Your Summer Escape
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SummerSpecial; 