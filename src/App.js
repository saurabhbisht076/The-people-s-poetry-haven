import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage'; // Update the path to point to the Components folder

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Main landing page */}
      </Routes>
    </Router>
  );
};

export default App;