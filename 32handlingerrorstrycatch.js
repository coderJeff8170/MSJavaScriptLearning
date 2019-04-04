//javascript will allow errors to the point that it won't complain about crappy
//code until it just crashes, and crashes hard. So, trycatch!
//let's get javascript to throw an exception with a known bug:

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.b);
    console.log('if previous line throws exception, you\'ll never see this!');
}

beforeTryCatch();