---
title: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem 
---

# Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem 

---
## Problem Explanation

We need to compute and square values from the `realNumberArray` and store them in the variable `squaredIntegers` using the `map()`, `filter()`, and/or `reduce()` functions.


---
## Hints

### Hint 1

*   You will need to `filter()` the `realNumberArray` for positive integers (decimals are not integers).


### Hint 2

*   You will need to `map()` the values from your `filter()` function to the variable `squaredIntegers`.


### Hint 3

*   Remember the magic of chaining functions.


<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
const squareList = arr =>
  arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
```

#### Code Explanation

Uses the operator `filter()` and `map()` functions to square all positive integers in a given array.
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>


```js
const squareList = arr => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};
```

#### Code Explanation
This does basically the same but uses the `isInteger()` method to check the numbers.


#### Relevant Links

- ["Array.prototype.map()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- ["Array.prototype.filter()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- ["Array.prototype.reduce()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- ["Number.isInteger()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
- ["Math.pow()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
</details>
