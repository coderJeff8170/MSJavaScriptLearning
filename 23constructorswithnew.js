//classic object construction using the 'new' keyword
//syntax as follows:
//define your function, Capitalize it's name as it's gonna be an
//object template?
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
//note `this` binding make model and year to the function.

let myCar = new Car('honda', 'civic', 1994);

console.log(myCar);

//the 'new' keyword makes ANY named function a constructor call!
//it makes an empty object which 'this' binds the parameters to
//if the function doesn't work that way, it'll ignore new...

function MyFunction () {
    console.log('I am a simple function');
    console.log(typeof MyFunction);//function
}

let jeffsFunction = new MyFunction();//constructing new object?

console.log(typeof jeffsFunction);//object - well looky there!
//it's not a function reference anymore and if you call jeffsFunction();
//it'll throw an error.
//the only thing you can do is attach properties and values to it
//that's the point of the new keyword - as an object constructor.

console.log(jeffsFunction);// returns MyFunction {} - refers to an object!
//console.log(jeffsFunction());//returns 'not a function'