const arr = [1, 2, 4, 9, 16, 4, 18, 49, 72, 81];

console.log(arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))));

//returns the value of the first element in the array where the predicate is true
//here, it returns the first element in the array whose index is above 2 and
// also has an integer square root
//boy howdy!!