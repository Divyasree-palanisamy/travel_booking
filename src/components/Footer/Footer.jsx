import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const quickLinks = [
    { name: 'About Us', path: '/about', action: () => toast.info('About Us page coming soon!') },
    { name: 'Our Services', path: '/services', action: () => toast.info('Services page coming soon!') },
    { name: 'Privacy Policy', path: '/privacy', action: () => toast.info('Privacy Policy page coming soon!') },
    { name: 'Affiliate Program', path: '/affiliate', action: () => toast.info('Affiliate Program page coming soon!') }
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq', action: () => toast.info('FAQ page coming soon!') },
    { name: 'Booking', path: '/booking', action: () => navigate('/') },
    { name: 'Returns', path: '/returns', action: () => toast.info('Returns page coming soon!') },
    { name: 'Payment Options', path: '/payment', action: () => toast.info('Payment Options page coming soon!') }
  ];

  const destinations = [
    { name: 'Beach Destinations', path: '/destinations/beach', action: () => navigate('/destinations') },
    { name: 'Mountain Escapes', path: '/destinations/mountain', action: () => navigate('/destinations') },
    { name: 'City Tours', path: '/destinations/city', action: () => navigate('/destinations') },
    { name: 'Adventure Trips', path: '/destinations/adventure', action: () => navigate('/destinations') }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', name: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', name: 'LinkedIn' }
  ];

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);

    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('🎉 Successfully subscribed to our newsletter!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleLinkClick = (action, e) => {
    e.preventDefault();
    action();
  };

  return (
    <footer className="footer">
      <ToastContainer position="bottom-right" />
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.action, e)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.action, e)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Top Destinations</h4>
            <ul>
              {destinations.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => handleLinkClick(link.action, e)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="newsletter">
              <h4>Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <FaPaperPlane />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TravelEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;