---
id: 6612f547127b940ecd79b0b8
title: Perfectly Divisible
challengeType: 1
dashedName: perfectly-divisible
---

# --description--

Write a program to take two numbers, A and B. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?

# --instructions--

Find the largest number divisible by `A`. 

Create a variable named `largestNumber` that stores the value.


# --hints--

You should create a variable named `largestNumber`.

```js
assert(code.match(largestNumber));
```

You should be using `Math.floor` 

```js
assert(code.match(/Math\.floor/g).length >= 0);
```

Variable `largestNumber` should return `25`.

```js
assert(largestNumber===25)
```

# --seed--
## --seed-contents--

```js
var A = 27
var B = 5
//  Only change code below this line


```

# --solutions--

```js
var A = 27
var B = 5

// Finding the largest number less than A that is divisible by B
var largestNumber = Math.floor((A - 1) / B) * B;
```
