import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import './LandingPage.css';

const poets = [
  { name: "Poet 1", works: "In the quiet of the night, dreams take flight.", logo: "/images/logo1.png" },
  { name: "Poet 2", works: "Whispers of the wind carry tales untold.", logo: "/images/logo2.png" },
  { name: "Poet 3", works: "Stars in the sky, like thoughts in my mind.", logo: "/images/logo3.png" },
  { name: "Poet 4", works: "Each word a brushstroke, painting my soul.", logo: "/images/logo4.png" },
  { name: "Poet 5", works: "Time flows like a river, carrying memories.", logo: "/images/logo5.png" },
  { name: "Poet 6", works: "In every shadow, there lies a story.", logo: "/images/logo6.png" },
];

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showSubscribeForm, setShowSubscribeForm] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.landing-container'),
      smooth: true,
    });

    gsap.from('.poet-card', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power2.out',
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleSubscribeClick = () => {
    setShowSubscribeForm(true);
  };

  return (
    <div className="landing-container" data-scroll-container>
      {showPopup && (
        <div className="popup">
          <span className="close" onClick={handleClosePopup}>&times;</span>
          <h2>Subscribe Now!</h2>
          {showSubscribeForm ? (
            <div className="subscribe-form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Account No" />
              <button className="btn">Submit</button>
            </div>
          ) : (
            <button className="btn" onClick={handleSubscribeClick}>Subscribe</button>
          )}
        </div>
      )}

      <nav className="navbar">
        <div className="logo-container">
          <img src="/logo.jpg" alt="Poetry Haven Logo" className="logo" />
          <span className="logo-name">Poetry Haven</span>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search Poet..." className="search-input" />
        </div>
        <div className="button-container">
          <button className="btn">Log In</button>
          <button className="btn">Create Account</button>
        </div>
      </nav>

      <div className="card-container">
        {poets.map((poet, index) => (
          <div className="poet-card" key={index}>
            <div className="circle"></div>
            <div className="card-content">
              <img src={poet.logo} alt={poet.name} className="poet-logo" />
              <h3>{poet.name}</h3>
              <hr />
              <p>{poet.works}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="subscribe-button-container">
        <button className="btn subscribe-btn" onClick={handleSubscribeClick}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;