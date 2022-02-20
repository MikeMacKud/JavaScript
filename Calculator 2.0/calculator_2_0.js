//new function
function Calculator() {
        this.read = function() { 
            let firstNum = Number(prompt("Введите первое число:"));
            let secondNum = Number(prompt("Введите второе число:"))
        }
        this.sum = function() { 
            return( firstNum + secondNum );
        };
        this.mul = function() {
            return( firstNum * secondNum);
        };    
}