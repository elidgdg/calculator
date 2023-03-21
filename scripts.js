function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x, y);
}

let num1, num2, operator;

const displayDiv = document.getElementById("display");

let displayValue = "";

function updateDisplay(id) {
    displayValue += id ;
    displayDiv.innerHTML = displayValue;
}

let numBtns = document.querySelectorAll(".btn.num");
numBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        updateDisplay(this.id);
    });
});

function operatorClick(id) {
    operator = id;
    num1 = displayValue;
    clearDisplay();
}

function clearDisplay() {
    displayDiv.innerHTML = "0";
    displayValue = "";
}

let operationBtns = document.querySelectorAll(".btn.operation");
operationBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        operatorClick(this.id);
    });
});