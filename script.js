const numberButton = document.querySelectorAll("[data-number]")
const operationButton = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const clearButton = document.querySelector("[data-clear]")
const deleteButton = document.querySelector("[data-delete]")
const prevOperandTextElement = document.querySelector("[data-prev-operand]")
const currentOperandTextElement= document.querySelector("[data-current-operand]")

let currentNum = "";

numberButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        updateDisplay(e.target.textContent);
        console.log(e);
    });
});

operationButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        updateDisplay(e.target.textcontent);
        console.log(e);
    })
})

function updateDisplay(number) {
    if (number === "." && currentOperandTextElement.textContent.includes(".")) return;
    
    currentNum += number;
    currentOperandTextElement.textContent = currentNum;

}

function clear() {


    currentOperandTextElement = "";
    prevOperandTextElement = "";
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

function operate(operator, num1, num2) {
    

};
