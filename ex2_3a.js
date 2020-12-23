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

function Factorial(n){
    if (!Number.isInteger(n) || n < 0 || isNaN(n)) {
        return null;
    }
    if(n == 0 || n == 1)
        return 1;
    return n*Factorial(n-1);
}

var non_memoized_factorial = Factorial;
var memoized_factorial1 = __Memoize__(Factorial);
var memoized_factorial2 = __Memoize__(Factorial);

//Test Here