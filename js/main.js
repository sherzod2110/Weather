let elForm = $(".form");
let elFormInput = $(".form__input");
let elWrapper = $(".weather");

const renderWeather = function(www) {
    const html = `
    <h2 class="wearher__name">${www.name}</h2>
    <p class="weather__country">Country: ${www.sys.country}</p>
    <p class="weather__temper">${www.main.temp}°C</p>
    <p class="weather__speed">Speed: ${www.wind.speed}m/s</p>
    `
    elWrapper.innerHTML = null;
    elWrapper.insertAdjacentHTML("beforeend", html)
}


const callData = function (location) {
    const api = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
         .then(ops => ops.json())
         .then(data => renderWeather(data));
    return api
}


elForm.addEventListener("submit", function (e) {
    e.preventDefault()

    let inputValue = elFormInput.value;
    elFormInput.value = null;
    callData(inputValue)
});

