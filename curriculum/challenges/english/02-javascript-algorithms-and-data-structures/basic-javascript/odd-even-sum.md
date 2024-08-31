---
id: 661bbda189d54858509990c3
title: Odd Even Sum
challengeType: 1
dashedName: odd-even-sum
---

# --description--

Objective: The objective of this challenge is to write a program that calculates the sum of odd and even elements separately in a given array.

Introduction: Summing the odd and even elements separately in an array is a common task in programming. This challenge focuses on writing a program that efficiently calculates the sum of odd and even numbers in a given array.

Challenge: Write a program that takes an array of numbers as input and prints the sum of all the odd numbers and even numbers separately, in that order.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka lakshya hai ek program likhna jo di gayi array mein vishesh roop se vishama aur samaankon ke yog ko alag-alag gina.

Prastavana: Ek array mein vishama aur samaankon ke yog ko alag-alag ginaana programming mein ek aam karya hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye array mein vishesh roop se vishama aur samaankon ke yog ko kis tarah se prabhavshali tareeke se ginaya ja sake.

Chunauti: Ek program likho jo sankhyon ka ek array input ke roop mein le aur usmein maujood sabhi vishama aur samaankon ke yog ko alag-alag, usi kram mein, print kare.

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

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Could you describe your approach for calculating the sum of odd and even numbers separately?
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?

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

    return
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


