import { useState } from 'react';
import { FaUser, FaCalendarAlt, FaCreditCard, FaEnvelope, FaPhone } from 'react-icons/fa';

const BookingForm = ({ destination }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: 1,
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Booking submitted successfully!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-dark mb-6">Book Your Trip to {destination?.title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCalendarAlt className="text-gray-400" />
            </div>
            <input
              type="date"
              name="travelDate"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" />
            </div>
            <select
              name="travelers"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
              value={formData.travelers}
              onChange={handleChange}
              required
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-semibold text-dark mb-4">Payment Information</h3>
          
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaCreditCard className="text-gray-400" />
            </div>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Trip Price:</span>
            <span className="font-semibold">${destination?.price}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Taxes & Fees:</span>
            <span className="font-semibold">$120</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-dark pt-2 border-t border-gray-200">
            <span>Total:</span>
            <span>${destination ? destination.price + 120 : 0}</span>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition duration-300 mt-6"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;