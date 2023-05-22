let temperature = 0;
let windSpeed = 0;

document.querySelector(".temperature").innerHTML = temperature;

document.querySelector(".windspeed").innerHTML = windSpeed;

if (temperature <= 50 && windSpeed > 3.0){

    let urWindChill = 35.74 + (0.6215*temperature) - (35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16))
    
    let windChill = Math.round(urWindChill);

    document.querySelector(".windchill").innerHTML = windChill;

}
else {
    document.querySelector(".windchill").innerHTML = "N/A";
}