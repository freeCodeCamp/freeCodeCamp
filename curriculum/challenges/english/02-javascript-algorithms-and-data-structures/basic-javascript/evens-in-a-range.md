---
id: 661a6d9381ae1d433a6e5ec3
title: Finding Even Numbers in a Range
challengeType: 1
dashedName: evens-in-a-range
---

# --description--

Imagine you're on a fun journey of exploring numbers! You're on an exciting journey exploring numbers! Your goal is to find and print all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder.

Write a JavaScript function called printEvenNumbers that takes a number as an argument and prints all the even numbers from 1 up to the given number.

# --instructions--

Write a JavaScript function called `printEvenNumbers` that takes a `number` as an argument and prints all the `even` numbers from 1 up to the given number.

For `example`, if the input number is `10`, your function should print `"2 4 6 8 10"`.

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
