

const pictures = document.querySelectorAll('img');


let Options = {};



let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;


    const URL = img.getAttribute('data-src');


    img.src = URL;
    observer.unobserve(img);

  });
}, Options);

pictures.forEach((img) => {

  observer.observe(img);
});

