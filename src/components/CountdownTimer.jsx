import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

export const CountdownTimer = ({ targetDate, t, isTe }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    
    // Check if target reached (wedding day / during muhurtham)
    if (difference <= 0) {
      // Check if within the 1 hour muhurtham window (10:30 AM to 11:30 AM)
      const oneHourInMs = 60 * 60 * 1000;
      if (Math.abs(difference) <= oneHourInMs) {
        return { isDuringMuhurtham: true, isWeddingPassed: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return { isDuringMuhurtham: false, isWeddingPassed: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      isDuringMuhurtham: false,
      isWeddingPassed: false,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isDuringMuhurtham) {
    return (
      <div className="countdown-alert celebration-alert" role="status">
        <Sparkles className="celebrate-icon" />
        <p className="celebration-text">{t.weddingCelebrationStarted}</p>
      </div>
    );
  }

  if (timeLeft.isWeddingPassed) {
    return (
      <div className="countdown-alert passed-alert" role="status">
        <Sparkles className="celebrate-icon" />
        <p className="celebration-text">{t.weddingDayMessage}</p>
      </div>
    );
  }

  const units = [
    { label: t.countdownDays, value: timeLeft.days },
    { label: t.countdownHours, value: timeLeft.hours },
    { label: t.countdownMinutes, value: timeLeft.minutes },
    { label: t.countdownSeconds, value: timeLeft.seconds }
  ];

  return (
    <div className="countdown-container" aria-label="Wedding Countdown Timer">
      <div className="countdown-title">
        <Clock size={16} className="clock-icon" />
        <span>{t.countdownHeading}</span>
      </div>

      <div className="countdown-grid">
        {units.map((unit, idx) => (
          <div key={idx} className="countdown-card">
            <div className="countdown-value-box">
              <span className="countdown-value">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            <span className="countdown-label">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
