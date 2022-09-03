let operand = null;

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

operate(4, 6.5, "add");
operate(4, 6.5, "subtract");
operate(4, 6.5, "multiply");
operate(4, 6.5, "divide");
operate(2, 4, "elevate");