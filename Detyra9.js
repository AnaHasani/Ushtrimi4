//Fatura me te dhena tekstuale
let cmimi1="19.90";
let cmimi2="8.50";
let sasia1=2;
let sasia2=3;

let vlera1=Number(cmimi1);
let vlera2=Number(cmimi2);

let totali1=vlera1*sasia1;
let totali2=vlera2*sasia2;

let shuma = totali1+totali2;
let tarifa = shuma*0.1;
console.log("Shuma fillestare: "+ shuma);
console.log("Tarifa 10%: " + tarifa);

shuma =+ tarifa;
console.log("Shuma perfundimtare: "+ shuma.toFixed(2));
console.log("Tipi i vleres: "+ typeof shuma);

