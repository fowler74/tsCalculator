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
var button = document.createElement('button');
button.textContent = "Calculate";
button.onclick = function () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var op = document.getElementById("op").value;
    var calc = new Calculator(+n1, +n2);
    switch (op) {
        case "+":
            document.getElementById('text').innerHTML = '<p>Equals: ' + calc.add() + '</p>';
            break;
        case "-":
            document.getElementById('text').innerHTML = '<p>Equals: ' + calc.sub() + '</p>';
            break;
        case "*":
            document.getElementById('text').innerHTML = '<p>Equals: ' + calc.mul() + '</p>';
            break;
        case "/":
            document.getElementById('text').innerHTML = '<p>Equals: ' + calc.div() + '</p>';
            break;
        default:
            return "nope";
    }
};
document.body.appendChild(button);
