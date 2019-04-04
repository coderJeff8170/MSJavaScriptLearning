//technically JS does have classes - they are syntactic sugar
//they merely map to existing features of JS
//but JS remains Object oriented, relying on object prototype chains

//a class is a way to define and create objects

//there are class declarations and class expressions

//declaration - note class name is capitalized
class Truck {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }//classic constructor function
    
    print() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }//print function as a function of class Truck
}
// to create a new instance of an object based on this class:
let myTruck = new Truck ('Ford', 'F150', 1994);
myTruck.print();//Ford F150 (1994)

class WorkTruck extends Truck {
    revEngine() {
        console.log(`Grrrrrr! goes the ${this.model}`);
    }//extend Truck further with a function! Scope is only within WorkTruck
}

let myWorkTruck = new WorkTruck('Dodge', 'Ram', 2010);
myWorkTruck.print();//Dodge Ram (2010)
myWorkTruck.revEngine();
//cool! we get all the functionality from the class 'Truck', including print!
//print and revEngine are methods
//expression
/* let car = class {


} */