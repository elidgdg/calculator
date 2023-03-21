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

function updateDisplay(id) {
    if (operatorClicked) {
        clearDisplay();
        operatorClicked = false;
    }
    displayValue += id ;
    displayDiv.innerHTML = displayValue;
}

function operatorClick(id) {
    operator = id;
    num1 = displayValue;
    operatorClicked = true;
}

function clearDisplay() {
    displayDiv.innerHTML = "0";
    displayValue = "";
}

function displayAnswer() {
    num2 = displayValue;
    answer = operate(window[operator], parseInt(num1), parseInt(num2));
    clearDisplay();
    updateDisplay(answer);
}

let num1, num2, operator, operatorClicked;

const displayDiv = document.querySelector("#display");

let displayValue = "";



let numBtns = document.querySelectorAll(".btn.num");
numBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        updateDisplay(this.id);
    });
});


let operationBtns = document.querySelectorAll(".btn.operation");
operationBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        operatorClick(this.id);
    });
});

let equalsBtn = document.querySelector(".btn.equals");
equalsBtn.addEventListener('click', function () {
    displayAnswer();
    console.log('e');
})