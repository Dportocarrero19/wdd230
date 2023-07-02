let date = new Date();




let diff = 0;


let dateday = localStorage.getItem("localdate");
if (dateday) {

    
    dateday = new Date(dateday);
    
    
    const difference = date.getTime()-dateday.getTime();
    
    diff = Math.ceil(difference / (1000 * 3600 * 24));
}

localStorage.setItem("localdate", date);


document.getElementById("timelast").textContent = diff;


