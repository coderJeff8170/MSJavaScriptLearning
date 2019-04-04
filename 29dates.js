//date constructor function will return an object that allows us to work with dates

let today = new Date();

let jeff = new Date(`August 1, 1970 08:40:00 GMT`);
// let jeff = new Date(`1970-08-01T08:40:00`);
// let jeff = new Date(`1970, 07, 0`);

console.log(jeff);

var elapsedTime = today - jeff;
console.log(elapsedTime);//number of milliseconds since I was born!

console.log(jeff.getDate());//returned 1 on a Wednesday
//supposed to be based on Monday = 1, Sunday = 7...
console.log(jeff.getTime());
console.log(today.getTime());
//console.log(getTime()); returns not defined = must define it


