const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=e8aa277b674ac952582729aca4cd796f&units=imperial';
let ficon = 0;
let ficon2 = 0;
let ficon3 = 0;

let fdate = 0;
let fdate2 = 0;
let fdate3 = 0;

let ftemp1 = 0;
let ftemp2 = 0;
let ftemp3 = 0;

let ftempdesc1 = 0;
let ftempdesc2 = 0;
let ftempdesc3 = 0;

let fhumidity1 = 0;
let fhumidity2 = 0;
let fhumidity3 = 0;

async function apiFetch() {

    try {
        const response = await fetch(url2);
        if (response.ok) {


        const data = await response.json();
        console.log(data); 

        
        /* Days */
        let fdateutc = fdates1(data);
        let fdateutc2 = fdates2(data);
        let fdateutc3 = fdates3(data);
        console.log(fdateutc2);
        /*
        let date = new Date(fdateutc * 1000);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let fdate = month +"-"+ day +"-"+ year;
        */
        document.getElementById('date-div1').innerHTML = fdateutc.slice(0, fdateutc.length-8);
        document.getElementById('date-div2').innerHTML = fdateutc2.slice(0, fdateutc2.length-8);
        document.getElementById('date-div3').innerHTML = fdateutc3.slice(0, fdateutc3.length-8);

        /* Temperature */
        let ftemp1 = ftemps1(data);
        let ftemp2 = ftemps2(data);
        let ftemp3 = ftemps3(data);

        document.getElementById('temperature-div1').innerHTML = ftemp1;
        document.getElementById('temperature-div2').innerHTML = ftemp2;
        document.getElementById('temperature-div3').innerHTML = ftemp3;

        /* Temperature description */
        let ftempdesc1 = ftempdescs1(data);
        let ftempdesc2 = ftempdescs2(data);
        let ftempdesc3 = ftempdescs3(data);

        document.getElementById('temperature-desc-div1').innerHTML = ftempdesc1;
        document.getElementById('temperature-desc-div2').innerHTML = ftempdesc2;
        document.getElementById('temperature-desc-div3').innerHTML = ftempdesc3;

        /* Humidity */

        let fhumidity1 = fhumiditys1(data);
        let fhumidity2 = fhumiditys2(data);
        let fhumidity3 = fhumiditys3(data);


        document.getElementById('humidity-div1').innerHTML = fhumidity1;
        document.getElementById('humidity-div2').innerHTML = fhumidity2;
        document.getElementById('humidity-div3').innerHTML = fhumidity3;

        /* icons */
        let iconweather1 = ficons1(data);
        let iconweather2 = ficons2(data);
        let iconweather3 = ficons3(data);

        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        const img3 = document.createElement("img");

        img1.src =`https://openweathermap.org/img/wn/${iconweather1}@2x.png`;
        document.getElementById("forecast-div1").appendChild(img1);

        img2.src =`https://openweathermap.org/img/wn/${iconweather2}@2x.png`;
        document.getElementById("forecast-div2").appendChild(img2);

        img3.src =`https://openweathermap.org/img/wn/${iconweather3}@2x.png`;
        document.getElementById("forecast-div3").appendChild(img3);





 
      } else {
          throw Error(await response.text());
      }

    } catch (error) {

        console.log(error);
    }
  }
  
apiFetch();

/*first day */
function ficons1(weatherData) {
    return ficon.innerHTML = `${weatherData.list[1].weather[0].icon}`;
}
function fdates1(weatherData) {
    return fdate.innerHTML = `${weatherData.list[1].dt_txt}`;
}
function ftemps1(weatherData) {
    return ftemp1.innerHTML = `${weatherData.list[1].main.temp.toFixed(0)}`;
}
function ftempdescs1(weatherData) { 
    return ftempdesc1.innerHTML = `${weatherData.list[1].weather[0].description}`;
}
function fhumiditys1(weatherData){
    return fhumidity1.innerHTML = `${weatherData.list[1].main.humidity}`;
}
/*second day */
function ficons2(weatherData) {
    return ficon2.innerHTML = `${weatherData.list[8].weather[0].icon}`;
}
function fdates2(weatherData) {
    return fdate2.innerHTML = `${weatherData.list[8].dt_txt}`;
}
function ftemps2(weatherData) {
    return ftemp2.innerHTML = `${weatherData.list[8].main.temp.toFixed(0)}`;
}
function ftempdescs2(weatherData) { 
    return ftempdesc2.innerHTML = `${weatherData.list[8].weather[0].description}`;
}
function fhumiditys2(weatherData){
    return fhumidity2.innerHTML = `${weatherData.list[8].main.humidity}`;
}
/*third day */
function ficons3(weatherData) {
    return ficon3.innerHTML = `${weatherData.list[16].weather[0].icon}`;
}
function fdates3(weatherData) {
    return fdate3.innerHTML = `${weatherData.list[16].dt_txt}`;
}
function ftemps3(weatherData) {
    return ftemp3.innerHTML = `${weatherData.list[16].main.temp.toFixed(0)}`;
}
function ftempdescs3(weatherData) { 
    return ftempdesc3.innerHTML = `${weatherData.list[16].weather[0].description}`;
}
function fhumiditys3(weatherData){
    return fhumidity3.innerHTML = `${weatherData.list[16].main.humidity}`;
}