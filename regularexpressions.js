//regular expressions or reg exps are a pattern to dermine if a given string matches
//the pattern you created

let pattern = /xyz/;
//reg exp is created using backslash at beginning and end

/* console.log(pattern);
console.log(typeof pattern);// object! */

let value = 'This is xyz a test.';

//console.log(pattern.test(value));
//returns true, pattern xyz is found in patter

// console.log(value.replace(pattern, 'just'));
//replaces part of a string with the found pattern

console.log(value.match(pattern));//match method on the string, value, with the reg exp, pattern
//returns an object; first property is the parameter,
//second is the index where it begins in the input value
//third is the input
//fourth are groups
var match = value.match(pattern);
//assigns the returned object to variable, match
console.log(match.index);
//logs the index listed in the object

//always cheat regex - google regex for zipcodes, for phone numbers, for emails, ec
//developer.mozilla.org website, very deep and comprehensive

