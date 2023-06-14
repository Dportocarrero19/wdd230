const url = 'https://dportocarrero19.github.io/wdd230/chamber/json/data.json';
async function getBusinessesData() {
    const response = await fetch(url);
    const data = await response.json();
    display(data.Businesses);
};

getBusinessesData();

const display = (Businesseses) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    Businesseses.forEach((Businesses) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let adrs = document.createElement('p');
        let phone = document.createElement('p');
        phone.className = "phone";
        let member = document.createElement('p');
        member.className = "member";
        let photo = document.createElement('img');
        let websiteurl = document.createElement('p');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${Businesses.name}`;
        member.textContent = `${Businesses.membershiplevel}`
        adrs.textContent = `${Businesses.address}`;
        phone.textContent = `${Businesses.phonenumber}`;
        websiteurl.textContent = `${Businesses.websiteurl}`
        member.textContent= `${Businesses.membershiplevel} member`
        // Build the image portrait by setting all the relevant attribute
        photo.setAttribute('src', Businesses.image);
        photo.setAttribute('loading', 'lazy');
       
        
        // Append the section(card) with the created elements
        card.appendChild(photo);
        card.appendChild(h2);
        card.appendChild(websiteurl);
        card.appendChild(adrs);
        card.appendChild(phone);
        card.appendChild(member)
        

        cards.appendChild(card);
    }) // end of forEach loop
}; // end of function expression


const gridbut = document.querySelector("#grid")
const listbut = document.querySelector("#list")
const displaybut = document.querySelector(".cards")

gridbut.addEventListener("click", () => {
	// example using arrow function
	displaybut.classList.add("grid");
	displaybut.classList.remove("list");
});

listbut.addEventListener("click", showList); // example using defined function

function showList() {
	displaybut.classList.add("list");
	displaybut.classList.remove("grid");
}