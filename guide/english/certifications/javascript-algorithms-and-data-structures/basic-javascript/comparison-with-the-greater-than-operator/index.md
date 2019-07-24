---
title: Comparison with the greater than operator (>)
---
# Comparison with the Greater Than Operator (>)


---
## Problem Explanation
· _Add the `greater than` operator to the indicated lines so that the return statements make sense._


---
## Hints

### Hint 1
The greater than operator `(>)` compares both operands using type coercion (converting data types if necessary) and returns `true` if the first one is greater than the second one.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or under";
}

// Change this value to test
testGreaterThan(10);
```
#### Code Explanation
The function first evaluates `if` the condition `(val > 100)` evaluates to `true` converting `val` to a number if necessary. If it does, it returns the statement between the curly braces ("Over 100"). If it doesn't, it checks if the next condition is `true` (returning "Over 10"). Otherwise the function will return "10 or under".

#### Relevant Links

- ["Greater than operator (>)" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Greater_than_operator_(%3E))
</details>
