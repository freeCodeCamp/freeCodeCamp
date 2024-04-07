---
id: 6612f547127b940ecd79b0b8
title: Perfectly Divisible
challengeType: 1
dashedName: perfectly-divisible
---

# --description--

Write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?


# --hints--

`15,4` should return `12`

```js
assert(findLargestDivisibleNumber(15,4)===12)
```

`27,5` should return `25`

```js
assert(findLargestDivisibleNumber(27,5)===25)
```

# --seed--
## --seed-contents--

```js
function findLargestDivisibleNumber(A, B) {
     //  Only change code below this line
}

```

# --solutions--

```js
function findLargestDivisibleNumber(A, B) {
    return Math.floor((A - 1) / B) * B;
}
findLargestDivisibleNumber(15,4)
findLargestDivisibleNumber(27,5)

```
