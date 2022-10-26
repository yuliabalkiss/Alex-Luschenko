const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "4beade1ab16760b911b8d2ffaf847fb1"
}
//  получение данных о погоде
function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

// массив городов
const cities = {
    2950158: 'Berlin',
    625144: 'Minsk',
    456172: 'Rig',
    703448: 'Kyiv',

}


// перебираем массив городов
for (let key in cities) {
    let option = document.createElement('option');
    option.value = key;
    option.innerHTML = cities[key];
    document.querySelector('#city').append(option);
}






// вывод данных погоды

function showWeather(data) {
    console.log(data)
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.deg').textContent = `Deg: ${data.wind['deg']}`;
    document.querySelector('.gust').textContent = ` Gust: ${data.wind['gust']}`;
    document.querySelector('.speed').innerHTML = `Wind speed: ${data.wind['speed']} m/s`;
    document.querySelector('.pressure').textContent = `Pressure: ${data.main['pressure']} hPa`;
    document.querySelector('.humidity').textContent = `Humidity: ${data.main['humidity']} %`;

    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

}
getWeather();
document.querySelector('#city').onchange = getWeather;