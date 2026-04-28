let count = 0; //intialize count to 0

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // you can call function  while it's implementation is below due to function hosting in js that put the full function declartion at the top of scope before excution
  checkCountValue();
}

function displayCount() {
  document.getElementById("countDisplay").innerText = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function Reset() {
  document.getElementById("countDisplay").innerText = 0;
  alertForReset();
}
function alertForReset() {
  alert("Followers Count Has Been Reset");
}
