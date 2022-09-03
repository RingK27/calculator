let operand = null;
let operationString = "";
let buttons = document.querySelectorAll(".number, .operator");
let displayNumbers = document.getElementById("display-numbers");
let clearBtn = document.getElementById("C");
let delBtn = document.getElementById("DEL");
let equBtn = document.getElementById("equals");

clearBtn.addEventListener("click", clear);
delBtn.addEventListener("click", del);
equBtn.addEventListener("click", makeOperation);

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", updateOperationString);       
}

function operate(numbers, operators) {
    let result = null;
    let tempResult = numbers[0];
    let a = null;
    let b = null;

    for (i = 0; i < operators.length; i++) {        
        if (operators[i] == "+") {
            tempResult = tempResult + numbers[i+1];
        } else if (operators[i] == "÷") {
            tempResult = tempResult / numbers[i+1];
        } else if (operators[i] == "X") {
            tempResult = tempResult * numbers[i+1];
        } else if (operators[i] == "^") {
            tempResult = Math.pow(tempResult, numbers[i+1]);
        } else if (operators[i] == "-") {
            tempResult = tempResult - numbers[i+1];
        }        
    }
    result = tempResult;

    if (result % 1 == 0) {
        displayNumbers.innerHTML = result;        
    } else {
        let strResult = String(result);
        if (strResult.charAt(strResult.length-1) == 0) {
            result = result.toFixed(1);
            displayNumbers.innerHTML = result; 
        } else {
            result = result.toFixed(2);
            displayNumbers.innerHTML = result; 
        }               
    }    
    operationString = "";
}

function makeOperation() {
    let operation = operationString.split(" ");
    let numArray = new Array();
    let opeArray = new Array();

    for (i = 0; i < operation.length; i++) {
        let test = operation[i];
        if (test == "+" || test == "X" || test == "-" || test == "^" 
            || test == "÷") {
            opeArray.push(test); 
        } else {
            numArray.push(parseFloat(test));            
        }
    }
    operate(numArray, opeArray);
}

function updateOperationString() {
    let lastChar = operationString[operationString.length -1];
    
    if (this.id == "÷" || this.id == "X" || this.id == "-" || this.id == "+"  
        || this.id == "^" || this.id == ".") {
        if (lastChar == "÷" || lastChar == "X" || lastChar == "-" 
            || lastChar == "+" || lastChar == "^" || lastChar == "." ) {
            return;
        } else {
            if (this.id == ".") {
                operationString += this.id;    
                displayNumbers.innerHTML = operationString;                
            } else {
                operationString += " " + this.id + " ";    
                displayNumbers.innerHTML = operationString;     
            }                       
        }
    } else {
        operationString += this.id;    
        displayNumbers.innerHTML = operationString;         
    }   
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

