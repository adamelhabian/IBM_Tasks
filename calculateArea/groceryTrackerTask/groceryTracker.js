let grocery1;
let grocery2;
let grocery3;
let sum;

function calculateTotalAmount() {
  grocery1 = parseFloat(document.getElementById("grocery1").value);
  grocery2 = parseFloat(document.getElementById("grocery2").value);
  grocery3 = parseFloat(document.getElementById("grocery3").value);

  sum = grocery1 + grocery2 + grocery3;
  document.getElementById("result").innerText = `The Total amount is:$ ${sum}`;
}
