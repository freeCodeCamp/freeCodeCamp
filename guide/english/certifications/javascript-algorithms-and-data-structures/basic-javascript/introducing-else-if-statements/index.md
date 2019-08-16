---
title: Introducing Else If statements
---
# Introducing Else If statements

---
## Problem Explanation

We'll be modifying the existing code above so that it follows the flow of logic that an **else-if** statement has.

### Hint 1
```javascript
   if (val > 10) {
    return "Greater than 10";
  }
```
  All `if` statements and their variants start off with an `if` statement.
 
### Hint 2
```javascript
  else if (val < 5) {
    return "Smaller than 5";
  }
```
  Statements between the `if` statement and the `else` statement in an **else-if** flow are in the else-if format
 
### Hint 3
```javascript
else {
  return "Between 5 and 10";
  }
```
 The last statement in an **else-if** flow is in the `else` format


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
```

#### Code Explanation
The structure of an **else-if logic flow** is an initial `if` statement, one more `if-else` statements, and one final `else` statement.
 
#### Relevant Links
- ["if...else" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
</details>

