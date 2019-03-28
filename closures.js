//allows you to associate data with a function, then allows you to use that function with 
//that data baked into it like, permanently.
function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

let jeff = sayHello('Jeff');//data association occurs here
// the name parameter 'Jeff' is permanently associated with sayHello()
// but only within the variable jeff - the binding process
let sophia = sayHello('Sophia');

jeff();
sophia();// we can do the same thing with other strings
// so instead of writing the same function over and over, we call the function
// assigned to the variable.

//variable 'name' still reserved!
