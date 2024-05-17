---
id: 661a6fd12f879044795843ea
title: Interesting Decimal Series
challengeType: 1
dashedName: interesting-dec-series
---

# --description--

**Objective:**

 The objective of this challenge is to write a program that calculates the sum of a decimal series based on a user-defined input.

**Introduction:**
Computing the sum of a series involving decimal fractions is a common task in mathematics and programming. This challenge focuses on writing a program that efficiently calculates the sum of the series 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N where N is provided by the user.


**Challenge:**

Write a program that takes an integer N from the user as input and calculates the sum of the series 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

<h2>Hinglish</h2>
**Lakshya:**

Upayogakarta dwara nirdharit ek input ke aadhar par ek dashamalav shreni ka yog ganana karna.

**Parichay:**

Dashamalav fractions shamil karke ek shreni ka yog ganana ganit aur programming mein ek aam karya hai. Yeh challenge ek aise program par dhyan kendrit karta hai jo ek shreni ka yog prabhavi tareeke se ganit karta hai, jaise 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N, jahan N upayogakarta dwara pradan kiya gaya hai.

**Challenge:**
Ek program likho jo ek puri sankhya N ko upayogakarta se input ke roop mein leta hai aur shreni ka yog ganata hai 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N


**Examples:**

If the input number is `4`, the sum of the series is `2.08`.

```js
sumOfSeries(4) // Output: 2.08
```

# --instructions--

Write a JavaScript function called `sumOfSeries` that takes a number `N` as an argument and calculates the sum of the series:` 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/N`.

use the `sum` variable to count


Click on this <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI
And use this prompt.

1. Prompt 1: How would you like us to handle cases where N is zero or negative?
2. Prompt 2: Are there any specific considerations we should take into account when handling large values of N?

# --hints--

`sumOfSeries` should be a function.


```js
assert(typeof sumOfSeries === 'function');

```

You can use a loop to calculate the sum of the series.

```js
assert(code.match(/for\s*\(/));
```

`sumOfSeries(4)` should return `2.08`

```js
assert(sumOfSeries(4)==="2.08")
```

`sumOfSeries(6)` should return `2.45`

```js
assert(sumOfSeries(6)==="2.45")
```

`sumOfSeries(10)` should return `2.93`

```js
assert(sumOfSeries(10)==="2.93")
```

# --seed--
## --seed-contents--

```js
function sumOfSeries(N) {
   let sum =0;
   // Only change code below this line
   
       
   }
   // Only change code above this line
   return sum.toFixed(2);
}

sumOfSeries(6);
sumOfSeries(10);

```

# --solutions--

```js
function sumOfSeries(N) {
   let sum = 0;
   for (let i = 1; i <= N; i++) {
       sum += 1 / i;
   }
   return sum.toFixed(2);
}
```

