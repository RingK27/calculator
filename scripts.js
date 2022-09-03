function add(a, b){
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function elevate(a, b) {
    return Math.pow(a, b);
}

function operate(a, b, operand) {
    let result = null;
    if (operand == "add") {
       result = add(a, b);        
    } else if (operand == "subtract") {
        result = subtract(a, b);        
    } else if (operand == "multiply") {
        result = multiply(a, b);        
    } else if (operand == "divide") {
        result = divide(a, b);        
    } else if (operand == "elevate") {
        result = elevate(a, b);
    }    
    console.log(result.toFixed(2));
}

function updateOperationString() {    
    operationString += this.id;    
    displayNumbers.innerHTML = operationString;
}

function clear() {
    operationString = "0";
    displayNumbers.innerHTML = operationString;
    operationString = "";
}

function del() {
    if (operationString.length > 1) {
        operationString = operationString.substring(0, operationString.length -1);
        displayNumbers.innerHTML = operationString;
    } else if (operationString.length == 1) {
        operationString = "0";
        displayNumbers.innerHTML = operationString;
        operationString = "";
    } else {
        return;
    }   
}

let operand = null;
let operationString = "";
let numButtons = document.querySelectorAll(".number");
let opeButtons = document.querySelectorAll(".operator");
let displayNumbers = document.getElementById("display-numbers");
let clearBtn = document.getElementById("C");
let delBtn = document.getElementById("DEL");

clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", del);

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", updateOperationString);       
}