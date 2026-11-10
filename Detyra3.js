//Buxheti i nje udhetimi
let akomodimi = 96; 
let transporti = 42; 
let ushqimi = 57;

let totali=akomodimi+transporti+ushqimi;
let perPerson=totali/3;

let buxheti=80;
let parateEMbetura=buxheti-perPerson;

console.log("Kostoja totale e udhetimit eshte: "+totali+" euro");
console.log("Secili person duhet te paguaje "+perPerson+" euro");
console.log("Secilit person i mbeten: "+ parateEMbetura+" euro");