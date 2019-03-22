// objects vs arrays:

let car =  {
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

car.printDescription();
console.log(car.year);

//console.log(car['year']); < same as ^, technically correct, but don't do it yet
//method is a function that belongs to or is defined inside an object
//remember to put commas after every item in an object!!

var anotherCar = {
}
anotherCar.whatever = 'Jeff'
console.log(anotherCar.whatever);
//can add properties willy nilly with dot notation, outside the obj itself!

var a = {
    myProperty: { b: `hi`}
};
console.log(a.myProperty.b);// prints hi
//object with a property, with an object that has a property ha!

var c = {
    myProperty: [
        {d: 'this'},
        {e: 'can'},
        {f: 'get'},
        {g: 'crazy'},

    ]
}
console.log(c.myProperty);