// theValue contains the currently calculated value
let theValue = 0;

// newValue is a flag to indicate that we are ready to start a new value
let newValue = true;

// saveOperator is the last operator that was used
// this allows us to compute AFTER they have entered the next number
let saveOperator = "";

// When an operator is clicked, compute the new value using the saveOperator and the new number
function operate (operator) {
  // Get the current number from the display value
  theNumber = Number(document.getElementById('display').value);

  // Execute the operation (based on the saved operator value)
  switch(saveOperator) {
    // If there is no saved operator, just update theValue
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
  
  // Save the operator so we know what to do with the next number
  saveOperator = operator;

  // Set the newValue flag so that updateDisplay knows to reset
  newValue = true;

  // Update the display with the new calculated value
  document.getElementById('display').value = theValue;
}

// Function to update the display with a clicked button value.
function updateDisplay(value) {
  // Start with the value currently displayed
  let startingValue = document.getElementById('display').value;

  // If new New Value flag is set, start from an empty string 
  // and turn the flag off
  if (newValue) {
    startingValue = "";
    newValue = false;
  }

  // append the number clicked to the display value
  displayValue = startingValue + value;

  // update the value displayed on the page
  document.getElementById('display').value = displayValue;
}

// Function to clear the display, and reset the gloabal variables
function clearDisplay() {
  newValue = true;
  theValue = 0;
  saveOperator = "";
  document.getElementById('display').value = "";
}
