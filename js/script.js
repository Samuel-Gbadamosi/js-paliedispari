// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// var numero;
// //

var choice =  prompt("inserisci un pari o dispari");
var numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
var numComputer = randomNumber(1, 5);
var total = numeroUtente + numComputer;
var recheck = control(total);

console.log(choice);
console.log(numeroUtente);
console.log(numComputer);



if (recheck==true && choice=="pari" ) {
  console.log( "e un numero pari quindi  hai vinto");
} else if (recheck==false && choice=="dispari"){
  console.log("e un numero dipari quindi  hai vinto");
} else if (recheck==true && choice=="dispari"){
  console.log("numero pari ha perso");
} else if (recheck==false && choice=="pari"){
  console.log("numero dispari hai perso");
}



function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function control(total) {

  if (total % 2 == 0){
   return true;
 }
   return false;
 }
