document.addEventListener("DOMContentLoaded", function() {
    const fanOnButton = document.getElementById("fanOn");
    const fanOffButton = document.getElementById("fanOff");
    const lightsOnButton = document.getElementById("lightsOn");
    const lightsOffButton = document.getElementById("lightsOff");

    // Replace these URLs with your actual API endpoints
    const fanOnUrl = "https://kodessphere-api.vercel.app";
    const fanOffUrl = "https://kodessphere-api.vercel.app";
    const lightsOnUrl = "https://kodessphere-api.vercel.app";
    const lightsOffUrl = "https://kodessphere-api.vercel.app";

    // Function to make API requests
    async function makeRequest(url) {
        try {
            const response = await fetch(url, { method: 'POST' });
            const data = await response.json();
            console.log(data); // Optional: Log response for debugging
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., display error message to the user)
        }
    }

    // Event listeners for buttons
    fanOnButton.addEventListener("click", () => {
        makeRequest(fanOnUrl);
    });

    fanOffButton.addEventListener("click", () => {
        makeRequest(fanOffUrl);
    });

    lightsOnButton.addEventListener("click", () => {
        makeRequest(lightsOnUrl);
    });

    lightsOffButton.addEventListener("click", () => {
        makeRequest(lightsOffUrl);
    });
});
