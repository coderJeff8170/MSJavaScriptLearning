//Arrow Functions are just a shorthand way of writing regular functions
//useful when you want a one-line function and the code block is short

/* let hi = function() {
    console.log('howdy');
} */
//can be rewritten as:
/* let hi = () => {console.log('howdy');}
hi(); */

/* let hi = (name) => {console.log(`howdy ${name}`)};
hi('jeff'); */
//^^ string added: fun stuff, right?

/* let add = (a, b) => {return a + b };
console.log(add(6, 4)); */
//parameters or args

//they're really useful for iterating over an array!

/* let names = [ 'jeff', 'jenn', 'marley', 'sophia' ];
names.map( (name) => { console.log(`howdy ${name}`) }); */
//iterates howdy to every name
//map calls a defined callback function on each iteration

/* let names = [ 'jeff', 'jenn', 'marley', 'sophia' ];
let i = 0;
names.map( (name) => { i++; console.log(`howdy ${name} ${i}!`) }); */
//count incrementors added!

let names = [ 'jeff', 'jenn', 'marley', 'sophia' ];
var transformed = names.map((name) => { return (`howdy ${name}!`) });
console.log(transformed);
//returns new array with howdy and ! added to each name!
