//new function-constractor
let intermediateValue = 0;

function Accumulator(startingValue) {
  let num;  
  this.read = function() {
    num = +prompt("Пожалуйста, введите следующее число");
    console.log(num);
    
    intermediateValue = intermediateValue + num;  

    console.log(intermediateValue);
    
    this.value = intermediateValue + startingValue;
  };
 
}




