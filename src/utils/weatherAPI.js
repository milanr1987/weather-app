import axios from 'axios';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=adf444e4560f819db608f8e1d0b4eb8a`
  );
  console.log(response.data, 'response.data');
  return response.data;
};
