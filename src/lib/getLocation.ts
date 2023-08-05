export async function getLocation(): Promise<{long: string, lat: string}> {
    if (!window) {
        return Promise.reject("No location available");
    }

    const pos: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
    };

}

