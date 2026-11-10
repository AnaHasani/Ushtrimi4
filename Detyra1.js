//Fatura e Librarise
const cmimiLibrit = 12.5;
const sasiaLibrit = 3;
const cmimiFletores=1.8;
const sasiaFletores = 4;

let totaliLibrit=cmimiLibrit*sasiaLibrit;
let totaliFletoreve = cmimiFletores*sasiaFletores;

let totali = totaliFletoreve+totaliLibrit;

totali += 2.5;

console.log("Fatura e librarise");
console.log("Librat: " + totaliLibrit + " euro");
console.log("Fletoret: "+ totaliFletoreve+" euro");
console.log("Transport 2.50 euro");
console.log("Totali: " + totali + " euro");