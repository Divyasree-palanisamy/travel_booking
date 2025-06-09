import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose, type = 'success' }) => {
    return (
        <div className="custom-alert-overlay">
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