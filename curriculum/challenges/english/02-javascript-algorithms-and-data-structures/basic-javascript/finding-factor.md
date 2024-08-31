---
id: 664136b9352eac18eec20bec
title: Finding Factors
challengeType: 1
dashedName: finding-factor
---

# --description--

Objective: The objective of this challenge is to write a program that finds the factors of a given number.

Introduction: Finding factors of a number is a fundamental mathematical operation. Factors are the numbers that divide a given number without leaving a remainder. This challenge focuses on writing a program that efficiently computes the factors of a given integer.

Challenge: Write a program that takes an integer from the user as input and prints all the factors of the given number.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka uddeshya hai ek program likhna jo di gayi sankhya ke sabhi gunank ke prapt karta hai.

Prastavana: Sankhya ke gunank prapt karna ek moolyankan ganitik prakriya hai. Gunank vo sankhyaen hoti hain jo di gayi sankhya ko bina shesh bhag ke baant deti hain. Ye challenge ek aise program ko likhne par dhyan karta hai jo di gayi puri sankhya ke gunank ko prapt karta hai.

Chunauti: Ek program likho jo istemalakarta se ek puri sankhya ka input leta hai aur di gayi sankhya ke sabhi gunank ko print karta hai.

# --instructions--

Write a program that takes an integer from the user as input and prints all the factors of the given number.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. How can we find Factors of a number in programming.
2. Are there any particular edge cases or scenarios we should be aware of?

# --hints--

For `findFactors(12)`, the expected output is ` [1, 2, 3, 4, 6, 12]`.

```js
assert.deepEqual(findFactors(12), [1, 2, 3, 4, 6, 12]);

```

# --seed--

## --seed-contents--

```js

function findFactors(num) {
  // Only change code below this line

  return
  // Only change code above this line
}

findFactors(12);


```

# --solutions--

```js
function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
```
