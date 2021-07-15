// Using arrow function, a + b is assumed to be returned
let sum = (a, b) => a + b;

// If there's only one parameter, you can ditch the parentheses
let isPositive = number => number >= 0;

// Syntax for functions with no parameters
let randomNumber = () => Math.random;

// Anonymous functions
document.addEventListener('click', () => console.log('Click'));

class Person {
    constructor(name) {
        this.name = name;
    }

    // 'this' in this context refers to the name of the person
    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }

    // However, 'this' in this context refers to a 'name' variable in the GLOBAL scope, which is undefined
    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob');
person.printNameArrow();
person.printNameFunction();