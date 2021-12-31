let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let totalSum;
let sumEl = document.getElementById("sum-el");

function add() {
  totalSum = num1 + num2;
  sumEl.textContent = totalSum;
}

function subtract() {
  totalSum = num1 - num2;
  sumEl.textContent = totalSum;
}

function divide() {
  totalSum = num1 / num2;
  sumEl.textContent = totalSum;
}

function multiply() {
  totalSum = num1 * num2;
  sumEl.textContent = totalSum;
}
