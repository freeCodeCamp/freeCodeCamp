---
title: Rest Parameters
---

## Rest Parameters
In ES6, the rest paramter syntax `...` allows you to gather up an indefinite number of arguments into an array. 

Even though they look the same, it does the opposite of the spread operator, which takes every item from an iterable and spreads them out into their individual values. 

### Syntax

```js
function myFunc(...args) {
  console.log(args);
}

myFunc( 1, 2, 3, 4, 5);       // [1,2,3,4,5]

```

You can prefix a function's last parameter with `...` when you want to do something with the initial paramters and then treat all of the remaining parameters differently. 

```js
function convertCurrency(rate, fee, ...amounts) {
  return amounts.map(amount => (amount * rate) + fee);
}

convertCurrency(0.89, 2.5, 100, 250, 75, 150, 300); // [ 91.5, 225, 69.25, 136, 269.5 ]

```

The `...` lets you gather up the rest of the arguments, if there are any, into an array. 

### The difference between rest parameters and the arguments object

`arguments` is an array-like object, available inside functions, that contains the arguments passed to those functions. It's called "array-like" because it doesn't have all of an array's built in methods, such as `.forEach()` and `.map()`. 

The rest parameters are an array, with all of the array methods included. 
