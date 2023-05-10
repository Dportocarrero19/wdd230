
let currentYear = new Date().getFullYear();
document.querySelector(".currentyear").innerHTML = currentYear;

let lastModified = document.lastModified;
document.querySelector(".updated").innerHTML = lastModified;

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let day = days[d.getDay()];

let numdate = d.getDate();


let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let months = month[d.getUTCMonth()];


let year = d.getFullYear();

let dates = day + ",  " + numdate + " " + months + " " + year;


document.querySelector(".date").innerHTML= dates;

function toggleMenu() {
    document.getElementsByClassName("navigation-list")[0].classList.toggle("responsive");
}