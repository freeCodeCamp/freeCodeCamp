---
id: 661a6d9381ae1d433a6e5ec3
title: Finding Even Numbers in a Range
challengeType: 1
dashedName: evens-in-a-range
---

# --description--

Imagine you're on a fun journey of exploring numbers! You're on an exciting journey exploring numbers! Your goal is to find and print all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder.

<h2>Hinglish </h2>

Imagine ki aap ek mazedaar safar par hain sankhyao ko explore karne ka! Aap ek thrilling yatra par hain sankhyao ko explore karte hue! Aapka lakshya hai ek nishchit maan tak sabhi even sankhyao ko khojna aur print karna. Even sankhyaein woh hain jo 2 se bhag karne par bina bacha chhode divisble hoti hain.

# --instructions--

Write a JavaScript function called `printEvenNumbers` that takes a `number` as an argument and prints all the `even` numbers from 1 till `n` (including n)the given number.

For `example`, if the input number is `10`, your function should print `"2 4 6 8 10"`.

 <hr>

Ek JavaScript function likhein `printEvenNumbers` jo ek `number` ko argument ke roop mein le aur 1 se `n` tak (n ko shaamil karke) ke sabhi `even` numbers ko print kare.

For `example`, agar input number `10` hai, to aapka function `"2 4 6 8 10"` ko print karna chahiye.



# --hints--

`printEvenNumbers` should be a function and use a loop to iterate through numbers from 1 up to the given number.
Use the modulus operator (%) to check if a number is even.
Print only the even numbers..

```js
assert(typeof printEvenNumbers === 'function');
```

You should call `printEvenNumbers` with a number after you define it.

```js
assert(
  /printEvenNumbers\(\d+\)/.test(
    code.replace(/\s/g, '')
  )
);
```

# --seed--
## --seed-contents--



```js
function printEvenNumbers(number) {
   // Only change code below this line


   
}


// Only change code above this line
```

# --solutions--

```js

function printEvenNumbers(number) {
   for (let i = 1; i <= number; i++) {
       if (i % 2 === 0) {
           console.log(i.toString() + ' ');
       }
   }
}

```
