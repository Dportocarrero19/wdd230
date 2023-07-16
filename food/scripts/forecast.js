const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=e8aa277b674ac952582729aca4cd796f&units=imperial';
let ficon = 0;
let ficon2 = 0;
let ficon3 = 0;

let fdate = 0;
let fdate2 = 0;
let fdate3 = 0;

async function apiFetch() {

    try {
        const response = await fetch(url2);
        if (response.ok) {


        const data = await response.json();
        console.log(data); 

        let iconweather1 = ficons1(data);
        let iconweather2 = ficons2(data);
        let iconweather3 = ficons3(data);

        let fdateutc = fdates1(data);
        /*
        let date = new Date(fdateutc * 1000);
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let fdate = month +"-"+ day +"-"+ year;
        */

        
        console.log(fdateutc);
        document.getElementById('date-div1').innerHTML = fdateutc.slice(0, fdateutc.length-8);

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


function ficons1(weatherData) {
    return ficon.innerHTML = `${weatherData.list[0].weather[0].icon}`;
}
function fdates1(weatherData) {
    return fdate.innerHTML = `${weatherData.list[1].dt_txt}`;
}

function ficons2(weatherData) {
    return ficon2.innerHTML = `${weatherData.list[7].weather[0].icon}`;
}


function ficons3(weatherData) {
    return ficon3.innerHTML = `${weatherData.list[15].weather[0].icon}`;
}
