let num1;
let num2;
let totalSum;

let sumEl = document.getElementById("sum-el");

function getNumbers() {
  num1 = document.getElementById("num1-el").value;
  num1 = parseInt(num1);
  console.log(num1);
  num2 = document.getElementById("num2-el").value;
  num2 = parseInt(num2);
  console.log(num2);
}

function add() {
  totalSum = num1 + num2;
  sumEl.textContent = "Total: " + totalSum;
}

function subtract() {
  totalSum = num1 - num2;
  sumEl.textContent = "Total: " + totalSum;
}

function divide() {
  totalSum = num1 / num2;
  sumEl.textContent = "Total: " + totalSum;
}

function multiply() {
  totalSum = num1 * num2;
  sumEl.textContent = "Total: " + totalSum;
}
