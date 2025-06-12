import React from "react";
import styles from './WeatherDetails.module.css';

export default function WeatherDetails({ weather }) {
  if (!weather) return null;

  const { name, country } = weather.location;
  const { temp_c, condition, humidity, wind_kph } = weather.current;

  return (
    <div className={styles.card}>
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>
          {name}, {country}
        </h5>
        <p className={styles["card-text"]}>
          <strong>{temp_c}°C</strong> - {condition.text}
          <br />
          Humidity: {humidity}%<br />
          Wind: {wind_kph} kph
        </p>
        <img src={condition.icon} alt="Weather Icon" />
      </div>
    </div>
  );
}
