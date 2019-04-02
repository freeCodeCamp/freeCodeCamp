---
title: Comparisons with the && (logical AND) operator
---
## Comparisons with the && (logical AND) operator

### Problem explanation:
· _Combine the two if statements into one statement which will return `"Yes"` if `val` is less than or equal to `50` and greater than or equal to `25`. Otherwise, will return `"No"`._

#### Hint 1
The logical AND (`&&`) operator compares both statements and returns `true` only if both are true or can be converted to true (truthy).
> _try to solve the problem now_
> 

#### Hint 2
Remember that this effect can be also achieved by nesting `if` statements.
> _try to solve the problem now_
> 

## Spoiler alert!

**Solution ahead!**

## Basic code solution:

```javascript
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
```
· [Run code at repl.it](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### Code explanation
The function first evaluates `if` the condition `val <= 50` evaluates to `true` converting `val` to a number if necessary, then does the same with `val >=25` because of the logical AND (`&&`) operator; if both return true, the `return "Yes"` statement is executed. 

### Resources

- ["Logical operators" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
