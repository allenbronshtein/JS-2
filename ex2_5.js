/*
Names : 
Allen Bronshtein 206228751
Ido Zeira 322607177 
*/
document.addEventListener("DOMContentLoaded", function main() {
    function Sum () {
      var num1 = parseFloat(document.getElementById("firstNumber").value);
      var num2 = parseFloat(document.getElementById("secondNumber").value);
      var message = "";
      if(!isNaN(num1)&&!isNaN(num2)){
        var sum = num1+num2;
        message = num1 + " + " + num2 + " = " + sum ;
      }
      document.querySelector("div").innerHTML = message;
    }

    document.getElementById("addButton").addEventListener("click", Sum); 
})