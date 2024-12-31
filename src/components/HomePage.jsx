import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../utils/weatherAPI';
import { WeatherWidget } from './WeatherWidget';
import {  useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const { isLogged } = useSelector((state) => state.auth);
  const navigate= useNavigate();

  useEffect(() => {
    fetchWeatherData('Banjaluka').then(setWeather).catch(console.error);
  }, []);

    useEffect(() => {
      if (!isLogged) navigate("/login");
    }, [isLogged]);

  const weatherRender = () => {
    switch (weather) {
      case null:
        return <p>Loading weather...</p>;
      case undefined:
        return <p>Failed to load weather data</p>;
      default:
        return <WeatherWidget weather={weather} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {weatherRender()}
    </div>
  );
};

export default HomePage;
