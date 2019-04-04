//string primitive is mapped to the string built in native object with a rich set o methods
let first = 'knowledge is power, but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try.';
let third = '4, 8, 15, 16, 22, 32';

//You can call these methods on string literals
console.log('jeff loves you'.toUpperCase());

let mySplit = third.split(', ');//don't forget that space or the array will include them in the elements.
console.log(mySplit);

let mySlice = first.slice(13, 18);
console.log(mySlice);

let mySubstr = first.substr(13, 5);//start index same, 
//but number of indexes instead of index value for end
console.log(mySubstr);

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);// returns true, as that string does end with 'try.'

let myStartswith = second.startsWith('Do');
console.log(myStartswith);// returns true

let myInclude = second.includes('There');
console.log(myInclude);// returns true

let myRepeat = 'Ha '.repeat(3);
console.log(myRepeat);

let myTrim = '      bloated     ';
console.log(myTrim);
console.log(myTrim.length);
console.log(myTrim.trim().length);
let myTrim2 = myTrim.trim();
console.log(myTrim2);
//trim can be used to remove whitespace.