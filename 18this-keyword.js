/* let car =  {
    make: "bmw",
    model: "745li",
    year: 2010,
    getPrice: function() {
        //perform some calc
        return 5000;
    },
    printDescription: function() {
    console.log(`${this.make} ${this.model}`);
    }
}

car.printDescription(); */
//alt shift A - shiver me timbers, that comments out a whole code block

//`this` represents the way a function is called.
// the way a function is called determines what `this` represents

/* function first() {
    return this;
}

console.log(first() === global);//true
 */

// this is Node's global object because that's where the first method was called

/* function second() {
    'use strict';

    return this;
}

console.log(second() === global);//false
console.log(second() === undefined);//true */

//see how ^^ strict use of javascript tells us that this hasn't been 
//bound to anything yet

/* let myObject = { value: 'My Object' }

// value is set on the global object
global.value = 'Global object';

function third() {
    return this.value;
} */
/* 
console.log(third());//logs the value of the global scope which is 'Global object'
console.log(global);//logs the whole node object, the last property and value of which are
//interestingly, value: 'Global object'. setting global.value to 'Global object' binds nodes 'value'
// to `this`, which is global. Jesus christ! */

/* console.log(third.call(myObject));
console.log(third.apply(myObject, ['bob']));//both these will log 'My Object' */

//so both call and apply allow you to specify what you want to represent `this`
//The difference is in how additional arguments to the function are sent.
//whatever that means!






