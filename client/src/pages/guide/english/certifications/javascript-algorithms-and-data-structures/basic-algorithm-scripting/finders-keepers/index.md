---
title: Finders Keepers
---
## Problem Explanation
We need to return the element from an array that passes a function. Both the `function` and the `array` are passed into our function `findElement(arr, func)`.

## Hint: 1
Looking through the array can be done with a `for` loop.
>*try to solve the problem now*

## Hint: 2
`num` is passed to the function. We will need to set it to the elements we want to check with the function.
>*try to solve the problem now*

## Hint: 3
Do not forget, if none of the numbers in the array pass the test, it should return `undefined`.
>*try to solve the problem now*

## Basic Solution

```javascript
function findElement(arr, func) {
  let num = 0;
  
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  
  return undefined;
}
```

## Code Explanation

* Challenge asks us to look through array. This is done using a `for` loop.
* The `num` variable is being passed into the function, so we set it to each index in our array.
* The pre-defined function already checks each number for us, so if it is "true", we return that num.
* If none of the numbers in the array pass the function's test, we return undefined.
