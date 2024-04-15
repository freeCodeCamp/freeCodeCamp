---
id: 661a70d9105d3745fb8289f3
title: Reverse Digits
challengeType: 1
dashedName: revrse-digits
---

# --description--

Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

**Examples:**

If the input number is `478`, the number formed by reversing the digits is `874`.

```js
reverseDigits(478) // Output: 874
```

# --instructions--

Write a JavaScript function called `reverseDigits` that takes a number as input and prints the number formed by `reversing` the digits of the given number.

To achive this you can use `parseInt`, `String`, `split`(), `reverse`(), `join`(), functions.
# --hints--

`reverseDigits` should be a function.

```js
assert(typeof reverseDigits === 'function');
```

Ensure that the digits of the input number are reversed correctly and returned as a number.


```js
assert(reverseDigits(123) === 321, 'Digits are not reversed correctly.');

```

# --seed--
## --seed-contents--

```js
function reverseDigits(number) {
   // Only change code below this line


   // Only change code above this line
}

reverseDigits(123);

```

# --solutions--

```js
function reverseDigits(number) {
   let reversed = parseInt(String(number).split('').reverse().join(''));
   return(reversed);
}
```

