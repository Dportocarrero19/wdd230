const titleh2 = document.querySelector('.spotlight-h2');
const titleimage = document.querySelector('.spotlight-image');


const urlj = 'https://dportocarrero19.github.io/wdd230/chamber/json/data.json';
async function apiFetch() {
    try {
        const response = await fetch(urlj);
        if (response.ok) {
          const data = await response.json();
  
          console.log(data); 
  
          displayResults(data);
  
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
  
        console.log(error);
      }
    }
apiFetch();



function displayResults(Business) {
    titleh2.innerHTML = `${Business.Businesses[1].name}`;

    titleimage.innerHTML = `${Business.Businesses[1].address}`;
    const iconsrc = `https://dportocarrero19.github.io/wdd230/chamber/images/${Business.Businesses[1].icon}.jpg`;

    titleimage.setAttribute('src', iconsrc);
    titleimage.setAttribute('alt', "brand icon images")

}

