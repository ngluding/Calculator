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
        // operatorSign = e.target.textContent;
        // operator = operatorSign;
        // if (previousNum && currentNum && operator) {
        //     calculate();
        //     console,log("hi");
        // }
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
        console.log(`1) ${previousNum}, 2) ${currentNum}`);
        prevOperandTextElement.textContent = num1 + " " + operator;
        currentOperandTextElement.textContent = ""; 
        currentNum = "";
    }
}

function operationCheck(text) {
    operator = text
    prevOperandTextElement.textContent = previousNum + " " + operator;
    currentOperandTextElement.textContent = ""; 
    currentNum = "";
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
    num1 = roundNumber(num1);
    num1 = num1.toString();

    if (secondEquation) {
        prevOperandTextElement.textContent = num1 + " " + operator + 
        " " + currentNum; 
    } else {
        prevOperandTextElement.textContent = previousNum + " " + operator + 
        " " + currentNum;
        secondEquation = true;
    }

    console.log(num1);

    if (num1.length > 9) {
        currentOperandTextElement.textContent = num1 + "...";
    } else {
        currentOperandTextElement.textContent = num1;
    }
}
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
            num1 = subtract(num1, num2);
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

    console.log(`This is num1 ${num1} and num2 ${num2}`);
    console.log(`This is prev ${previousNum} and current ${currentNum}`);

    updateDisplay();
    // prevOperandTextElement.textContent = "";
    // currentOperandTextElement.textContent = num1;

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

