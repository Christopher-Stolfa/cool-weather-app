<script lang="ts">
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import { getLocation } from "$lib/getLocation";
  import type { ITodaysWeatherData } from "$lib/services/types";
  let todaysWeatherData: ITodaysWeatherData;
  const getUserLocation = async () => {
    const userLocation = await getLocation();
    const formData = new FormData();
    const latLongString = `${userLocation?.lat},${userLocation?.long}`;
    formData.append("location", latLongString);
    const apiWeatherRes = await fetch("/api/weather", {
      method: "POST",
      body: formData,
    });
    todaysWeatherData = await apiWeatherRes?.json();
    return userLocation;
  };
  //   console.log($page);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>

    {#await getUserLocation()}
      Waiting for geolocation information.
    {:then locationResult}
      {locationResult.long}
      {locationResult.lat}
    {:catch}
      <p style="color: red">No geolocation information available.</p>
    {/await}
  </h1>
  {#if todaysWeatherData}
    <p>Condition: {todaysWeatherData?.current?.condition?.text}</p>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
