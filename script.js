function getValues() {
  number = document.querySelector('.n').value;
  power = document.querySelector('.power').value;
  pow(number, power);
}

function pow(number, power) {
  if (!(number || power)) {
    document.querySelector('p').textContent = `Please input numbers.`;
  } else {
    let answer = number;
    for (var i = 1; i < power; i++) {
      answer *= number
    }
    document.querySelector('p').textContent = `${number} to the power of ${power} is ${answer}.`;
  }
}