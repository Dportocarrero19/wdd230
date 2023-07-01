const onetitle = document.querySelector('.spotlight-title-1');
const oneimage = document.querySelector('.spotlight-image-1');
const onephrase = document.querySelector('.spotlight-phrase-1');
const onephone = document.querySelector('.spotlight-phone-1');
const onewebsite = document.querySelector('.spotlight-website-1');

const twotitle = document.querySelector('.spotlight-title-2');
const twoimage = document.querySelector('.spotlight-image-2');
const twophrase = document.querySelector('.spotlight-phrase-2');
const twophone = document.querySelector('.spotlight-phone-2');
const twowebsite = document.querySelector('.spotlight-website-2');

const threetitle = document.querySelector('.spotlight-title-3');
const threeimage = document.querySelector('.spotlight-image-3');
const threephrase = document.querySelector('.spotlight-phrase-3');
const threephone = document.querySelector('.spotlight-phone-3');
const threewebsite = document.querySelector('.spotlight-website-3');

let min = 0;
let max = 7;
let stopExtract = 3;

var spotnums = [];

for (let x = 0; x < stopExtract; x++) {
  let o = Math.floor(Math.random() * max) + min;

  let find = spotnums.includes(o);

  if(find === false) {
    spotnums.push(o);

  } else {
    while(find === true) {
      o = Math.floor(Math.random() * max) + min;

      find = spotnums.includes(o);

      if(find === false) {
        spotnums.push(o)
      }
    }


  }


}
console.log(spotnums)
let spotlight_one = spotnums[0];
let spotlight_two = spotnums[1];
let spotlight_three = spotnums[2];



const urlj = 'https://dportocarrero19.github.io/wdd230/chamber/json/data.json';
async function apiFetch() {
    try {
        const response = await fetch(urlj);
        if (response.ok) {
          const data = await response.json();
  
          console.log(data); 
  
          displayResult(data);
  
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
  
        console.log(error);
      }
    }
apiFetch();




function displayResult(Business) {
  onetitle.innerHTML = `${Business.Businesses[spotlight_one].name}`;
  const iconsrc = `https://dportocarrero19.github.io/wdd230/chamber/images/${Business.Businesses[spotlight_one].icon}.jpg`;
  oneimage.setAttribute('src', iconsrc);
  oneimage.setAttribute('alt', "brand icon images");
  oneimage.setAttribute('width','100px');
  onephrase.innerHTML = `${Business.Businesses[spotlight_one].phrase}`;
  onephone.innerHTML = `${Business.Businesses[spotlight_one].phonenumber}`;
  onewebsite.innerHTML = `${Business.Businesses[spotlight_one].websiteurl}`;
    
  twotitle.innerHTML = `${Business.Businesses[spotlight_two].name}`;
  const iconsrc2 = `https://dportocarrero19.github.io/wdd230/chamber/images/${Business.Businesses[spotlight_two].icon}.jpg`;
  twoimage.setAttribute('src', iconsrc2);
  twoimage.setAttribute('alt', "brand icon images");
  twoimage.setAttribute('width','100px');
  twophrase.innerHTML = `${Business.Businesses[spotlight_two].phrase}`;
  twophone.innerHTML = `${Business.Businesses[spotlight_two].phonenumber}`;
  twowebsite.innerHTML = `${Business.Businesses[spotlight_two].websiteurl}`;

  threetitle.innerHTML = `${Business.Businesses[spotlight_three].name}`;
  const iconsrc3 = `https://dportocarrero19.github.io/wdd230/chamber/images/${Business.Businesses[spotlight_three].icon}.jpg`;
  threeimage.setAttribute('src', iconsrc3);
  threeimage.setAttribute('alt', "brand icon images");
  threeimage.setAttribute('width','100px');
  threephrase.innerHTML = `${Business.Businesses[spotlight_three].phrase}`;
  threephone.innerHTML = `${Business.Businesses[spotlight_three].phonenumber}`;
  threewebsite.innerHTML = `${Business.Businesses[spotlight_three].websiteurl}`;



}



