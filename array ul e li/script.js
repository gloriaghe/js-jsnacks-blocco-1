const arrayUno = ["parola1-1", "parola2-1","parola3-1","parola4-1","parola5-1"];
const arrayDue = ["parola1-2", "parola2-2"];

const stampa = document.querySelector("ul");


for (let i = 0; i < arrayUno.length; i++) {
    
    const creatoli = document.createElement("li");
    const newContent = arrayUno[i];
    creatoli.append(newContent);
    const creatoul =document.createElement("ul");
    creatoli.append(creatoul);

    for (let j = 0; j < arrayDue.length; j++) {
        const creatoliDue = document.createElement("li");
        const newContentDue = arrayDue[j];
        creatoliDue.append(newContentDue);
        creatoul.append(creatoliDue);
       }

    stampa.append(creatoli);
}


