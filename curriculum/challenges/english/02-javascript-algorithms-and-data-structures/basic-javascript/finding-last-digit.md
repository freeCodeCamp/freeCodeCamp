---
id: 661bb2ec557e2c551a684538
title: Finding Last Digit
challengeType: 1
dashedName: finding-last-digit
---

# --description--

Find the ending digit of any number!

In JavaScript, there's an operator (%) that can reveal the last digit of any number. Let's use it to find the last digit of a number.

# --instructions--

Write a program that prompts the user for a positive number. Then, use the modulo operator (%) to find the last digit of that number. Finally, print the last digit.

# --hints--

`lastDigit(843)` should return `3`

```js
assert(lastDigit(843)===3)
```

`lastDigit(321)` should return `1`

```js
assert(lastDigit(321)===1)

```

# --seed--
## --seed-contents--

```js
function lastDigit(number) {
    //  Only change code below this line
}

```

# --solutions--

```js
function lastDigit(number) {
    // Convert number to a string
    var numberString = number.toString();
    
    // Extract the last character
    var last = numberString.charAt(numberString.length - 1);

    // Convert the last character back to a number
    last = parseInt(last);

    return last;
}

```
