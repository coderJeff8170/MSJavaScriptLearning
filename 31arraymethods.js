let names = [ 'jeff', 'marley', 'buddy', 'nilla' ];
let others = [ 'jenn', 'sophia', 'ella', 'joan'];

let lost = [ 4, 8, 15, 16, 23, 42 ];
let fibonacci = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ];

var combine = lost.concat(fibonacci);//concat() - adds argument array to called array
console.log(combine);
//beats pushing

console.log(fibonacci.join('*'));
//join() - returns string from array with elements separated by the parameter.

console.log(lost.shift()); //returns an element removed from front of array
console.log(lost);// notice 4 is missing now. original array altered!

lost.unshift(1, 2, 3, 4); //adds parameter elements to front of array
console.log(lost); //notice array has 1, 2, 3, 4 added to front. original array altered!

console.log(names);
console.log(names.reverse());//reverse order
console.log(names.sort());//sorts alphabetically
console.log(names);//original array altered!

console.log(others.indexOf('joan'));//obvious but useful!
console.log(others.lastIndexOf('sophia'));

console.log(combine);
console.log(combine.lastIndexOf(1));//remember, index zero based and from start of array!

//map

var filtered = combine.filter((x) => { if (x <= 15) return x; } );
console.log(filtered);//returns any element in array combine that is 15 or less

names.forEach((name) => console.log(`howdy ${name}`));
//put value of name from obj names in string without an iteration loop

console.log(filtered.every((num) => num < 10 ));
console.log(filtered.every((num) => num < 16 ));
//runs callback fn to see if every number in array 'filtered' meets the criteria

console.log(fibonacci.some((num) => num > 50 ));
console.log(fibonacci.some((num) => num > 100 ));
//runs callback fn to see if any number in array fibonacci meets criteria..






