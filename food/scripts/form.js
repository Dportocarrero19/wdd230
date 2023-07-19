let urlform = "https://brotherblazzard.github.io/canvas-content/fruit.json";
let fruitjson = 0;

async function apiFetch() {

    try {
        const response = await fetch(urlform);
        if (response.ok) {
        const data = await response.json();
            
        
        let fruitlist = formurl(data);
        
        console.log(data);

        console.log(fruitlist);


        let select = document.getElementById('select1');
        let select2 = document.getElementById('select2');
        let select3 = document.getElementById('select3');

        

        fruitlist.forEach(function(fruit){
            let option = document.createElement('option');
            option.text = fruit;
            select.appendChild(option); 
            
            
            /*
            function logSubmit(event) {
                log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`+ fruit;
                event.preventDefault();
            }
              
            const form = document.getElementById("form");
            const log = document.getElementById("log");
            form.addEventListener("submit", logSubmit);
            */
        });


        fruitlist.forEach(function(fruit){
            let option = document.createElement('option');
            option.text = fruit;
            select2.appendChild(option); 

            
        });

        fruitlist.forEach(function(fruit){
            let option = document.createElement('option');
            option.text = fruit;
            select3.appendChild(option); 
        });


        
        


    } else {
        throw Error(await response.text());
    }

  } catch (error) {

      console.log(error);
  }
}
apiFetch();
function formurl(fruitdata) { 
    

 
    let fruitarray = [];
    fruitarray[0] = fruitjson.innerHTML = `${fruitdata[0].name}`;
    fruitarray[1] = fruitjson.innerHTML = `${fruitdata[1].name}`;
    fruitarray[2] = fruitjson.innerHTML = `${fruitdata[2].name}`;
    fruitarray[3] = fruitjson.innerHTML = `${fruitdata[3].name}`;
    fruitarray[4] = fruitjson.innerHTML = `${fruitdata[4].name}`;
    fruitarray[5] = fruitjson.innerHTML = `${fruitdata[5].name}`;
    fruitarray[6] = fruitjson.innerHTML = `${fruitdata[6].name}`;
    fruitarray[7] = fruitjson.innerHTML = `${fruitdata[7].name}`;
    fruitarray[8] = fruitjson.innerHTML = `${fruitdata[8].name}`;
    fruitarray[9] = fruitjson.innerHTML = `${fruitdata[9].name}`;
    fruitarray[10] = fruitjson.innerHTML = `${fruitdata[10].name}`;
    fruitarray[11] = fruitjson.innerHTML = `${fruitdata[11].name}`;
    fruitarray[12] = fruitjson.innerHTML = `${fruitdata[12].name}`;
    fruitarray[13] = fruitjson.innerHTML = `${fruitdata[13].name}`;
    fruitarray[14] = fruitjson.innerHTML = `${fruitdata[14].name}`;
    fruitarray[15] = fruitjson.innerHTML = `${fruitdata[15].name}`;
    fruitarray[16] = fruitjson.innerHTML = `${fruitdata[16].name}`;
    fruitarray[17] = fruitjson.innerHTML = `${fruitdata[17].name}`;
    fruitarray[18] = fruitjson.innerHTML = `${fruitdata[18].name}`;
    fruitarray[19] = fruitjson.innerHTML = `${fruitdata[19].name}`;
    fruitarray[20] = fruitjson.innerHTML = `${fruitdata[20].name}`;
    fruitarray[21] = fruitjson.innerHTML = `${fruitdata[21].name}`;
    fruitarray[22] = fruitjson.innerHTML = `${fruitdata[22].name}`;
    fruitarray[23] = fruitjson.innerHTML = `${fruitdata[23].name}`;
    fruitarray[24] = fruitjson.innerHTML = `${fruitdata[24].name}`;
    fruitarray[25] = fruitjson.innerHTML = `${fruitdata[25].name}`;
    fruitarray[26] = fruitjson.innerHTML = `${fruitdata[26].name}`;
    fruitarray[27] = fruitjson.innerHTML = `${fruitdata[27].name}`;
    fruitarray[28] = fruitjson.innerHTML = `${fruitdata[28].name}`;
    fruitarray[29] = fruitjson.innerHTML = `${fruitdata[29].name}`;
    fruitarray[30] = fruitjson.innerHTML = `${fruitdata[30].name}`;
    fruitarray[31] = fruitjson.innerHTML = `${fruitdata[31].name}`;
    fruitarray[32] = fruitjson.innerHTML = `${fruitdata[32].name}`;
    fruitarray[33] = fruitjson.innerHTML = `${fruitdata[33].name}`;
    fruitarray[34] = fruitjson.innerHTML = `${fruitdata[34].name}`;
    fruitarray[35] = fruitjson.innerHTML = `${fruitdata[35].name}`;
    fruitarray[36] = fruitjson.innerHTML = `${fruitdata[36].name}`;
    fruitarray[37] = fruitjson.innerHTML = `${fruitdata[37].name}`;
    fruitarray[38] = fruitjson.innerHTML = `${fruitdata[38].name}`;
    return fruitarray;
   
    
}


/* Form Submit*/


async function getsel1(){

    try {
        const response = await fetch(urlform);
        if (response.ok) {
        const data = await response.json();


        let sel = document.querySelector('#select1');
        let output = sel.value;
        

        let fruitlist = formurl(data);

        

        fruitlist.forEach((fruit)=> {
            if(output === fruit){
                let index = fruitlist.indexOf(fruit);
                
                function cal(fruitdata){
                    return fruitjson.innerHTML = `${fruitdata[index].nutritions.calories}`
                }


                let calories = cal(data);
                console.log(calories);
                document.getElementById('calories').innerHTML = calories;
               
            }

        });



    } else {
        throw Error(await response.text());
    }

  } catch (error) {

      console.log(error);
  }

}
