let date = new Date();

let stampdate = new Date();


localStorage.setItem("localdate", stampdate.getTime());

let date2 = date.getTime();

let dateday = localStorage.getItem("localdate");

let difference = dateday-date2;
let diff = difference / (1000 * 3600 * 24)

document.querySelector(".time").innerHTML = diff;


