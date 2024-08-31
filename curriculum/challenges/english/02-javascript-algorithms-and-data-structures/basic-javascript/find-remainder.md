---
id: 6606cc932d3660142b585e31
title: Finding Remainder and Quotient with Javascript
challengeType: 1
dashedName: find-remainder
---

# --description--
**Objective:** 

Master integer division using Math. floor()! and remainder using % operator.

**Introduction:**
Imagine sharing apples with friends. You want to know how many whole apples each friend gets (quotient) and any leftover apples (remainder). In JavaScript, we can achieve this using division (/) for the quotient and the modulo operator (%) to find the remainder, which is the leftover value after a clean division is not possible.

Imagine dividing cookies among friends. You want to know how many cookies each friend gets without any leftover crumbs. In JavaScript, the division operator (/) gives us the result of dividing one number by another. But sometimes, we only care about the whole number result (quotient). This is where Math.floor() comes in! It rounds down a number to the nearest integer, ensuring we get the whole number of cookies each friend receives.

**Challenge:**
Write a program that asks the user for two numbers (A and B). Use Math. floor() to round down the result to the nearest integer, calculate the quotient (whole number result) of dividing A by B and the remainder (leftover value after the division). Finally, print the quotient and remainder in separate lines.

You should create to variable `quotient` and `remainder` to store the respective values. 

<h2>Hinglish</h2>
**Lakshya:**

Sampoorn division aur shesh ke saath ek ustaad bano!Math.floor() ka istemaal sikho

**Parichay:**


Socho ki aap dost ke saath seb baant rahe hain. Aapko pata karna hai ki har dost ko kitne sampoorn seb milte hain (quotient) aur kuch bacha hua seb (remainder). JavaScript mein, hum iska hal division (/) se quotient aur modulo operator (%) ka istemal karke nikal sakte hain, jo bacha hua maan hai jab saaf division sambhav nahi hai.

Imagine dividing cookies among friends. Aapko jaana hai kitne cookies har friend ko milte hain bina kisi leftover crumbs ke. JavaScript mein, division operator (/) humein ek number ko doosre number se divide karne ka result deta hai. Lekin kabhi kabhi, humein sirf whole number result (quotient) ki zaroorat hoti hai. Yahi pe `Math.floor()` kaam aata hai! Ye ek number ko nearest integer tak round down karta hai, ye ensure karte hue ki humein sirf whole number of cookies milte hain jo har friend ko milte hain.

**Challenge:**

Ek program likhiye jo user se do numbers (A aur B) puchta hai. `Math.floor()` ka use karke result ko nearest integer tak round down kariye, quotient (whole number result) calculate kariye jab A ko B se divide kiya jaye aur remainder (division ke baad bacha hua value) bhi calculate kariye. Aakhir mein, quotient aur remainder alag alag lines mein print kariye.

Aapko values ko store krne ke liye do variables `quotient` aur `remainder` declare krna hai.

**Note:** Output ko question mein diye gaye order mein print kare.

Click on this <a href="https://cs50.ai/chat"> Link</a>to Go to CS50 AI. Ask this Prompt. 

1. How to find remianders in Programming?
2. How does modulo operator work in coding?

# --hints--
`quotient` should return `2`.

```js
assert(quotient===2 );
```

`remainder` should return `2`.

```js
assert(remainder===2);
```

You should use `Math.floor` for `quotient`.

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

