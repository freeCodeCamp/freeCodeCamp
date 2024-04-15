---
id: 661a7087c7f03a45b7d04fc0
title: Sum of Digits
challengeType: 1
dashedName: sum-digits
---

# --description--


Write a program to take a number from the user and print the sum of the digits of the given number.

**Examples:**

If the input number is `456`, the sum of the digits in the given number is `15`.

```js
sumOfDigits(456) // Output: 15
```

# --instructions--

Write a JavaScript function called `sumOfDigits` that takes a number as input and prints the sum of the digits of the given number.

1. function should not be empty.
2. use `module (%)` to oprate with `temp` to get the `sum`
3. `temp` should be `moduled` by `10`

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
    let temp = Math.abs(number);

    // Only change code below this line
    while (temp > 0) {
        

        // Only change code above this line
        temp = Math.floor(temp / 10);
    }
    
    console.log(sum);

   
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
   console.log(sum);
}
```
