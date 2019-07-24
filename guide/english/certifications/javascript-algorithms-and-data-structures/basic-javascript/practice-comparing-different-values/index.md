---
title: Practice comparing different values
---
# Practice comparing different values


---
## Hints

### Hint 1
Remember from last exercises that _unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion._<sup><a href="#cite1">1</a></sup>



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
```

#### Code Explanation
The function first evaluates `if` the condition `(a === b)` evaluates to `true` considering both type and value. If it does, it returns the statement between the curly braces ("Equal"). If it doesn't, it returns the next `return` statement outside them ("Not equal"). 

#### Relevant Links

<span id="cite1">1</span>. ["Basic JavaScript: Comparison with the Strict Equality Operator", fCC lesson at *JavaScript Algorithms And Data Structures Certification*](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

- ["Using the Equality Operators" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)
</details>
