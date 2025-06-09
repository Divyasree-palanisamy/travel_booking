import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home.jsx';
import Destinations from "./containers/Destinations/Destinations.jsx";
import Deals from "./containers/Deals/Deals.jsx";
import Contact from './containers/Contact/Contact';
import Booking from './containers/Booking/Booking';
// import travelBgVideo from './assets/videos/travel-bg.mp4'; // Removed video import from App.jsx
import './App.css';

function App() {
  return (
    <Router>
      {/* <video src={travelBgVideo} autoPlay loop muted className="app-background-video"></video> */} {/* Removed video from App.jsx */}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:destinationName" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;