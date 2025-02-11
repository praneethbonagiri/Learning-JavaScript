const getLocationButton = document.getElementById('get-location-button')

const displayDiv = document.getElementById('output-div')

// function to make api call and get data
async function getWeatherData(lat, long) {
    const apiKey = "e32a766172794493bff70858250501"
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${long}&aqi=no`

    const resp = await fetch(weatherApiUrl)
    return await resp.json()
}

async function displayLocation(position) {
    console.log(position)
    const lat = position.coords.latitude
    const long = position.coords.longitude
    const result = await getWeatherData(lat, long)
    console.log(result)
    
    const latLongPara = document.createElement("p")
    latLongPara.innerText = `The latitude is ${lat} and the longitude is ${long}`
    const locationDetailsPara = document.createElement("p")
    locationDetailsPara.innerText = `The location details are ${result.location.name}, ${result.location.region}, ${result.location.country}`

    displayDiv.append(latLongPara, locationDetailsPara)
}

function failedToGetLocation() {
    console.log("There was some error getting the location")
}

getLocationButton.addEventListener("click", async () => {
    navigator.geolocation.getCurrentPosition(displayLocation, failedToGetLocation)
})