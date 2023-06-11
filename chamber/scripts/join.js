let date = new Date();

document.getElementById("date").value = date.toDateString();

let hours = date.getHours();
let mins = date.getMinutes();
let seconds = date.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;