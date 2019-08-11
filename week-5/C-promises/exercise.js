/*
  Promises
  ---------------------------------
  Open index.html in your browser
*/

/*
  EXERCISE 1
  =======

  Insert the result of promise1 into the #exercise1 element. Hint: .then()

  EXPECTED RESULT: The #exercise1 element has textContent = "A Promising
  Promise"
*/
/* const pElement = document.querySelector('#exercise1');
let food = 'Hamburguesa';
let valor = 'Init';
functionA(food).then(response =>{
  console.log("It's Ready");
  valor = response;
  pElement.innerHTML = response;
}).catch(response =>{
  console.log('paila');
  pElement.innerHTML = res 
});
pElement.innerHTML = 'Adios';
console.log(pElement);

function exercise1() {
  var promise1 = resolvedPromise()
}

function functionA(food) {
  console.log('Now Begins!');
  return new Promise((resolve, reject) => {
    setTimeout(() => 
    {
      if (food === 'Hamburguesa') {
        resolve('Enjoy the burger');
      }else{
        reject('No there')
      }
    }
  , 2000)
}
)
} */

let ejercicio1 = document.querySelector("#exercise1");
function exercise1() {
  let promise1 = resolvedPromise().then(nombre => {
    ejercicio1.innerHTML = nombre;
  });
}

/*
  EXERCISE 2
  =======

  Insert the result of promise2 into the #exercise2 element. Hint: .catch()

  EXPECTED RESULT: The #exercise2 element has textContent = "A Unpromising
  Promise"
*/
let ejercicio2 = document.querySelector("#exercise2");
function exercise2() {
  let promise2 = rejectedPromise().catch(nombre2 => {
    ejercicio2.innerHTML = nombre2;
  });
}

/*
  EXERCISE 3
  =======

  Insert the result of promise3 into the #exercise3 element. Notice how it
  takes longer than the others to finish

  EXPECTED RESULT: The #exercise3 element has textContent = "A Longer Promise"
*/
let ejercicio3 = document.querySelector("#exercise3");
function exercise3() {
  let promise3 = delayedPromise().then(nombre3 => {
    ejercicio3.innerHTML = nombre3;
  });
}

/*
  EXERCISE 4
  =======

  Take the result of promise4 and concatenate your name onto the end of it.
  Then return your concatenated string as a promise. Finally insert the result
  of your promise and insert it into the #exercise4 element

  EXPECTED RESULT: The #exercise4 element has textContent = "A Promise from:
  YOUR NAME"
*/
let ejercicio4 = document.querySelector("#exercise4");
function exercise4() {
  let promise4 = concatPromise().then(nombre4 => {
    ejercicio4.innerHTML = nombre4 + "Elkin Waldo";
  });
}

/*
  EXERCISE 5 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that resolves with the string "Hello Promises!".
  Take the result of your promise and insert the it into the #exercise5
  element

  EXPECTED RESULT: The #exercise5 element has textContent = "Hello Promises!"
*/
let ejercicio5 = document.querySelector("#exercise5");
function exercise5() {
  let promise5 = newPromise().then(nombre5 => {
    ejercicio5.innerHTML = nombre5;
  }); // Write your implementation here
}

/*
  EXERCISE 6 (Stretch Goal)
  =======
  Start this exercise if you have completed all of the other exercises and
  you understand them

  Create a new Promise that rejects with the string "Something went wrong!".
  Take the result of your promise and insert the it into the #exercise6
  element

  EXPECTED RESULT: The #exercise6 element has textContent = "Something went
  wrong!"
*/
let ejercicio6 = document.querySelector("#exercise6");
function exercise6() {
  let promise6 = newPromise2().catch(nombre6 => {
    ejercicio6.innerHTML = nombre6;
  }); // Write your implementation here
}


// 
// -------------------------------------
// 
// DON'T EDIT THE FUNCTIONS BELOW!
// THEY ARE PROVIDED FOR YOU
//
// -------------------------------------
//
function resolvedPromise() {
  return Promise.resolve('A Promising Promise')
}

function rejectedPromise() {
  return Promise.reject('A Unpromising Promise')
}

function delayedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('A Longer Promise')
    }, 2000)
  })
}

function concatPromise() {
  return Promise.resolve('A Promise from: ')
}

function newPromise() {
  return Promise.resolve("Hello Promises!");
}

function newPromise2() {
  return Promise.reject("Something went wrong!");
}

exercise1()
exercise2()
exercise3()
exercise4()
exercise5()
exercise6()
