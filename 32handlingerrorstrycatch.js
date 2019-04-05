//javascript will allow errors to the point that it won't complain about crappy
//code until it just crashes, and crashes hard. So, trycatch!
//let's get javascript to throw an exception with a known bug:

/* function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('if previous line throws exception, you\'ll never see this!');
} */

// beforeTryCatch();

/* function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.b);
        console.log('if previous line throws exception, you\'ll never see this!');
        } catch (error) {
            
            console.log('I caught an error: ' + error.message);
    } finally {
        console.log('This will happen no matter what!');
    }

    console.log('My application is still running!!');
}

afterTryCatch(); */


//returns:
//I caught an error: Cannot read property 'b' of undefined
//This will happen no matter what!
//My application is still running!!

function performCalculation(obj) {
    if(!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    // continue with calculation w/ obj.b
    return 6;
}

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = performCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }
 
    if (value == 0) {
        //contingency
        //retry logic
    }

}

performHigherLevelOperation();
//will log "object missing property"
//bob originally had 'let obj;', but this threw "cannot read property 'hasOwnProperty of undefined"
//he then gave obj a value of {} - empty object - I suppose it wasn't an object yet.
