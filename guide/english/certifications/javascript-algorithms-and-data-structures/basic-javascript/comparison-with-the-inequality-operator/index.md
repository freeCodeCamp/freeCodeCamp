---
title: Comparison with the Inequality Operator
---
# Comparison with the Inequality Operator

---
## Problem Explanation
· _Add the inequality operator `!=` in the `if` statement so that the function will return "Not equal" when `val` is not equivalent to `99`._


---
## Hints

### Hint 1
The inequality operator (`!=`) will return `true` if the first value is not equal to the second one without taking value type into consideration.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
```

#### Code Explanation
The function first evaluates `if` the condition `(val != 99)` evaluates to `true`. If it does, it returns the statement between the curly braces ("Not equal"). If it doesn't, it returns the next `return` statement outside them ("Equal"). 

#### Relevant Links

- ["Inequality operator" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators#Inequality_(!))
</details>
