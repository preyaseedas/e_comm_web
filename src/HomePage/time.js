import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // Define the target date
    const targetDate = new Date("2024-09-10T00:00:00"); // Example target date
    const now = new Date();
    const difference = targetDate - now;

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

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>Days: {String(timeLeft.days).padStart(2, "0")}</div>
      <div>Hours: {String(timeLeft.hours).padStart(2, "0")}</div>
      <div>Minutes: {String(timeLeft.minutes).padStart(2, "0")}</div>
      <div>Seconds: {String(timeLeft.seconds).padStart(2, "0")}</div>
    </div>
  );
};

export default CountdownTimer;
