function performOperation() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    try {
      if (num2 == 0) throw new Error("Cannot Divide by Zero");

      let result1 = multiply(num1, num2);
      let result2 = add(num1, num2);
      let result3 = division(num1, num2);

      displayResult(result1, result2, result3);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    displayResult("Please enter valid numbers");
  }

  function multiply(a, b) {
    return a * b;
  }

  function add(a, b) {
    return a + b;
  }

  function division(a, b) {
    return a / b;
  }

  function displayResult(result1, result2, result3) {
    const resultElement = document.getElementById("result");

    resultElement.innerHTML = `The result of Multiplication is : ${result1}<br>
       The result of Addition is : ${result2}<br>
       The result of Division is : ${result3}`;
  }
}
