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

let button = document.createElement('button');
button.textContent = "Calculate";
button.onclick = function() {

	var n1 = (<HTMLInputElement>document.getElementById("num1")).value;
	var n2 = (<HTMLInputElement>document.getElementById("num2")).value;
    var op = (<HTMLInputElement>document.getElementById("op")).value;

    let calc = new Calculator(+n1,+n2);
    switch (op) {
        case "+":
            document.getElementById('text').innerHTML = '<p>Equals: '+calc.add()+'</p>';
            break;
        case "-":
            document.getElementById('text').innerHTML = '<p>Equals: '+calc.sub()+'</p>';
            break;
        case "*":
            document.getElementById('text').innerHTML = '<p>Equals: '+calc.mul()+'</p>';
            break;
        case "/":
            document.getElementById('text').innerHTML = '<p>Equals: '+calc.div()+'</p>';
            break;
        default:
            return "nope";
    }
}
document.body.appendChild(button);
