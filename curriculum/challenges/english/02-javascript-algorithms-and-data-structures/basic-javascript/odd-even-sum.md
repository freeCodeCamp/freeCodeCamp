---
id: 661bbda189d54858509990c3
title: Odd Even Sum
challengeType: 1
dashedName: odd-even-sum
---

# --description--

Write a program to take a list of integers as input from the user and print the sum of all the odd numbers and even numbers in the given list. The program should print the sum of odd numbers first, followed by the sum of even numbers.


# --instructions--

Write a JavaScript function called `oddEvenSum` that takes an array of integers as input and returns an array containing the sum of all the odd numbers and even numbers in the input array, respectively.

Ensure that the output prints the sum of odd numbers and even numbers in this order only.

```js
// Input:
23 45 32 25 46 33 71 90
// Output:
197
168
```

# --hints--

Ensure that each sum (odd numbers sum and even numbers sum) is printed on a new line.

```js
assert(!code.match(/console\.log\(\d+\)/g));
```

input arr `[23, 45, 32, 25, 46, 33, 71, 90]` should return `[197, 168]`.

```js
const expectedOutput = [197, 168]; // Expected sums of odd and even numbers respectively
const actualOutput = oddEvenSum([23, 45, 32, 25, 46, 33, 71, 90]);
assert.deepEqual(actualOutput, expectedOutput, `Expected output: ${expectedOutput}, but got: ${actualOutput}`);

```

# --seed--
## --seed-contents--

```js
function oddEvenSum(arr) {
    // Only change code below this line


   // Only change code above this line
   
}

const inputArray = [23, 45, 32, 25, 46, 33, 71, 90];
const result = oddEvenSum(inputArray);
console.log(result[0]);
console.log(result[1]);
```

# --solutions--

```js
function oddEvenSum(arr) {
    let oddSum = 0;
    let evenSum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    return [oddSum, evenSum];
}
```

