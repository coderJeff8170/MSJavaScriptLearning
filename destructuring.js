//destructuring is unpacking variables from objects and placing them somewhere useful,
//like an array..

let a, b, c, d, e, f, g, h;

let names = [ 'jeff', 'marley', 'jenn', 'sophia', 'buddy', 'nilla', 'sallie', 'waylan' ];

/* [a, b, c, d, e, f, g, h] = names;

console.log(a); //all of these will log the name associated with the index for the 
                //alphabetical letter in array 'names' associated with them;
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

//pretty cool, eh? */

/* let others;

[a, b, ...others] = names;

console.log(a);         //same as before, but..
console.log(b);
console.log(others);    //the spread operator will put the rest of 'names'
console.log(names);    //into an array called 'others', while leaving names intact.  */

//also pretty cool, eh??

let year, model;
/* let car = {          //here we make an object, but we change it below to destructure itvv
    make: 'honda',
    model: 'civic',
    year: 1994,
    value: 2000,
} */

({year, model} = {
    make: 'honda',
    model: 'civic',
    year: 1994,
    value: 2000,
});

console.log(year); // 1994
console.log(model);//   'civic'
console.log(year, model); //1994 'civic'
console.log({year, model}); //{ year: 1994, model: 'civic' }
//console.log(value); not defined!

