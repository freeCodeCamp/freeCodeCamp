---
id: 6612ee88a87eb008ba77eb6f
title: Find Greater of two Numbers
challengeType: 1
dashedName: find-greater-of-two-nums
---

# --description--

Write a program to take two numbers from the user and determine the greater of those two given numbers.

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt: How can we use different messages based on the comparison using conditional statements



# --hints--

`findGreaterNumber(20,3)` should return `20`

```js
assert(findGreaterNumber(20, 3)===20);
```

`findGreaterNumber(5,7)` should return `7`

```js
assert(findGreaterNumber(5, 7)===7);
```


# --seed--

## --seed-contents--

```js
function findGreaterNumber(number1, number2) {
    // Only change code below this line
}

```

# --solutions--

```js
function findGreaterNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return "Both numbers are equal.";
    }
}


// Call the function to find the greater number
findGreaterNumber(20,3)
findGreaterNumber(5, 7);
```
