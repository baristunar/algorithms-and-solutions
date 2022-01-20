/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Time complexity MUST be O(N)

*/
const sameFrequency = (num1, num2) => {


  num1 = num1.toString();
  num2 = num2.toString();

  if (num1.length !== num2.length) return false;

  const firstNumber = {};
  const secondNumber = {};

  for (const num of num1) {
    firstNumber[num] = (firstNumber[num] || 0) + 1;
  }

  for (const num of num2) {
    secondNumber[num] = (secondNumber[num] || 0) + 1;
  }

  for (const key in firstNumber) {
    if (!(key in secondNumber)) return false;

    if (firstNumber[key] !== secondNumber[key]) return false;
  }

  return true
}

console.log(sameFrequency(212, 122));
console.log(sameFrequency(2, 122));
console.log(sameFrequency(515, 321));
console.log(sameFrequency(515, 155));

