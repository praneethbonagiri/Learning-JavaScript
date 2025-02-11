// constants
const cityInput = document.getElementById("city-input")
const searchButton = document.getElementById("search-button")

// to modify after getting response
const cityTemp = document.getElementById('city-temp')
const cityName = document.getElementById('city')
const cityRegion = document.getElementById('region')
const localTime = document.getElementById('local-time')

// function to make api call and get data
async function getWeatherData(city) {
    const apiKey = "e32a766172794493bff70858250501"
    const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    const resp = await fetch(weatherApiUrl)
    return await resp.json()
}

// Event listener
searchButton.addEventListener('click', async () => {
    const city = cityInput.value
    const resp = await getWeatherData(city)
    //console.log(resp)

    cityTemp.innerText = resp.current.temp_c
    cityName.innerText = resp.location.name
    cityRegion.innerText = resp.location.region
    localTime.innerText = resp.location.localtime
})

