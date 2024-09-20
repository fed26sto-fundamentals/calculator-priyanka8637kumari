//declaring all global variables
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let resetDisplay = false;

const display = document.getElementById("calculator-display"); //For the display div

//Functions for basic math operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0)
    return null; // Avoid division by zero
  return a / b;
}

// Operate function: calls the correct operation

function operate(operator, a, b) {
  a = parseFloat(a);  // Convert first number to a floating-point number.
  b = parseFloat(b);  // Convert second number to a floating-point number.

  switch (operator) {  // Based on the operator selected, perform the corresponding math operation.
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return null;  // Return null if the operator is not recognized.
  }
}

// Function to append number in Display

function appendNumber(number) {
  if (display.textContent === '0' || resetDisplay) {
    display.textContent = number;
    resetDisplay = false;
  } else {
    display.textContent += number;
    
  }

}


// Function for handling decimal input
function appendDecimal() {
  if (resetDisplay) {  // If the display needs to reset...
    display.textContent = '0.';  // Start a new decimal number.
    resetDisplay = false;  // Reset the flag.
  } else if (!display.textContent.includes('.')) {  // If the display doesn't already contain a decimal...
    display.textContent += '.';  // Add a decimal point.
  }
}



//Function for clearing the calculator

function clearCalculator() {
  display.textContent = '0';  // Reset the display to 0.
  firstNumber = '';  // Reset the first number.
  secondNumber = '';  // Reset the second number.
  currentOperator = '';  // Clear the operator.
  resetDisplay = false;  // Reset the display reset flag.
}


//Deleting the last digit

function backSpace() {
  display.textContent = display.textContent.slice(0, -1) || '0';
}


// Function for setting operator

function setOperator(operator) {
  if (currentOperator != "") {
    secondNumber = display.textContent;
    display.textContent = operate(currentOperator, firstNumber, secondNumber);

  }
  firstNumber = display.textContent;
  currentOperator = operator;
  resetDisplay = true;
}



// Function to evaluate the operation
function evaluate() {
  if (currentOperator === '') return;
  secondNumber = display.textContent;
  display.textContent = operate(currentOperator, firstNumber, secondNumber);
  currentOperator = '';
}


// Add event listeners to number buttons
const numberbuttons = document.querySelectorAll('[data-number]');
numberbuttons.forEach(button => {
  button.addEventListener('click', () => appendNumber(button.getAttribute('data-number')))
})

// Add event listeners to operator buttons

const operators = document.querySelectorAll('[data-operator]');
operators.forEach(button => {
  button.addEventListener('click', () => setOperator(button.getAttribute('data-operator')))
})

document.querySelector('.btn-equals').addEventListener('click', evaluate);
document.querySelector('.btn-clear').addEventListener('click', clearCalculator);
document.querySelector('.btn-backspace').addEventListener('click', backSpace);
document.querySelector('[data-decimal]').addEventListener('click', appendDecimal);






















