let form = document.getElementById("form");
function submitForm(event){
    event.preventDefault();
}
form.addEventListener('submit',submitForm);


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

        
        let name = document.getElementById("name").value;
        document.getElementById('sub-name').innerHTML =name;

        let email = document.getElementById("email").value;
        document.getElementById('sub-email').innerHTML =email;
        let phone = document.getElementById("phone").value;
        document.getElementById('sub-phone').innerHTML =phone;
        

        


        let sel = document.querySelector('#select1');
        let sel2 = document.querySelector('#select2');
        let sel3 = document.querySelector('#select3');

        let output = sel.value;
        let output2 = sel2.value;
        let output3 = sel3.value;
        let fruitlist = formurl(data);
        fruitlist.forEach((fruit3)=> {
            fruitlist.forEach((fruit2)=> {
                fruitlist.forEach((fruit)=> {
                    if(output === fruit && output2 === fruit2 && output3 ===fruit3){
                        let index = fruitlist.indexOf(fruit);
                        let index2 = fruitlist.indexOf(fruit2);
                        let index3 = fruitlist.indexOf(fruit3);
                        
                        /*Calories */
                        function cal(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index].nutritions.calories}`;
                        }
                        function cal2(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index2].nutritions.calories}`;
                        }
                        function cal3(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index3].nutritions.calories}`;
                        }

                        let calories = cal(data);
                        let calories2 = cal2(data);
                        let calories3 = cal3(data);
                        
                        let totalcal = Number(calories) + Number(calories2) + Number(calories3);
                        
                        document.getElementById('calories').innerHTML = totalcal;

                        /*Sugar */
                        function sugr1(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index].nutritions.sugar}`;
                        }
                        function sugr2(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index2].nutritions.sugar}`;
                        }
                        function sugr3(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index3].nutritions.sugar}`;
                        }

                        let sugar = sugr1(data);
                        let sugar2 = sugr2(data);
                        let sugar3 = sugr3(data);
                        let totalsugar = Number(sugar) + Number(sugar2) + Number(sugar3);
                        
                        document.getElementById('sugar').innerHTML = Math.round(totalsugar * 10) / 10;

                        /* Fats */
                        function fats1(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index].nutritions.fat}`;
                        }
                        function fats2(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index2].nutritions.fat}`;
                        }
                        function fats3(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index3].nutritions.fat}`;
                        }

                        let fat = fats1(data);
                        let fat2 = fats2(data);
                        let fat3 = fats3(data);
                        let totalfat = Number(fat) + Number(fat2) + Number(fat3);
                        
                        document.getElementById('fat').innerHTML = Math.round(totalfat * 10) / 10;

                        /* Proteins */
                        function proteins1(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index].nutritions.protein}`;
                        }
                        function proteins2(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index2].nutritions.protein}`;
                        }
                        function proteins3(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index3].nutritions.protein}`;
                        }

                        let protein = proteins1(data);
                        let protein2 = proteins2(data);
                        let protein3 = proteins3(data);
                        let totalprotein = Number(protein) + Number(protein2) + Number(protein3);
                        
                        document.getElementById('protein').innerHTML = Math.round(totalprotein * 10) / 10;

                        /* Carbohydrates */
                        function Carbohydrates1(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index].nutritions.carbohydrates}`;
                        }
                        function Carbohydrates2(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index2].nutritions.carbohydrates}`;
                        }
                        function Carbohydrates3(fruitdata){
                            return fruitjson.innerHTML = `${fruitdata[index3].nutritions.carbohydrates}`;
                        }

                        let carbs = Carbohydrates1(data);
                        let carbs2 = Carbohydrates2(data);
                        let carbs3 = Carbohydrates3(data);
                        let totalcarbs = Number(carbs) + Number(carbs2) + Number(carbs3);
                        
                        document.getElementById('carbohydrates').innerHTML = Math.round(totalcarbs * 10) / 10;
                    }
                    
                });
            });
        });













    } else {
        throw Error(await response.text());
    }

  } catch (error) {

      console.log(error);
  }

}
