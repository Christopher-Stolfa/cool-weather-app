import { env } from "$env/dynamic/private";
import { WEATHER_API } from "$lib/constants";
import type { ITodaysWeatherData, TCurrent, TLocation } from "./types";

const getTodaysWeather = async (
  zipCode = "85086"
): Promise<ITodaysWeatherData> => {
  const endpoint = `${WEATHER_API}/current.json?key=${env?.SECRET_API_KEY}&q=${zipCode}`;
  let weatherData = null;
  const response = await fetch(endpoint);
  if (response.ok) {
    weatherData = await response.json();
  }
  return weatherData;
};
export default getTodaysWeather;
