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

function numBtnClick(id) {
    if (equalsClicked) {
        clearDisplay();
        operatorClicked = false;
    } else if (operatorClicked) {
        clearDisplay();
    }
    displayValue += id ;
    displayDiv.innerHTML = displayValue;
}

function operatorClick(id) {
    if (operatorClicked) {
        answer = operate(window[operator], parseInt(num1), parseInt(displayValue));
        setDisplay(answer);
        num1 = answer;
        operator = id;
    } else {
        operator = id;
        num1 = displayValue;
        operatorClicked = true;
    }

}

function clearDisplay() {
    displayDiv.innerHTML = "0";
    displayValue = "";
}

function setDisplay(displayText) {
    displayValue = displayText;
    displayDiv.innerHTML = displayValue;
}

function equals() {
    // num2 = displayValue;
    answer = operate(window[operator], parseInt(num1), parseInt(displayValue));
    setDisplay(answer);
    operatorClicked = false;
    equalsClicked = true;
}

let num1, num2, operator, operatorClicked, equalsClicked;

const displayDiv = document.querySelector("#display");

let displayValue = "";



let numBtns = document.querySelectorAll(".btn.num");
numBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        numBtnClick(this.id);
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
    equals();
})