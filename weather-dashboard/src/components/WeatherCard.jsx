import React from 'react';

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{weather.city || 'City'}</h2>
      <p className="text-lg text-gray-600">Temperature: <span className="font-semibold">{weather.temp}°C</span></p>
      <p className="text-lg text-gray-600">Humidity: <span className="font-semibold">{weather.humidity}%</span></p>
      <p className="text-lg text-gray-600">Wind Speed: <span className="font-semibold">{weather.wind_speed} m/s</span></p>
      <p className="text-lg text-gray-600">Conditions: <span className="font-semibold">{weather.conditions}</span></p>
    </div>
  );
};

export default WeatherCard;
