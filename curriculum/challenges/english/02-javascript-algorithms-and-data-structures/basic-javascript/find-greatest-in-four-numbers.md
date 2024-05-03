---
id: 6633870a1bb230f155bc79fd
title: Find Greatest Number in Four Numbers
challengeType: 1
dashedName: find-greatest-in-four-numbers
---

# --description--

Develop JavaScript code that efficiently identifies the largest number among four distinct values entered by the user.

Comparing numbers is essential in programming. This challenge strengthens your JavaScript skills by teaching you how to determine the greatest number from user input using conditional statements.

Write JavaScript code to efficiently find the largest number among four distinct user-entered values using conditional statements and display the result!

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt: How can I chain comparisons to ultimately find the largest number?


# --hints--

`98,13,29,58` should return `98`

```js
assert(findGreatestNumber(98, 13, 29, 58)===98)

```

`7, 42, 15, 3` should return `42`

```js
assert(findGreatestNumber(7,42,15,3)===42)

```

# --seed--

## --seed-contents--

```js
function findGreatestNumber(num1, num2, num3, num4) {
    //  Only change code below this line
}

```

# --solutions--

```js
function findGreatestNumber(num1, num2, num3, num4) {
    let greatest = num1;
    if (num2 > greatest) {
        greatest = num2;
    }
    if (num3 > greatest) {
        greatest = num3;
    }
    if (num4 > greatest) {
        greatest = num4;
    }
    return greatest;
}
findGreatestNumber(98, 13, 29, 58);
findGreatestNumber(7,42,15,3);
```
