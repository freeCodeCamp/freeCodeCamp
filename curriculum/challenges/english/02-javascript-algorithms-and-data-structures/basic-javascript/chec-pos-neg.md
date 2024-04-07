---
id: 6612f0aa105bf609c2c8ba7b
title: Check if Positive or Negative
challengeType: 1
dashedName: chec-pos-neg
---

# --description--

Develop JavaScript code that efficiently determines whether a user-entered number is positive, negative, or zero. This skill is essential for various programming tasks involving numerical comparisons.

In programming, understanding a number's sign (positive, negative, or zero) is a fundamental concept. This challenge introduces you to conditional statements (like if statements) in Javascript.

In this JavaScript challenge, you'll build a program that checks a number you enter.  Will it be positive, negative, or zero? We'll use either if statements

# --instructions--

Click on this <a href = "https://cs50.ai/chat">Link</a>  to Go to CS50 AI 
And use this prompt prompt __________
Prompt: What does it mean to 'identify the number's sign' in this context?




# --hints--

`checkNumber(6)` should return `Positive`

```js
assert(checkNumber(6)==="Positive")

```

`checkNumber(-6)` should return `Positive`

```js
assert(checkNumber(0)==="Zero")

```

`checkNumber(-6)` should return `Negative`

```js
assert(checkNumber(-6)==="Negative")

```

# --seed--
## --seed-contents--

```js
function checkNumber(number) {
    //  Only change code below this line
}

```

# --solutions--

```js
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
checkNumber(6)
checkNumber(-6)
checkNumber(0)
```
