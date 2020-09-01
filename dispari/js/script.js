

//1. L'utente sceglie se pari o Dispari
var utente = prompt("Scegli: pari o dispari?");
//2. L'utente sceglie un numero da 1 a 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//3. genera un numero random da 1 a 5 per il pc (funzione)
var numeri = [];
//funziona che genera numeri random tra mmin e max
function generaNumeroRandom (numMin, numMax) {
  var numero = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
  return numero;
}

while (numeri.length < 5) {
  var numCasuale = generaNumeroRandom (1, 5);
}
console.log(numCasuale);
//4. somma del numero utente + pc, stabilendo se è pari o dispari (funzione)
//5. comunica chi ha vinto
