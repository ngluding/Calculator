const numberButton = document.querySelectorAll("[data-number]")
const operationButton = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const clearButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")
const prevOperandTextElement = document.querySelector("[data-prev-operand]")
const currentOperandTextElement= document.querySelector("[data-current-operand]")

let currentNum = "";
let previousNum = "";
let operator = "";

numberButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        numberDisplay(e.target.textContent);
    });
});

operationButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        operationDisplay(e.target.textContent);
        operator = e.target.textContent;
        console.log(operator);
    })
})

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", backSpace);

equalsButton.addEventListener("click", calculate);

function numberDisplay(number) {
    if (number === "." && currentOperandTextElement.textContent.includes(".")) return;
    currentNum += number;
    currentOperandTextElement.textContent = currentNum;
}

function operationDisplay(operation) {
    // operator = operation;
    previousNum = currentNum;
    prevOperandTextElement.textContent = previousNum + " " + operation;
    currentNum = "";
    currentOperandTextElement.textContent = ""; 
}

function clear() {
    currentOperandTextElement.textContent = "";
    prevOperandTextElement.textContent = "";
    currentNum = "";
    previousNum = ""
};

function backSpace() {
    currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0, -1);
};

// function evaluate() {
//     prevOperandTextElement.textContent = "";
//     currentOperandTextElement.textContent = calculate();
// }

function calculate() {
    num1 = Number(previousNum);
    num2 = Number(currentNum);


    switch(operator) {
        case "+":
            num1 = add(num1, num2);
            break;
        case "-":
            num1 = substract(num1, num2);
            break;
        case "x":
            num1 = multiply(num1, num2);
            break;
        case "÷":
            num1 = divide(num1, num2);
            break;
        default:
            return;
    }

    prevOperandTextElement.textContent = "";
    currentOperandTextElement.textContent = num1;

}

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

