const currentOperandElement = document.getElementById('current-operand');
const previousOperandElement = document.getElementById('previous-operand');

let currentOperand = '0';
let previousOperand = '';
let selectedOperator = null;
let shouldResetScreen = false;

const operatorLabels = {
  '+': '+',
  '-': '−',
  '*': '×',
  '/': '÷'
};

function updateDisplay() {
  currentOperandElement.textContent = currentOperand;
  previousOperandElement.textContent = selectedOperator
    ? `${previousOperand} ${operatorLabels[selectedOperator]}`
    : '';
}

function appendNumber(number) {
  if (currentOperand === 'Error' || shouldResetScreen) {
    currentOperand = number;
    shouldResetScreen = false;
  } else if (currentOperand === '0') {
    currentOperand = number;
  } else {
    currentOperand += number;
  }
  updateDisplay();
}

function addDecimal() {
  if (currentOperand === 'Error' || shouldResetScreen) {
    currentOperand = '0.';
    shouldResetScreen = false;
  } else if (!currentOperand.includes('.')) {
    currentOperand += '.';
  }
  updateDisplay();
}

function chooseOperator(operator) {
  if (currentOperand === 'Error') {
    clearCalculator();
    return;
  }

  if (selectedOperator && !shouldResetScreen) {
    calculate();
  }

  previousOperand = currentOperand;
  selectedOperator = operator;
  shouldResetScreen = true;
  updateDisplay();
}

function calculate() {
  if (!selectedOperator || previousOperand === '') {
    return;
  }

  const firstNumber = Number(previousOperand);
  const secondNumber = Number(currentOperand);
  let result;

  switch (selectedOperator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = secondNumber === 0 ? 'Error' : firstNumber / secondNumber;
      break;
  }

  currentOperand = result === 'Error' ? result : formatResult(result);
  previousOperand = '';
  selectedOperator = null;
  shouldResetScreen = true;
  updateDisplay();
}

function formatResult(value) {
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(10)));
}

function clearCalculator() {
  currentOperand = '0';
  previousOperand = '';
  selectedOperator = null;
  shouldResetScreen = false;
  updateDisplay();
}

function deleteLastDigit() {
  if (currentOperand === 'Error' || shouldResetScreen) {
    clearCalculator();
    return;
  }

  currentOperand = currentOperand.length > 1
    ? currentOperand.slice(0, -1)
    : '0';
  updateDisplay();
}

function toggleSign() {
  if (currentOperand === '0' || currentOperand === 'Error') {
    return;
  }
  currentOperand = currentOperand.startsWith('-')
    ? currentOperand.slice(1)
    : `-${currentOperand}`;
  updateDisplay();
}

document.querySelector('.keys').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) {
    return;
  }

  if (button.dataset.number !== undefined) {
    appendNumber(button.dataset.number);
    return;
  }

  switch (button.dataset.action) {
    case 'decimal':
      addDecimal();
      break;
    case 'operator':
      chooseOperator(button.dataset.value);
      break;
    case 'equals':
      calculate();
      break;
    case 'clear':
      clearCalculator();
      break;
    case 'delete':
      deleteLastDigit();
      break;
    case 'sign':
      toggleSign();
      break;
  }
});

document.addEventListener('keydown', (event) => {
  if (/^[0-9]$/.test(event.key)) {
    appendNumber(event.key);
  } else if (event.key === '.') {
    addDecimal();
  } else if ('+-*/'.includes(event.key)) {
    chooseOperator(event.key);
  } else if (event.key === 'Enter' || event.key === '=') {
    calculate();
  } else if (event.key === 'Backspace') {
    deleteLastDigit();
  } else if (event.key === 'Escape') {
    clearCalculator();
  }
});

updateDisplay();
