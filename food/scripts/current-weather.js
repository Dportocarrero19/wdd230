const currentTemp = document.querySelector('.temperature');
let currentWindspeed = 0;
let weather = 0;
let icon = 0;
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=e8aa277b674ac952582729aca4cd796f&units=imperial';

async function apiFetch() {

    try {
        const response = await fetch(url);
        if (response.ok) {


        const data = await response.json();

        console.log(data); 
        
        displayResults(data);


        let picweather = weatherdesc(data);
        
        
        document.querySelector('.weatherpic').innerHTML = picweather;

        let iconweather = icons(data);

        
        
        

        if (iconweather == "01d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/01d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "02d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/02d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "03d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/03d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "04d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/04d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "09d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/09d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "10d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/10d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "11d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/11d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "13d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/13d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "50d"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/50d@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "01n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/01n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "02n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/02n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "03n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/03n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "04n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/04n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "09"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/09n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "10n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/10n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "11n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/11n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if (iconweather == "13n"){
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/13n@2x.png";
            document.getElementById("weather-div").appendChild(img);

        }else if(iconweather == "50n") {
            const img = document.createElement("img");
            img.src ="https://openweathermap.org/img/wn/50n@2x.png";
            document.getElementById("weather-div").appendChild(img);
        }


      } else {
          throw Error(await response.text());
      }

    } catch (error) {

        console.log(error);
    }
  }
  
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
}

function weatherdesc(weatherData) {
    return weather.innerHTML = `${weatherData.weather[0].description}`;
}

function icons(weatherData) {
    return icon.innerHTML = `${weatherData.weather[0].icon}`;
}

function temperatureCalc(weatherData) {
    return currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
}




