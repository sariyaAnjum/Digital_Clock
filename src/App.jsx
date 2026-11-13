import { useEffect, useState } from "react";
import "./App.css";

function ClockDigits({ hours, minutes, seconds, className = "" }) {
  return (
    <span className={`clock-digits ${className}`} aria-hidden="true">
      <span className="digit-group">
        <span className="digit-value">{hours}</span>
        <span className="digit-label">hours</span>
      </span>
      <span className="clock-separator">:</span>
      <span className="digit-group">
        <span className="digit-value">{minutes}</span>
        <span className="digit-label">minutes</span>
      </span>
      <span className="clock-separator">:</span>
      <span className="digit-group">
        <span className="digit-value">{seconds}</span>
        <span className="digit-label">seconds</span>
      </span>
    </span>
  );
}

export default function App() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const dateTime = time.toISOString();
  const dateLabel = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(time);
  const timeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";

  return (
    <main className="clock-page">
      <div className="ambient ambient-blue" aria-hidden="true" />
      <div className="ambient ambient-violet" aria-hidden="true" />

      <section className="clock-panel" aria-label="Digital clock">
        <header className="clock-header">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="eyebrow">YOUR MOMENT, IN TIME</p>
          <div className="live-status">
            <span className="live-dot" />
            LIVE
          </div>
        </header>

        <div className="clock-stage">
          <div className="clock-face">
            <p className="clock-caption">LOCAL TIME</p>
            <time className="clock-time" dateTime={dateTime}>
              <span className="visually-hidden">
                {hours}:{minutes}:{seconds}
              </span>
              <ClockDigits
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            </time>
            <ClockDigits
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              className="clock-reflection"
            />
          </div>
          <div className="floor-glow" aria-hidden="true" />
        </div>

        <footer className="clock-footer">
          <p className="date-label">{dateLabel}</p>
          <p className="timezone-label">
            <span className="timezone-icon" aria-hidden="true">
              ◉
            </span>
            {timeZone}
          </p>
        </footer>
      </section>

      <p className="page-note">A little more present.</p>
    </main>
  );
}
