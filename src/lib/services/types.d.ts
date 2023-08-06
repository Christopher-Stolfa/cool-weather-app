export type TCondition = {
  text: string;
  icon: string;
  code: number;
};
export type TLocation = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};
export type TCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: TCondition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: number;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};
export interface ITodaysWeatherData {
  location: TLocation;
  current: TCurrent;
}
