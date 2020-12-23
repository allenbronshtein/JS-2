/*
Names : 
Allen Bronshtein 206228751
Ido Zeira 322607177 
*/
function __Factorial__(){
	var values = [1];
	return function Factorial(n){
		if (!Number.isInteger(n) || n < 0 || isNaN(n)) {
			return null;
		}
		if (values[n] != null){
			console.log("Using memory ...")
			return values[n];
		}
		for(let i=1;i<=n;i++){
			values[i]=values[i-1]*i;
		}
		return values[n];
	}
}

var executable_1 = __Factorial__();
var executable_2 = __Factorial__();

//Test Here