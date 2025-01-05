import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold">{weather.name}</h2>
      <p className="text-xl mt-2">{weather.weather[0].description}</p>
      <p className="text-2xl mt-4">Temperature: {weather.main.temp}°C</p>
      <p className="text-lg">Humidity: {weather.main.humidity}%</p>
      <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
