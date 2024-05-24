---
id: 661bb2ec557e2c551a684538
title: Finding Last Digit
challengeType: 1
dashedName: finding-last-digit
---

# --description--

Find the ending digit of any number!

**Introduction**

In JavaScript, there's an operator (%) that can reveal the last digit of any number. Let's use it to find the last digit of a number.

<h2>Hinglish</h2>

JavaScript me `%` operatoe ka use krke hum kisi bhi number ki last digit ki value find kar sakte hain.

# --instructions--

Write a program that uses the modulo operator (%) to find the last digit of that number. Finally, print the last digit.

Create a variable named `lastDigit`.

**Hints**

Click on this <a href = "https://cs50.ai/chat">Link</a> - to Go to CS50 AI. And use this prompt.

1. Prompt:  How can we use that special symbol (%) to grab the last digit of a number we get from the user?


# --hints--

You should use `%` operator

```js
assert(code.match(/%/g));
```

Value of `lastDigit` should be `3`.

```js
assert(lastDigit === "3" || lastDigit === 3);
```

Use `console.log()` to print the last digit.

```js
assert(code.match(/console.log/));
```

# --seed--
## --seed-contents--

```js
var number = 843;
//Only change code below this line

```

# --solutions--

```js

var number = 843;
var lastDigit = number%10;
console.log(lastDigit);
 
```
