//chiedere una parola all'utente
var parola = prompt("Inserisci una parola");

//capovolgo la parola
function palindromo(parola) {
//rimuovo caratteri speciali
  var removeChar = parola.replace(/[^A-Z0-9]/ig, "").toLowerCase();
//capovolgo parola per paragone
  var checkPali = removeChar.split('').reverse().join('');

//controllo se sono Palindrome
  if (removeChar === checkPali) {
  document.write (parola + "è palindroma");

  } else {
  document.write (parola + "non è palindroma");
  }
}
//stampo la parola
