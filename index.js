// Hello
console.log('Hello World');

// Declaring single variable
let name = 'Ed';

// Declaring multiple variables
let firstName = 'Johnny', lastName = 'Depp', email = 'johnnydepp@gmail.com';

// Declaring const
const interestRate = 0.3;

let age = 30; // Number literal
let isApproved = true; // Boolean literal
let preference = undefined;
let selectedColour = null;

// Creating an object
let person = {
    name: 'John',
    age: 30
};

person.name = 'Bruh Manix';

// Bracket notation can take variable values
let selection = 'name';
person[selection] = 'Brah Bruh';

// Trying out arrays
// You can have elements of different types in one array
let selectColours = ['red', 'blue'];
selectColours[2] = 'green';
selectColours[3] = 1;

function greet(name, surname){
    console.log('Hello, ' + name + ' ' + surname + '!');
}

function square(number){
    return number * number;
}

console.log(name);
console.log(person.name);
console.log(selectColours);
greet('Eddie', 'Cai');
greet('Mark', 'Dooferton');
console.log(square(3));