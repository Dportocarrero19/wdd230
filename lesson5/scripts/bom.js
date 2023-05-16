const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {

    const scripture = input.value;
    input.value = '';


    const listli = document.createElement('li');
    const listtxt = document.createElement('span');
    const listdelete = document.createElement('button');

    listli.appendChild(listtxt);
    listtxt.textContent=scripture;
    listli.appendChild(listdelete);
    listdelete.textContent='❌';
    list.appendChild(listli);

    listdelete.addEventListener('click', function() {
        list.removeChild(listli);
    });

    input.focus();

});