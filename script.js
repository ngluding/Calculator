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
let secondEquation = false;

numberButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        numberDisplay(e.target.textContent);
    });
});

operationButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        operationDisplay(e.target.textContent);
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

function operationDisplay(op) {
    // operator = operation;
    if (previousNum === "") {
        previousNum = currentNum;
        operationCheck(op);
    } else if (currentNum === "") {
        operationCheck(op);
    } else {
        calculate();
        operator = op;
        previousNum = answer;
        secondEquation = false;
        console.log(`1) ${previousNum}, 2) ${currentNum}`);
        prevOperandTextElement.textContent = answer + " " + operator;
        currentOperandTextElement.textContent = ""; 
        currentNum = "";
    }
}

function operationCheck(op) {
    operator = op

    if (secondEquation) {
        prevOperandTextElement.textContent = answer + " " + operator;
        currentOperandTextElement.textContent = ""; 
        currentNum = "";
    } else {
        prevOperandTextElement.textContent = previousNum + " " + operator;
        currentOperandTextElement.textContent = ""; 
        currentNum = "";
    }
}

function clear() {
    currentOperandTextElement.textContent = "";
    prevOperandTextElement.textContent = "";
    currentNum = "";
    previousNum = ""
    secondEquation = false;
};

function backSpace() {
    currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0, -1);
};

function roundNumber(num) {
    return Math.round(num * 100000000) / 100000000;
}

function updateDisplay() {
    answer = roundNumber(answer);
    answer = answer.toString();

    if (secondEquation) {
        prevOperandTextElement.textContent = answer + " " + operator + 
        " " + currentNum; 
    } else {
        prevOperandTextElement.textContent = previousNum + " " + operator + 
        " " + currentNum;
        secondEquation = true;
    }

    if (answer.length > 9) {
        currentOperandTextElement.textContent = answer + "...";
    } else {
        currentOperandTextElement.textContent = answer;
    }
}

function calculate() {
    num1 = Number(previousNum);
    num2 = Number(currentNum);

    switch(operator) {
        case "+":
            answer = num1 + num2;
            break;
        case "-":
            answer = num1 - num2;
            break;
        case "x":
            answer = num1 * num2;
            break;
        case "÷":
            answer = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay();
}
