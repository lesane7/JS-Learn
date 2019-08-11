/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

//var longNameThatStartsWithA = findLongNameThatStartsWithA(names);
//parámetro va a representar la variable names
var longNameThatStartsWithA = names.find(EncontreElNombreConAmayuscula)

function EncontreElNombreConAmayuscula(LosNombres) { 
 
  return LosNombres[0] === "A" && LosNombres.length > 7;
 }
 // los nombres pasan por la funcion'EncontreElNombreConAmayuscula' Return y ejecuta, verifica que cumpla
console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
