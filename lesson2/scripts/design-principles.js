let currentYear = new Date().getFullYear();
document.querySelector("span").innerHTML = currentYear;

let lastModified = document.lastModified;
document.querySelector(".updated").innerHTML = lastModified;
