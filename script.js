function calculate() {
  var initialAmount = parseFloat(document.getElementById('initialAmount').value);
  var telescopePrice = parseFloat(document.getElementById('telescopePrice').value);

  if (isNaN(initialAmount) || isNaN(telescopePrice)) {
    alert('Please enter valid numbers.');
    return;
  }

  var amountLeft = initialAmount - telescopePrice;

  if (amountLeft >= 0) {
    document.getElementById('result').innerHTML = 'Amount left to buy the telescope: $' + amountLeft.toFixed(2);
  } else {
    document.getElementById('result').innerHTML = 'You need an additional $' + Math.abs(amountLeft).toFixed(2) + ' to buy the telescope.';
  }
}

function calculateBasic(operator) {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers.');
    return;
  }

  var result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert('Cannot divide by zero.');
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert('Invalid operator.');
      return;
  }

  document.getElementById('result').innerHTML = 'Result: ' + result.toFixed(2);
}
