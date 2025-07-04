import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './CustomAlert.css';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

const CustomAlert = ({ message, onClose, type = 'success' }) => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowConfetti(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="custom-alert-overlay">
            {showConfetti && <Confetti numberOfPieces={180} recycle={false} style={{ zIndex: 1100 }} />}
            <div className={`custom-alert ${type}`}>
                <button className="close-button" onClick={onClose}>
                    <FaTimes />
                </button>
                <div className="alert-content">
                    <FaCheckCircle className="alert-icon" />
                    <h3>Booking Successful!</h3>
                    <p>{message}</p>
                </div>
                <button className="alert-button" onClick={onClose}>
                    Continue
                </button>
            </div>
        </div>
    );
};

export default CustomAlert; 