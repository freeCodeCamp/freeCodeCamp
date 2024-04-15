---
id: 661a72950a02b346c33e851f
title: Checking Perfect Numbers
challengeType: 1
dashedName: finding-perfect
---

# --description--

Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.

A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No.

**Examples:**

If the input number is `6`, it is a perfect number, so the output should be `Yes`.

```js
perfectNumberCheck(6) // Output: Yes
```

# --instructions--

Write a JavaScript function called `perfectNumberCheck` that takes a number as input and prints "Yes" if it's a perfect number and "No" otherwise.

1. Take a variable called sum.
2. Iterate a loop.
3. Check the condition to see if the number is perfect.
4. If the condition is true, count it as the sum variable.

# --hints--

`perfectNumberCheck(6)` should output `Yes`.

```js
if (typeof perfectNumberCheck === 'function') {
  capture();
  perfectNumberCheck(6);
  uncapture();
}
assert(logOutput === 'Yes');

```

`perfectNumberCheck(12)` should output `No`.


```js
if (typeof perfectNumberCheck === 'function') {
  capture();
  perfectNumberCheck(12);
  uncapture();
}
assert(logOutput === 'No');

```

Ensure that you accurately determine whether the number is perfect or not.

```js
assert(!code.match(/\/\//));

```

# --seed--
## --seed-contents--

```js
function perfectNumberCheck(number) {
   // Only change code below this line


   // Only change code above this line
}

perfectNumberCheck(6);

perfectNumberCheck(12);
```

# --solutions--

```js
function perfectNumberCheck(number) {
   let sum = 0;
   for (let i = 1; i < number; i++) {
       if (number % i === 0) {
           sum += i;
       }
   }
   console.log(sum === number ? "Yes" : "No");
}
```
