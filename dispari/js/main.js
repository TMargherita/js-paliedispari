
//1.L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt("Pari o Dispari?").toLowerCase();
//evitare che l'utente inserisca una parola diversa e continuare ed evitarlo fino a che non inserisce la parola giusta
while ( pariDispari != "pari" && pariDispari != "dispari") {
  pariDispari = prompt("Sbagliato! Inserisci Pari o Dispari")
}
console.log(pariDispari);

var utente = parseInt(prompt("scegli un numero da 1 a 5"));
//evitare che scelga un numero diverso da 1 a 5 o che non sia un numero ed evitarlo fino a che non sceglie un numero intero tra 1 e 5
while (utente > 5 || utente < 1 || isNaN(utente)) {
  utente = parseInt(prompt("Sbagliato! Inserisci un numero da 1 a 5"));
}
console.log(utente + "utente");

//2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var pc = generaNumeroRandom(1,5);
console.log(pc + "pc");

//3.Sommiamo i due numeri
var somma = utente + pc;
console.log(somma + "somma")

//4.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
var risultatoPariDispari = checkPariDispari(somma);
console.log(risultatoPariDispari);

//5.L'utente ha vinto se ha scelto pari e la somma è pari, oppure se la scelta è dispari e la somma è dispari, altrimenti perde
if (risultatoPariDispari == pariDispari) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!")
}


//funzioni
//generare numero random per pc
function generaNumeroRandom(min,max) {
  var pc = Math.floor(Math.random() * (max - min + 1)) + min;
  return pc;
}
//controllare se il numero è pari o dispari, passandolo per argomento
function checkPariDispari(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
