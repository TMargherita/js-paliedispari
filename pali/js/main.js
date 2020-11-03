//1.Chiedere all'utente di inserire una parola
var parola = prompt("Scegli una parola");

//2.Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola){

  var removeChar = parola.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  var checkPalindrome = removeChar.split('').reverse().join('');

  if(removeChar === checkPalindrome) {
    console.log(parola + " " + "è palindroma");
  } else{
    console.log(parola + " " + "non è palindroma, mi dispiace!")
  }
}

palindroma(parola);
