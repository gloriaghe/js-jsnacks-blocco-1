//crea un array che parte vuoto ma viene riempito automaticamente  di 10 numeri casuali 
//da 1 a 1000 generati dal pc, possono esserci anche doppioni;


const mioBottone = document.querySelector("button");
const ArrayHtml = document.querySelector("#array");

mioBottone.addEventListener("click",
    function(){
        const myarray = [];

        for (let i = 0; i<10; i++) {
            myarray.push(Math.floor(Math.random()*1000) +1);   
        }

        ArrayHtml.innerHTML = "I tuoi 10 numeri random sono: " + myarray ;
        
        console.log(myarray);

    })