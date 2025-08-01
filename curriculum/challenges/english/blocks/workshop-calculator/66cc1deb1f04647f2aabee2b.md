---
id: 66cc1deb1f04647f2aabee2b
title: Step 15
challengeType: 1
dashedName: step-15
---

# --description--

If you look in the console, you will see the `Infinity` value. `Infinity` is a special value in JavaScript that represents a number that is greater than any other number.

The division by zero is not a valid operation in mathematics.

To account for this edge case, you should update your `calculateQuotient` function to instead check if `num2` is zero. 

If it is, the function should return the string `"Error: Division by zero"`. Otherwise, it should return the result of dividing `num1` by `num2`.

# --hints--

Your `calculateQuotient` function should return the string `"Error: Division by zero"` if `num2` is zero. 

```js
assert.strictEqual(calculateQuotient(10, 0), 'Error: Division by zero');
assert.strictEqual(calculateQuotient(3, 0), 'Error: Division by zero');
```

Your `calculateQuotient` function should return the result of dividing `num1` by `num2` if `num2` is not zero.

```js
assert.strictEqual(calculateQuotient(10, 2), 5);
assert.strictEqual(calculateQuotient(3, 3), 1);
```

# --seed--

## --seed-contents--

```js
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

--fcc-editable-region--

function calculateQuotient(num1, num2) {
  return num1 / num2;
}

--fcc-editable-region--

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));
```
