// theValue contains the currently calculated value
let theValue = 0;

// newValue is a flag to indicate that we are ready to start a new value
let newValue = true;

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
  newValue = true;
  document.getElementById('display').value = theValue;
}


// Function to update the display with a clicked button value. If we are starting a new number
// then we should ignore the current value and start from an empty string, before appending 
// the specified value to the display value.
function updateDisplay(value) {
  console.log(newValue);
  let startingValue = document.getElementById('display').value;
  if (newValue) {
    startingValue = "";
    newValue = false;
  }
  displayValue = startingValue + value;
  document.getElementById('display').value = displayValue;
}

// Function to clear the display, and reset the gloabal variables
function clearDisplay() {
  newValue = true;
  theValue = 0;
  saveOperator = "";
  document.getElementById('display').value = "";
}
