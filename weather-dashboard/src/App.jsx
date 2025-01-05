import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        console.log(response.data); // Log the data to ensure it's received
        setWeatherData(response.data);
        setError(null); // Clear any previous error
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Could not fetch weather data. Please check the city name or API key.');
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        {/* City Input */}
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="w-full p-3 mb-4 border-4 border-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all"
        />

        {/* Error Handling */}
        {error && <p className="text-red-500 mb-4 text-lg font-semibold">{error}</p>}

        {/* Weather Data */}
        {weatherData ? (
          <WeatherCard weather={weatherData} />
        ) : (
          <p className="text-white text-lg">Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default App;
