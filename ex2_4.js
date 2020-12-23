/*
Names : 
Allen Bronshtein 206228751
Ido Zeira 322607177 
*/
function __Memoize__(fn) {
    var memory = new Map();
    return function Memoized_Function() {
        var key = JSON.stringify(arguments);
        if (memory.has(key)) {
             console.log("Using memory ...");
             return memory.get(key);
        }
        var result = fn.apply(this,arguments);
        memory.set(key, result);
        return result;
    }
}

function testFunction(x,y){
    return x+y;
}

var non_memoized_function = testFunction;
var memoized_function1 = __Memoize__(testFunction);
var memoized_function2 = __Memoize__(testFunction);

//Test Here
