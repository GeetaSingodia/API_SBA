
// api.js
const API_KEY = "3rYRCfGc5QoIAmaHO89z14VDVCtkkMmJUFljbjJB";  //  API key

export async function fetchAPOD(date) {
    const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
