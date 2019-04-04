//Null
//a variable that points to nothing when an instance of an object was expected

let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);
console.log(result);// returns null

//console.log(typeof result); //returns object - when it should return the primitive, null.
//a JavaScript bug that wont be fixed because the internets depend on it!!

if (result === null) {
    console.log('no match was found');
}

//null is not zero, undefined or empty string, object is expected, but no value set

