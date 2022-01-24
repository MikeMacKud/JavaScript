//простой калькулятор выводящий результат сложения и умножения
let isStart = confirm("Доброго времени суток, дорогой пользователь, желаете ли Вы воспользоваться сумнажительным калькулятором?");

//check Yes/No
if (isStart = !false) {
 
    //enter object
    let calculator = {
        read() = { 
            firstNum = Number(prompt("Введите первое число:"));
            secondNum = Number(prompt("Введите второе число:"));
        }    
    };
    
    let sum() => calculator.firstNum + calculator.secondNum;
    
    //calculation&print
    let mul() => calculator.firstNum * calculator.secondNum
    alert( calculator.sum() );

    alert( calculator.mul() );
    calculator.read();
};