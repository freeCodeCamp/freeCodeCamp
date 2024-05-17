---
id: 6612f2a187c0950a9f5d2cbd
title: Finding Third Maximum in Four Numbers
challengeType: 1
dashedName: third-max-in-four-nums
---

# --description--

Find the third maximum among four numbers.

In this challenge, you are tasked with finding the third maximum among four given numbers. This problem tests your ability to compare numbers and determine their order.

Write a program that takes four numbers as input from the user and outputs the third maximum.

<h2>Hinglish</h2>

Is challenge mein, aapko diye gaye chaar numbers mein se third maximum number find karna hai. Ye problem aapki ability ko test karta hai numbers ko compare karne aur unki order determine karne mein.

Ek program likhiye jo user se chaar numbers input le aur third maximum output kare.
**Hints**

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt __________
Prompt 1: Can you explain the importance of handling equal numbers in this problem?
Prompt 2: What are the possible edge cases I need to consider in this problem?
Prompt 3: How would I handle scenarios where all four numbers are equal?



# --hints--

`findThirdMax(5,4,6,7)` should return `5`

```js
assert(findThirdMax(5,4,6,7)===5)
```

`findThirdMax(10,10,5,5)` should return `5`

```js
assert(findThirdMax(10,10,5,5)===5)
```

`findThirdMax(-1,0,-2,-3)` should return `-2`

```js
assert(findThirdMax(-1,0,-2,-3)===-2)
```

# --seed--
## --seed-contents--

```js
function findThirdMax(num1, num2, num3, num4) { 
    //  Only change code below this line
}

```

# --solutions--

```js

function findThirdMax(num1, num2, num3, num4) {
    // Find the maximum number among the four
    let max = Math.max(num1, num2, num3, num4);
    // Find the minimum number among the four
    let min = Math.min(num1, num2, num3, num4);

    // Initialize variables to store the first, second, and third maximum numbers
    let firstMax = min;
    let secondMax = min;
    let thirdMax = min;

    // Update the first, second, and third maximum numbers
    if (num1 > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = num1;
    } else if (num1 > secondMax) {
        thirdMax = secondMax;
        secondMax = num1;
    } else if (num1 > thirdMax) {
        thirdMax = num1;
    }

    if (num2 > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = num2;
    } else if (num2 > secondMax) {
        thirdMax = secondMax;
        secondMax = num2;
    } else if (num2 > thirdMax) {
        thirdMax = num2;
    }

    if (num3 > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = num3;
    } else if (num3 > secondMax) {
        thirdMax = secondMax;
        secondMax = num3;
    } else if (num3 > thirdMax) {
        thirdMax = num3;
    }

    if (num4 > firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
        firstMax = num4;
    } else if (num4 > secondMax) {
        thirdMax = secondMax;
        secondMax = num4;
    } else if (num4 > thirdMax) {
        thirdMax = num4;
    }

    return thirdMax;
}

```
