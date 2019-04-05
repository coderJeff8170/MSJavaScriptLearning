//basically browser begins construction of an object based representation
//of html elements as it renders a webpage. It constructs these elements
//into what are called 'nodes'.
//node for a <p>, node for an id="", node for a class="", etc., 
//everyone gets a noooooooode! 
//the object model has to consider how all elements relate to each other
//children/parents/ etc
//ends up with a rich object model that reps the document - the DOM
//or Document Object Model
//it's an object graph that represents the elements and their possible interactions
//Document node is at the highest level
//Nodes in HTML have nothing to do with Node.js
//DOM also includes a rich API (application programming interface) that has
//a lot of functions we can call to find nodes, add prgrammatic handles, 
//change attributes and classes, remove and add nodes, etc.
//API allows us to associate events with functions, provides helper functions
//like calls to web servers, etc.
//so anyways, make an IIFE!

(function () {

    function clickHandler(message) {
    console.log(`hi .... ${message}` );
    }
    //get a reference to "myButton"
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() { clickHandler('Hi from the IIFE') } );

})();
