---
id: 661bbb0abe070c57af09be41
title: Create an Array of Natural Numbers
challengeType: 1
dashedName: create-array-of-natural-numbers
---

# --description--

**Objective**: The objective of this challenge is to write a program that creates an array containing the first 20 natural numbers.

**Introduction**: Natural numbers are positive integers starting from 1. Creating an array containing the first 20 natural numbers is a basic programming task that helps in understanding array initialization and manipulation.



# --instructions--

Write a program that creates an array containing the first 20 natural numbers and prints it.

# --hints--

`createArray(5)` should return `[1,2,3,4,5]`.

```js
assert(createArray(5)===[1,2,3,4,5]);
```

`createArray(10)` should return `[1,2,3,4,5,6,7,8,9,10]`. 

```js
assert(createArray(10)===[1,2,3,4,5,6,7,8,9,10]);
```

# --seed--

## --seed-contents--

```js
function createArray(num){
  //Only change code below this line
  
  
  
  //Only change code above this line
}

createArray(5);
createArray(10);

```

# --solutions--

```js
function createArray(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}

createArray(5);
createArray(10);

```
