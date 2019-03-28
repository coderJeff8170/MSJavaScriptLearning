//module patterns or design patterns to keep you from running into scope problems
//variables can be made private (encapsulated)

var counter = (function() {
    //private stuff
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }
    //return an object - without doing so, the objs wouldn't be available
    //outside the function
    return {
        //value: count,
        get: function() {
            return count;
        },

        set: function(value) {
            count = value;
        },

        increment: function() {
            count +=1;
            print('After increment: ');
        },

        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');

        }
    }
})();
//^^ an IIFE or immediately invoked function expression
//function inside parentheses, followed by parentheses to immediately call it.

//Module is an IIFE that returns an object that will expose counts and increments

//console.log(counter.count); wont work because count isn't bound to counter
//however, because the IIFE is immediately invoked, or called, you can
//access it's result using keywords that ARE defined, such as increment.


counter.increment();//invokes increment property of counter's 'return' object
counter.increment();
counter.increment();

//console.log(counter.value); - accidentally created a closure -
//Expected value was 3, but was 0
//Bob returns north and adds two more functions at the value: count level,
//to replace v:c
counter.set(7);
console.log(counter.get());


counter.reset();//function reset (property within IIFE 'counter')
//console logs the value of counter, resets it, then logs the value again.

//only the properties inside the 'return' object of 'counter' are accessible outside
//'counter'. The reason we do this is to a. keep variables from going golbal
//and consuming resources and b. to keep variables from going global
//and running into each other.