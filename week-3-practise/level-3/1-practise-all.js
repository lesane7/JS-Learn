/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, true, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tryT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tytT3729."];

let er1 = /[0-9]/;
let er2 = /[a-z]/;
let er3 = /[A-Z]/;
let er4 = /[!, #, $, %, .]/;

PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tryT3729."];


PasswordValidationResult = password.map(item => er1.test(item) && er2.test(item) && er3.test(item) && item.length > 5); //valida si en el rango de password contiene los caracteres y retorna booleano

PasswordValidationResult2 = password.map(item => er1.test(item) && er2.test(item) && er3.test(item) && item.length > 5 && er4.test(item)); 

PasswordValidationResult3 = password.map(item => er1.test(item) && er2.test(item) && er3.test(item) && item.length > 5 && er4.test(item) && !PreviousPassword.includes(item)); 
 

console.log(PasswordValidationResult);
console.log(PasswordValidationResult2);
console.log(PasswordValidationResult3);