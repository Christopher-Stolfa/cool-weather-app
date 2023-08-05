import { getLocation } from "$lib/getLocation";
import getTodaysWeather from "$lib/services/getTodaysWeather";
import type { PageLoad } from "./$types";

export const load = async ({ fetch, params }) => {
  //   const location = getLocation();
  const res = await getTodaysWeather();
  console.log(res);
  return { weatherData: res };
};
