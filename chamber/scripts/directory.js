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
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let photo = document.createElement('img');
        
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birth.textContent = `Date of Birth: ${Businesses.address}`;
        place.textContent = `Place of Birth: ${prophet.phonenumber}`;
        // Build the image portrait by setting all the relevant attribute
        photo.setAttribute('src', Businesses.image);
        photo.setAttribute('alt',`${Businesses.address}`);
        photo.setAttribute('alt',`${prophet.phonenumber}`);
        photo.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '340');
        photo.setAttribute('height', '440');
        
        
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(photo);

        cards.appendChild(card);
    }) // end of forEach loop
}; // end of function expression