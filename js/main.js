let elForm = $(".form");
let elInput = $(".form__input");
let elWrapper = $(".weather");

const renderWeather = function(info) {
    const html = `
    <h2 class="wearher__name">${info.name}</h2>
    <p class="weather__country">Country: ${info.sys.country}</p>
    <p class="weather__temper">Temperatura: ${info.main.temp}°C</p>
    <p class="weather__speed">Speed: ${info.wind.speed}m/s</p>
    `
    elWrapper.innerHTML = null;
    elWrapper.insertAdjacentHTML("beforeend", html)
}


const callData = function (worldWeather) {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${worldWeather}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
         .then(ops => ops.json())
         .then(info => renderWeather(info));
}


elForm.addEventListener("submit", (event)=> {
    event.preventDefault()

    let inputValue = elInput.value;
    elInput.value = null;
    callData(inputValue)
});

