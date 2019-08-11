/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var changeColorFondo = document.querySelector('#bgrChangeBtn');
changeColorFondo.addEventListener("click", function() {
    let color = "green"; 
    document.body.style.backgroundColor = color;
});

console.log(changeColorFondo);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var buttonAlert = document.querySelector('#alertBtn');
buttonAlert.addEventListener('click', function() {
    alert ("Thanks for visiting Bikes for Refugees!")
} )


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let buttonReadMore = document.querySelector('#addTextBtn'); //inner es para pintar en el html
let textBox = document.querySelector('.jumbotron'); //appendchild es para crearlo pero no lo //muestra, queda en memoria.
let createParagraph = document.createElement('p'); 
buttonReadMore.addEventListener('click', function(){
textBox.appendChild(createParagraph);
createParagraph.innerHTML = 'Read more below.';
});


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let mayorTamano = document.querySelector('#largerLinksBtn');
// let click = document.querySelectorAll('.article-title a');

mayorTamano.addEventListener('click', sizes)

function sizes() {
    let click = document.querySelectorAll('.article-title--sidebar');
    let i;
    for (i = 0; i < click.length; i++) {
        click[i].style.fontSize = '2.5em'
    }
}

// function sizes() {
//     [].forEach.call(click, (e) => {
//         e.style.fontSize = '2.6em'
//     })
// }