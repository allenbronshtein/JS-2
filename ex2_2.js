/*
Names : 
Allen Bronshtein 206228751
Ido Zeira 322607177 
*/
function __Memoize__(fn) {
    var memory = new Map();
    return function Memoized_Function(arg) {
        if (memory.has(arg)) {
            console.log("Using memory ...");
            return memory.get(arg);
        }
        var result = fn(arg);
        memory.set(arg, result);
        return result;
    }
}

function testFunction(x){
    return x*5;
}

var non_memoized_function = testFunction;
var memoized_function1 = __Memoize__(testFunction);
var memoized_function2 = __Memoize__(testFunction);

//Test Here

// console.log(non_memoized_function(5));
// console.log(non_memoized_function(5));
// console.log(memoized_function1(3));
// console.log(memoized_function1(5));
// console.log(memoized_function1(5));
// console.log(memoized_function2(3));
// console.log(memoized_function2(3));