import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ city, onCityChange, onSearch }) {
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter city"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />
      <button className={styles.button} onClick={onSearch}>
        Get Weather
      </button>
    </div>
  );
}
