var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;
var Calculator = (function () {
    function Calculator(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Calculator.prototype.sub = function () {
        return this.num1 - this.num2;
    };
    Calculator.prototype.mul = function () {
        return this.num1 * this.num2;
    };
    Calculator.prototype.div = function () {
        return this.num1 / this.num2;
    };
    return Calculator;
}());
var calc = new Calculator(n1, n2);
var button = document.createElement('button');
button.textContent = "Calculate";
button.onclick = function () {
    alert(calc.add());
    alert(calc.sub());
    alert(calc.mul());
    alert(calc.div());
};
document.body.appendChild(button);
