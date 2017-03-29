var n1 = (<HTMLInputElement>document.getElementById("num1")).value;
var n2 = (<HTMLInputElement>document.getElementById("num2")).value;

class Calculator {
    num1: number;
    num2: number;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mul() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2
    }
}

let calc = new Calculator(n1,n2);

let button = document.createElement('button');
button.textContent = "Calculate";
button.onclick = function() {
    alert(calc.add());
    alert(calc.sub());
    alert(calc.mul());
    alert(calc.div());
}
document.body.appendChild(button);