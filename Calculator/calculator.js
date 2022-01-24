/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let isStart = confirm("Доброго времени суток, дорогой пользователь, желаете ли Вы воспользоваться сумнажительным калькулятором?");

//check Yes/No
if (isStart = !false) {
 
    //enter object
    let calculator = {
        firstNum: "",
        secondNum: "",
        read() { 
        calculator.firstNum = Number(prompt("Введите первое число:"));
        calculator.secondNum = Number(prompt("Введите второе число:"));
        },
        sum() {this.firstNum + this.secondNum},
        mul() {this.firstNum * this.secondNum}
    };

    //answer
    calculator.read();
    alert( calculator.sum() );
    alert( calculator.mul() );
    console.log(calculator.firstNum);
    console.log(calculator.secondNum);
};