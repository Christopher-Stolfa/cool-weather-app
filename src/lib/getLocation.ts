export async function getLocation(): Promise<{long: string, lat: string} | string> {
    if (!window) {
        return Promise.resolve("No location available");
    }

    const pos: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
    };

}

