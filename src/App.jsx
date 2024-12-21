import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  // Set the launch date
  const launchDate = new Date("2024-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = launchDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) return null;

    return (
      <div className="timer-box" key={interval}>
        <div className="timer-number">{timeLeft[interval]}</div>
        <span className="timer-label">{interval.toUpperCase()}</span>
      </div>
    );
  });

  return (
    <div className="launch-container">
      <div className="rocket"></div> {/* Rocket Animation */}
      <h1 className="heading">Himanshu Singh Portfolio</h1>
      <h2 className="subheading">We're Launching Soon!</h2>
      <div className="timer">{timerComponents.length ? timerComponents : <span>It's time to launch!</span>}</div>
      <button className="stay-updated-btn" onClick={() => alert("Thank you for your interest!")}>
        Stay Updated
      </button>
      <div className="clouds"></div> {/* Cloud Animation */}
      <div className="particles"></div> {/* Particle Animation */}
    </div>
  );
};

export default App;
