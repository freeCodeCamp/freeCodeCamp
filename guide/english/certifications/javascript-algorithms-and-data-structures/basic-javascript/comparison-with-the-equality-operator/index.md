---
title: Comparison with the Equality Operator
---
# Comparison with the equality operator

---
## Problem Explanation
_Add the equality operator to the indicated line so that the function will return "Equal" when `val` is equivalent to 12._


---
## Hints

### Hint 1
Remember that _equality is different from assignment (`=`), which assigns the value at the right of the operator to a variable in the left._<sup><a href="#cite1">1</a></sup>



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not equal";
}
// Change this value to test
testEqual(10);
```

#### Code Explanation
The function first evaluates `if` the condition `(val == 12)` evaluates to `true`. If it does, it returns the statement between the curly braces ("Equal"). If it doesn't, it returns the next `return` statement outside them ("Not equal"). 

#### Relevant Links
- <span id="cite1">1</span>. ["Basic JavaScript: Comparison with the Equality Operator", fCC lesson at *JavaScript Algorithms And Data Structures Certification*](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

- ["Equality operator" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())
</details>
