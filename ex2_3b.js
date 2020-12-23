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

function Fibonacci(n){
    if (!Number.isInteger(n) || n < 0) {
        return null;
    }
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    return Fibonacci(n-1) + Fibonacci(n-2);
}

var non_memoized_fib = Fibonacci;
var memoized_fib1 = __Memoize__(Fibonacci);
var memoized_fib2 = __Memoize__(Fibonacci);

//Test Here