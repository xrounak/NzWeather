import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';
import WeatherDetails from './components/WeatherDetails';
import Loading from './components/Loading';

const API_KEY = 'ff16110b07cd47e78a8150353253101'; 
export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeather = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weather App</h1>
      <SearchBar city={city} onCityChange={setCity} onSearch={getWeather} />
      
      {error && <div className="alert alert-danger">{error}</div>}
      
      {isLoading ? (
        <Loading />
      ) : (
        weather && <WeatherDetails weather={weather} />
      )}
    </div>
  );
}
