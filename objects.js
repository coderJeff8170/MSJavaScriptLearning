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
//format referred to as an object graph

let carLot = [
    { year: 1994, make: "Honda", model: "Civic" },
    { year: 2017, make: "Honda", model: "Fit" },
    { year: 2011, make: "Scion", model: "xB" },
    { year: 1984, make: "Honda", model: "Shadow" },
];
//an array of objects

let contacts = {
    owners: [
        { firstName: "Jeffrey", lastName: "Andrews", phoneNumbers: ['(704) 553-1911', '(704) 945-0173'] },
        { firstName: "Jennifer", lastName: "Carson", phoneNumbers: ['(704) 553-1911', '(704) 945-0173'] },
        { firstName: "Sophia", lastName: "Andrews", phoneNumbers: ['(704) 553-1911', '(704) 945-0173'] },
    ],
    pets: [
        { firstName: "Marley", lastName: "Carson", phoneNumbers: ['(704) 553-1911', '(704) 945-0173'] },
        { firstName: "Buddy", lastName: "Carson", phoneNumbers: ['(704) 553-1911'] },
        { firstName: "Nilla", lastName: "Carson", phoneNumbers: ['(704) 553-1911'] },
    ],
};
//an object of an array of objects?

//notice the similarity to JSON format to object literals. Look up the differences.
//JavaScript has a built in function to let you work with JSON, obviously.