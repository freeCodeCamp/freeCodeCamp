---
id: 6606cc932d3660142b585e31
title: Finding Remainder and Quotient with Javascript
challengeType: 1
dashedName: find-remainder
---

# --description--
**Objective:** Master integer division with remainder!
**Introduction:**
Imagine sharing apples with friends. You want to know how many whole apples each friend gets (quotient) and any leftover apples (remainder). In JavaScript, we can achieve this using division (/) for the quotient and the modulo operator (%) to find the remainder, which is the leftover value after a clean division is not possible.
**Challenge:**
Write a program that asks the user for two numbers (A and B). Then, calculate the quotient (whole number result) of dividing A by B and the remainder (leftover value after the division). Finally, print the quotient and remainder in separate lines.
<h2>Hinglish</h2>
**Lakshya:**Sampoorn division aur shesh ke saath ek ustaad bano!
**Parichay:**
Socho ki aap dost ke saath seb baant rahe hain. Aapko pata karna hai ki har dost ko kitne sampoorn seb milte hain (quotient) aur kuch bacha hua seb (remainder). JavaScript mein, hum iska hal division (/) se quotient aur modulo operator (%) ka istemal karke nikal sakte hain, jo bacha hua maan hai jab saaf division sambhav nahi hai.
**Challenge:**
Ek program likho jo upayogakarta se do numbers (A aur B) maangta hai. Fir, A ko B se divide karne ka quotient (purnank result) aur shesh (division ke baad bacha hua maan) ko calculate karta hai. Ant mein, quotient aur shesh ko alag-alag lines mein print karta hai.
**Note:** Output ko question mein diye gaye order mein print kare."

Click on this <a href="https://cs50.ai/chat"> Link</a>to Go to CS50 AI. Ask this Prompt. 

1. How to find remianders in Programming?
2. How does modulo operator work in coding?

# --hints--
`quotient` should return `2`.

```js
assert(quotient===2 )
```

`remainder` should return `2`.

```js
assert(remainder===2)
```

Should use `Math.floor` for `quotient`.

```js
assert(code.match(/Math.floor/g));
```

# --seed--
## --seed-contents--

```js
let A = 12
let B = 5
// Only change code below this line
```

# --solutions--

```js
let A = 12
let B = 5
// Calculate quotient and remainder
let quotient = Math.floor(A / B);
let remainder = A % B;
```

