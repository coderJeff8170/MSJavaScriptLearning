// function alpha() {
//     console.log(10 + 15);
//     return "omega";
// }

// let value = alpha();

// console.log(value);

//again, what's happening here is a function is assigned to a value, and the value is output to console
// the output is the result of the function, not the function itself

// function bravo() {
//     return function() {
//             console.log(8 * 10);
//     }
// }

// let myFunction = bravo();

// myFunction();

//here, you have an anonymous function RETURNED within a function called beta. beta is assigned to a value,
//which then miraculously acts just like a friggin function. la dee dah!


function charlie() {
    return function delta() {
        return "echo";
    }
}

console.log(charlie()); //this returns the inner function by name: [Function: delta]

console.log(charlie()());//you'd never do this. However, with a second set of parenthesis,
// the returned value of the inner function, delta is returned, with the string "echo"