let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a - b;
}

function multiply(a,b){
  return a * b;
}

function divide(a,b){
  return a / b;
}

function operate (operator) {
  if (firstNumber === 0){
    firstNumber = document.getElementById('display').value;
    console.log(firstNumber);
    document.getElementById('display').value= 0;
  } else {
    secondNumber = document.getElementById('display').value;
  console.log(firstNumber,secondNumber);
    switch (operator){
    case "+":
      firstNumber = add(firstNumber,secondNumber);
    case "-":
      firstNumber = subtract(firstNumber,secondNumber);
    case "*":
      firstNumber = multiply(firstNumber,secondNumber);
    case "/":
      firstNumber = divide(firstNumber,secondNumber);
    } 
  }   
  console.log(firstNumber, secondNumber);
}

// Function to update the display with a clicked button value
function updateDisplay(value) {
 displayValue = document.getElementById('display').value;
  displayValue = displayValue + value;
  document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculateResult() {
  document.getElementById('display').value = firstNumber;

}

// Function to clear the display
function clearDisplay() {
  displayValue = "0";
  firstNumber = 0;
  secondNumber = 0;
  document.getElementById('display').value = displayValue;
}


