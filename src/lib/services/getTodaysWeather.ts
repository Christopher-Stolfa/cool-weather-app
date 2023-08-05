import { env } from "$env/dynamic/private";
import { WEATHER_API } from "$lib/constants";
import type { TCurrent, TLocation } from "./types";
interface IResponse {
  location: TLocation;
  current: TCurrent;
}
const getTodaysWeather = async (zipCode = "85086") => {
  const endpoint = `${WEATHER_API}/current.json?key=${env?.SECRET_API_KEY}&q=${zipCode}`;
  let weatherData = null;
  const response = await fetch(endpoint);
  if (response.ok) {
    weatherData = await response.json();
  }
  return weatherData;
};
export default getTodaysWeather;
