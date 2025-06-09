import React, { useState } from 'react';
import contactVideo from '../../assets/videos/contact-bg.mp4';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowMessage(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      details: ['123 Kamaraj Street', 'Chennai, TN 600001']
    },
    {
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      details: ['+91 9900554433', '+91 9900554411']
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@travelease.com', 'support@travelease.com']
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm']
    }
  ];

  return (
    <section className="contact">
      <video src={contactVideo} autoPlay loop muted className="video-bg" />
      <div className="overlay"></div>

      <div className="contact-content">
        <div className="contact-header">
          <h1>Get In <span>Touch</span></h1>
          <p>We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">
                  {info.icon}
                </div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {showMessage && (
        <>
          <div className="message-overlay" onClick={() => setShowMessage(false)}></div>
          <div className="message-box">
            <div className="message-icon">
              <FaCheck />
            </div>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
            <button className="close-btn" onClick={() => setShowMessage(false)}>
              Close
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;