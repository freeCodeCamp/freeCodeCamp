---
id: 661a7087c7f03a45b7d04fc0
title: Sum of Digits
challengeType: 1
dashedName: sum-digits
---

# --description--

Objective:
 The objective of this challenge is to write a program that calculates the sum of all the digits in a given number.


Introduction:
 Summing the digits of a number is a common task in programming. This challenge focuses on writing a program that efficiently computes the sum of the digits of a given integer.

 Challenge:
 Write a program that takes an integer from the user as input and prints the sum of all the digits in the given number.

 <h2>Hinglish<h2>

 Lakshya:
  Iss challenge ka objective hai ek program likhna jo ek di gayi sankhya mein jitne bhi ank hain unka yogfal nikale.

Prastavana:
 Sankhya ke anko ka yog karna programming mein ek aam task hai. Ye challenge ek aise program par dhyan kendrit karta hai jo ek di gayi integer ke anko ka yog shighra se ganit karta hai.

Chunauti:
Ek program likho jo user se ek puraank ko input ke roop mein lekar di gayi sankhya mein sabhi ank ka yogphal print karta hai.

**Examples:**

If the input number is `456`, the sum of the digits in the given number is `15`.

```js
sumOfDigits(456) // Output: 15
```

# --instructions--

Write a JavaScript function called `sumOfDigits` that takes a number as input and prints the sum of the digits of the given number.

1. function should not be empty.
2. use `modulus (%)` to operate with `temp` to get the `sum`
3. `temp` should be `modulus` by `10`

**Prompt**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Would you like us to consider any special cases or edge scenarios in our implementation?

# --hints--

Ensure that you calculate the sum of digits accurately without using any built-in functions.

```js
assert(!code.match(/\.split/));

```

# --seed--
## --seed-contents--

```js
function sumOfDigits(number) {
   
    let sum = 0;

    // Only change code below this line
        

    // Only change code above this line
    
    return sum;

   
}

sumOfDigits(456);
```

# --solutions--

```js
function sumOfDigits(number) {
   let sum = 0;
   let temp = Math.abs(number);
   while (temp > 0) {
       sum += temp % 10;
       temp = Math.floor(temp / 10);
   }
   return(sum);
}
```

