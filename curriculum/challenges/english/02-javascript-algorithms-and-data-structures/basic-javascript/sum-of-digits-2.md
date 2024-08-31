---
id: 66288e7c3bcc7716ca2bca1b
title: Sum of Digits-2
challengeType: 1
dashedName: sum-of-digits-2
---

# --description--

Given a number N, your task is to repeatedly find the sum of its digits until you get a single-digit number, and then print that digit.

<h2>Hinglish</h2>

Ek number N diya gaya hai, tumhara kaam hai uske digits ka sum lagatar nikalna jab tak tum ek single-digit number na mil jao. Fir jab woh ek single-digit number ho jaye, usse print karo.

**For example:**

For input `483`, the sum of its digits is `4 + 8 + 3 = 15`, and then `1 + 5 = 6`, so the output should be `6`.
For input `837`, the sum of its digits is `8 + 3 + 7 = 18`, and then `1 + 8 = 9`, so the output should be `9`.

# --instructions--

Write a function sumOfDigits that takes a number N as input and returns the single-digit result obtained by repeatedly summing its digits.

1. Use the modulo operator `%` to extract digits from the number.
2. Use integer division `Math.floor()` to remove the last digit from the number.
3. Implement a `loop` to repeatedly sum the digits until you get a single-digit number.
    
**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Would you like us to consider any special cases or edge scenarios in our implementation?


# --hints--

`sumOfDigits(483)` should return `6`.

```js
assert(sumOfDigits(483) === 6);


```

`sumOfDigits(837)` should return `9`.

```js
assert(sumOfDigits(837) === 9);

```

# --seed--
## --seed-contents--

```js
function sumOfDigits(N) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}

sumOfDigits();
```

# --solutions--

```js
function sumOfDigits(N) {
  while (N >= 10) {
    let sum = 0;
    while (N > 0) {
      sum += N % 10;
      N = Math.floor(N / 10);
    }
    N = sum;
  }
  return N;
}

```

