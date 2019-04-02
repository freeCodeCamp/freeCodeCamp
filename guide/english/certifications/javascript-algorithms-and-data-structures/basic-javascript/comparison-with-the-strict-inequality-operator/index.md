---
title: Comparison with the Strict Inequality Operator
---
## Comparison with the Strict Inequality Operator


### Problem explanation:
· _Add the `strict inequality operator` to the `if` statement so the function will return "Not Equal" when `val` is not strictly equal to `17`._

#### Hint 1
The strict inequality operator (`!==`) will return `true` if the first value is not equal to the second one taking value type into consideration.
> _try to solve the problem now_
> 

## Spoiler alert!

**Solution ahead!**

## Basic code solution:

```javascript
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);
```

### Code explanation
The function first evaluates `if` the condition `(val !== 17)` evaluates to `true` considering both value and value type. If it does, it returns the statement between the curly braces ("Not equal"). If it doesn't, it returns the next `return` statement outside them ("Equal"). 

### Resources

- ["Non-identity / strict inequality (!==)" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))
