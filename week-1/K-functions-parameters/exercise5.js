// Declare your function here
function createLongGreeting(greeting, age) {
    var message = 'Hello, my name is '+greeting+ ' '+"and I'm "+ age+ ' years old';
    return message;
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
