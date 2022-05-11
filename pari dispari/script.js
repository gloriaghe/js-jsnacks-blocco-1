//Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
// Partendo da un array di 20 numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;




const mioBottone = document.querySelector("button");
const ArrayPariHtml = document.querySelector("#arraypari");
const ArrayDispHtml = document.querySelector("#arraydispari");

 mioBottone.addEventListener("click",
    function(){
         const myarray = [];
         ArrayPariHtml.innerHTML = "";
         ArrayDispHtml.innerHTML = "";


        for (let i = 0; i < 20; i++) {
            myarray.push(Math.floor(Math.random()*1000) +1);  

            if (myarray[i] % 2 === 0) {

                ArrayPariHtml.innerHTML += myarray[i] + " " ;
                

            } else {
                ArrayDispHtml.innerHTML += myarray[i] + " " ;

            }
        }

        console.log(myarray);

})