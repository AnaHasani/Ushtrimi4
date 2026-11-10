//Shperndarje e materialeve
let fletat = 157;
let fletePerStudent=6;

let grupet=parseInt(fletat/fletePerStudent);
let mbetja=fletat%fletePerStudent;
let kontrollimi=(grupet*fletePerStudent)+mbetja;

console.log("Grupet e plota: "+ grupet);
console.log("Fletet e mbetura: "+mbetja);
console.log("Kontrollimi: "+kontrollimi);
