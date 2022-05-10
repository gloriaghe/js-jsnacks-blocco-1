const arrayUno = ["parola1-1", "parola2-1","parola3-1","parola4-1","parola5-1"];
console.log(arrayUno)

const arrayDue = ["parola1-2", "parola2-2"];

const stampa = document.querySelector("ul");

for (let i = 0; i < 5; i++) {
    
    const element = `<li> ${arrayUno[i]}<ul></ul></li>`;
    stampa.innerHTML += element;
   
}

 for (let i = 0; i < 2; i++) {
     const stampaDue = document.querySelector("li>ul");
     const elementDue = `<li> ${arrayDue[i]}</li>`;
     stampaDue.innerHTML += elementDue;
     }