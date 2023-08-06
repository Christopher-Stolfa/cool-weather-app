import getTodaysWeather from "$lib/services/getTodaysWeather.js";
import { json } from "@sveltejs/kit";

export async function POST(event) {
  const data = await event.request.formData();
  // subscribe the user to the newsletter
  const coordinates = data?.get("location")?.toString();
  // return success
  const weatherData = await getTodaysWeather(coordinates);
  return json(weatherData);
}
