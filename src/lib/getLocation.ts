export async function getLocation() {

    // navigator.geolocation.getCurrentPosition((pos) => {
    //     console.log(`${pos.coords.longitude} ${pos.coords.latitude}`);
    // }, () => {
    //     return "Unable to retrieve your location";
    // });

    const pos: {coords: any} = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
    };

}

