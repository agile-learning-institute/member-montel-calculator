// theValue contains the currently calculated value
let theValue = 0;

// saveOperator is the last operator that was used
// this allows us to compute AFTER they have entered the next number
let saveOperator = "";

// When an operator is clicked, compute the new value using the saveOperator and the new number
function operate (operator) {
  theNumber = Number(document.getElementById('display').value);
  switch(saveOperator) {
    // If there is no operator, just update theValue
    case "":
      theValue = theNumber;
      break;
    case "+":
      theValue = theValue + theNumber;
      break;
    case "-":
      theValue = theValue - theNumber;
      break;
    case "*":
      theValue = theValue * theNumber;
      break;
    case "/":
      theValue = theValue / theNumber;
      break;
  } 
  saveOperator = operator;
  document.getElementById('display').value = "";
}


// Function to update the display with a clicked button value
function updateDisplay(value) {
  displayValue = document.getElementById('display').value;
  displayValue = displayValue + value;
  document.getElementById('display').value = displayValue;
}

// Function to calculate the result
function calculateResult() {
  operate("");
  document.getElementById('display').value = theValue;
}

// Function to clear the display
function clearDisplay() {
  theValue = 0;
  document.getElementById('display').value = "";
}
