---
id: 661a6798129b0c40e6cc6fed
title: Swapping Variable-values
challengeType: 1
dashedName: swapping-var-val
---

# --description--

Imagine you and your friend have brought different snacks for lunch. However, you want to exchange your snacks with each other. To do this, you decide to enlist the help of a friend who can hold one snack box while you exchange with your other friend. Similarly, in programming, we can use a third variable to help us swap the values of two variables.

Write a JavaScript function called swapValues that takes two values as input and swaps them. Your function should use a third variable as a helper to facilitate the swap operation.

# --instructions--

Write a JavaScript function called swapValues that takes two values as input and swaps them. Your function should use a third variable as a helper to facilitate the swap operation.

# --hints--

value should be like `[4,12]`.

```js
assert(swapValues(12, 4).toString() === [4, 12].toString(), "Values not swapped correctly.");
```
 
 value should be like `[45,99]`
 
```js
assert(swapValues(99, 45).toString() === [45, 99].toString(),  "Values not swapped correctly.");
```

# --seed--

## --seed-contents--

```js

function swapValues(value1, value2) {
   // Only change code below this line


    // Only change code above this line

}

console.log(swapValues(12, 4)); 
console.log(swapValues(99, 45)); 

```

# --solutions--

```js
function swapValues(value1, value2) {

let helper = value1;
    value1 = value2;
    value2 = helper;
    return [value1, value2];
}
console.log(swapValues(12, 4)); 
console.log(swapValues(99, 45));

``` 

