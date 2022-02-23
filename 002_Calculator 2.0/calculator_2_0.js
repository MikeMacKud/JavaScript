//new function
function Calculator() {
  
    this.read = function() { 
      this.firstNum = Number( prompt("Введите первое число:") );
      this.secondNum = Number( prompt("Введите второе число:") );
    };      

    this.sum = function() {
      return this.firstNum + this.secondNum;
    };
        
    this.mul = function() {
      return this.firstNum * this.secondNum;
    };  
}




