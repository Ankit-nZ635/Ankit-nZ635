const apiKey = "c9f53a35363b4459b73173744261306";

async function getWeather() {

    const city =
        document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url =
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        if (data.error) {
            alert("City not found");
            return;
        }

        document.getElementById("city-name").innerText =
            data.location.name + ", " +
            data.location.country;

        document.getElementById("temp").innerText =
            data.current.temp_c + "°C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            data.current.humidity + "%";

        document.getElementById("wind").innerText =
            data.current.wind_kph + " km/h";

        document.getElementById("feels-like").innerText =
            data.current.feelslike_c + "°C";

        document.getElementById("weather-icon").src =
            "https:" + data.current.condition.icon;

    }
    catch (error) {

        console.log(error);

        alert("Something went wrong");
    }
}