export const WeatherWidget = ({ weather }) => {
  const {
    name,
    weather: weatherDetails,
    main: { temp, feels_like, humidity },
    wind: { speed },
    sys: { country },
  } = weather;

  const tempCelsius = (temp - 273.15).toFixed(1);
  const feelsLikeCelsius = (feels_like - 273.15).toFixed(1);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Weather in {name}, {country}
        </h2>
        <p className="text-gray-600 text-lg">
          {weatherDetails[0].description.charAt(0).toUpperCase() +
            weatherDetails[0].description.slice(1)}
        </p>
        <p className="text-4xl font-bold text-blue-500 my-4">{tempCelsius}°C</p>
        <p className="text-gray-600">Feels like: {feelsLikeCelsius}°C</p>
        <p className="text-gray-600">Humidity: {humidity}%</p>
        <p className="text-gray-600">Wind Speed: {speed} m/s</p>
      </div>
    </div>
  );
};
