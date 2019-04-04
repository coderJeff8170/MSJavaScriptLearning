/* let name = 'jeff';

console.log(`hi ${name}`);

let sentence = `This is really a convenience.
    You probably will never want to do something
    quite like this. You might choose to put
    long passage of text into an external file
    and load it somehow.`;
console.log(sentence); //note how indents and cr's are preserved.

 */
function getReasonCount() { return 2;}

let interpolation = `Give me ${ (getReasonCount() == 1) ? `one good reason` : `a few reasons`} to try this.`;
//note use of ternary operator ^^ 
console.log(interpolation);
//^^ this is useful for changing the string output in a shopping cart depending on number of items!