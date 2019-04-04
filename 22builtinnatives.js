//primitive types have native functions (methods) that can do things to them
//very useful

let myString = new String('howdy');
console.log(typeof myString);//object - remember an array is a special type of object
//creates an object using constructor - becomes a 'native' string
// console.log(myString);// [String: 'howdy']
console.log(myString.toString());
console.log(typeof myString);
//converts native string back to primitive

/*
String()
Number()
Boolean()
Object()
Function()
Symbol()
*/ //<these are all primitives with built in natives

/*
Array()
RegExp()
*/

/*
Date()
Error()
*/

let myPrimitive = 'THIS IS CRAZY';
console.log(myPrimitive);
console.log(typeof myPrimitive);// string
myPrimitive = myPrimitive.toLowerCase();//JS temporarily creates an object to LC the string then converts back to string!
console.log(myPrimitive);
console.log(typeof myPrimitive);//string

let myNumber = new Number(7);
console.log(typeof myNumber);//object
let myPrimitive2 = myNumber.valueOf();
console.log(typeof myNumber.valueOf());//number!
console.log(typeof myPrimitive2);//number

//natives built in native functions constructor called - return objects
//that have rich features to support primitives 
//can spot them by the capital letter start and constructor keywords like 'new'
//as in new Object() or new Number()



