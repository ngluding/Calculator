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
        console.log(e);
    })
})

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", backSpace);

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
    console.log("hi");
};

function backSpace() {
    currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0, -1);
};

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

function operate(operator, num1, num2) {
    

};
