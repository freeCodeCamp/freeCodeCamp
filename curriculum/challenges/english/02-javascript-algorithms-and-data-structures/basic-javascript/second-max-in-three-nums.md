---
id: 6612f20c9620c70a5a2a2f19
title: Finding Second Maximum in Three Numbers
challengeType: 1
dashedName: second-max-in-three-nums
---

# --description--

Find the second maximum among three numbers.

In this challenge, you are tasked with finding the second maximum among three given numbers. This problem tests your ability to compare numbers and determine their order.

Write a program that takes three numbers as input from the user and outputs the second maximum. First, implement it using a traditional approach, then optimize it by using only three comparisons.
<h2>Hinglish</h2>
Is challenge mein, aapko diye gaye teen numbers mein se second maximum number find karna hai. Ye problem aapki ability ko test karta hai numbers ko compare karne aur unki order determine karne mein.

Ek program likhiye jo user se teen numbers input le aur second maximum output kare. Pehle ise traditional approach se implement kariye, fir ise sirf teen comparisons ka use karke optimize kariye.
**Hints**

Click on this -<a href = "https://cs50.ai/chat"> Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt 1: Can you explain the significance of using only three comparisons to find the second maximum?
Prompt 2: What are the possible edge cases I need to consider in this problem?
Prompt 3: How would I handle scenarios where two or more numbers are equal?


# --hints--

`findSecondMax(5,4,6)` should return `5`

```js
assert(findSecondMax(5,4,6)===5);
```

`findSecondMax(10,10,5)` should return `10`

```js
assert(findSecondMax(10,10,5)===10);
```

`findSecondMax(-1,0,-2)` should return `-1`

```js
assert(findSecondMax(-1,0,-1)===-1);
```

# --seed--
## --seed-contents--

```js
function findSecondMax(num1, num2, num3) {
    //  Only change code below this line
}

```

# --solutions--

```js
function findSecondMax(num1, num2, num3) {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    return num1 + num2 + num3 - max - min;
}
```
