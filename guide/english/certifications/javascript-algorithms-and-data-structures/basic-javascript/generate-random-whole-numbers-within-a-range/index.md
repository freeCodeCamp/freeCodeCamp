---
title: Generate Random Whole Numbers within a Range
---
## Generate Random Whole Numbers within a Range


### Problem explanation:
_Create a function called `randomRange` that takes a range `myMin` and `myMax`and returns a random number that's greater than or equal to `myMin`, and is less than or equal to `myMax`, inclusive._

#### Hint 1
`randomRange` should use both `myMax` and `myMin`, and return a random number in your range.

You cannot pass the test if you are only re-using the function `ourRandomRange` inside your `randomRange` formula. You need to write your own formula that uses the variables `myMax` and `myMin`. It will do the same job as using `ourRandomRange`, but ensures that you have understood the principles of the `Math.floor()` and `Math.random()` functions.
> _try to solve the problem now_


## Spoiler alert!

**Solution ahead!**

## Basic code solution:

```javascript
function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);

}
```
·  Run code at [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Random-whole-numbers-within-range).

### Code explanation
- `Math.random()` generates our random number between 0 and ≈ 0.9.
- Before multiplying it, it resolves the part between parenthesis `(myMax - myMin + 1)` because of the grouping operator `(   )`.
- The result of that multiplication is followed by adding `myMin` and then "rounded" to the largest integer less than or equal to it (eg: 9.9 would result in 9)

If the values were `myMin = 1, myMax= 10`, one result could be the following:
 1. `Math.random() = 0.8244326990411024`
 2. `(myMax - myMin + 1) = 10 - 1 + 1 -> 10`
 3. `a * b =  8.244326990411024`
 4. `c + myMin = 9.244326990411024`
 5. `Math.floor(9.244326990411024) = 9`


### Resources

- ["Math.random()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- ["Math.floor()" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- ["Grouping operator" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping)


