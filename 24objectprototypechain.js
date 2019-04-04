//classes of objects can be made more specific, so there are 'prototypes'
//they have properties inherited from their classes, but they have more
//specific properties

//JavaScript doesn't have classes per se, Objects and Object constructors
//sort of take their places. Object based programming.

//Prototype chains! OLOO - objects liking to other objects (referencing?)

let originalCar =  {
    make: "honda",
    model: "civic",
    year: 1994
}
let firstCar = originalCar;
console.log(firstCar);//logs object with all key/value properties 
//{ make: 'honda', model: 'civic', year: 1994 }
let newCar = Object.create(originalCar);//creates newCar object referencing originalCar
console.log(newCar.make);//honda

console.log(Object.getPrototypeOf(newCar));//shows firstCar obj
//{ make: 'honda', model: 'civic', year: 1994 }

let myPrototype = Object.getPrototypeOf(newCar);//assigns prototype
console.log(myPrototype.make);//logs honda

originalCar.doors = 2;//assigns 'doors: 2' property to originalCar

console.log(originalCar.hasOwnProperty('doors'));//true, we just added it
console.log(newCar.hasOwnProperty('doors'));//false why?? - it's a prototype unaffected by 
console.log(firstCar.hasOwnProperty('doors'));//true
//when you add a property to original object prototype, it affects all others?
console.log(originalCar);
originalCar.doors = 4;
console.log(newCar);
console.log(firstCar);
console.log(typeof(newCar));
//watch this one again - understand prototype chains!!




