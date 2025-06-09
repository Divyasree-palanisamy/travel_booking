import React, { useState } from 'react';
import { FaHeart, FaCopy, FaCheck } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summerDeal from '../../assets/images/summer-deal.jpeg';
import earlyBirdDeal from '../../assets/images/early-bird-deal.jpeg';
import familyDeal from '../../assets/images/family-deal.jpeg';
import videoBg from '../../assets/videos/travel-bg.mp4';
import './Deals.css';

const Deals = () => {
  const [wishlist, setWishlist] = useState([]);
  const [copiedCode, setCopiedCode] = useState(null);

  const deals = [
    {
      id: 1,
      title: 'Summer Paradise',
      discount: '30% OFF',
      description: 'Escape to tropical destinations with this exclusive summer offer.',
      code: 'SUMMER30',
      validUntil: '2024-08-31',
      image: summerDeal,
    },
    {
      id: 2,
      title: 'Early bird deal',
      discount: '60% OFF',
      description: 'Grab this exclusive early bird offer.',
      code: 'EARLY60',
      validUntil: '2024-03-31',
      image: earlyBirdDeal,
    },
    {
      id: 3,
      title: 'Family Deal',
      discount: '40% OFF',
      description: 'Enjoy with your family with this pack offer.',
      code: 'FAMILY45',
      validUntil: '2024-08-31',
      image: familyDeal,
    },
  ];

  // Custom toast styles
  const toastStyles = {
    success: {
      style: {
        background: 'rgba(44, 62, 80, 0.95)',
        color: '#fff',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 215, 0, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      progressStyle: {
        background: 'linear-gradient(to right, #ffd700, #ffa500)',
      },
      icon: '🎉'
    }
  };

  // Toggle deal in wishlist with beautiful notification
  const toggleWishlist = (dealId, dealTitle) => {
    setWishlist(prev => {
      const newWishlist = prev.includes(dealId)
        ? prev.filter(id => id !== dealId)
        : [...prev, dealId];

      toast(
        prev.includes(dealId)
          ? `${dealTitle} removed from wishlist`
          : `${dealTitle} added to wishlist`,
        {
          ...toastStyles.success,
          icon: prev.includes(dealId) ? '💔' : '❤️'
        }
      );

      return newWishlist;
    });
  };

  // Copy promo code with beautiful notification
  const copyPromoCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);

    toast('Promo code copied to clipboard!', {
      ...toastStyles.success,
      icon: '📋'
    });

    setTimeout(() => setCopiedCode(null), 2000);
  };

  // Handle claim offer with beautiful notification
  const handleClaimOffer = (deal) => {
    toast.success(
      <div className="claim-toast">
        <h4>🎊 Offer Claimed Successfully!</h4>
        <p>You've claimed the {deal.title}</p>
        <p className="discount">{deal.discount}</p>
        <p className="code">Use code: {deal.code}</p>
      </div>,
      {
        ...toastStyles.success,
        autoClose: 5000
      }
    );
  };

  return (
    <section className="deals">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <video src={videoBg} autoPlay loop muted className="video-bg" />
      <div className="overlay"></div>
      <div className="deals-content">
        <div className="deals-header">
          <h1>Exclusive <span>Travel Deals</span></h1>
          <p>Limited-time offers to make your dream vacation a reality</p>
        </div>

        <div className="deals-container">
          {deals.map((deal) => (
            <div key={deal.id} className="deal-card">
              <div className="deal-image">
                <img src={deal.image} alt={deal.title} />
                <div className="deal-badge">{deal.discount}</div>
                <button
                  className="wishlist-btn"
                  onClick={() => toggleWishlist(deal.id, deal.title)}
                  aria-label={wishlist.includes(deal.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  {wishlist.includes(deal.id) ? (
                    <FaHeart className="wishlist-icon active" />
                  ) : (
                    <FaHeart className="wishlist-icon" />
                  )}
                </button>
              </div>

              <div className="deal-content">
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>

                <div className="deal-details">
                  <div className="deal-code">
                    <span>Promo Code:</span>
                    <div className="code-container">
                      <strong>{deal.code}</strong>
                      <button
                        className="copy-btn"
                        onClick={() => copyPromoCode(deal.code)}
                        aria-label="Copy promo code"
                      >
                        {copiedCode === deal.code ? <FaCheck /> : <FaCopy />}
                      </button>
                    </div>
                  </div>

                  <div className="deal-valid">
                    <span>Valid until:</span>
                    <strong>{new Date(deal.validUntil).toLocaleDateString()}</strong>
                  </div>
                </div>

                <button
                  className="deal-btn"
                  onClick={() => handleClaimOffer(deal)}
                >
                  <span>Claim Offer</span>
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;