---
title: Use conditional logic with If statements
---
# Use conditional logic with If statements


---
## Hints

### Hint 1
Your `if` statement will evaluate whether your `(condition)` is `true` or `false` and execute (if it evaluates to `true`) the `{statement}` declared right after it.

### Hint 2
In case your `(condition)` evaluates to `false` the `{statement}` won't be executed and function will return the next `return` statement. 


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
// Setup
function trueOrFalse(wasThatTrue) {
  // Only change code below this line.

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.
}
```

#### Code Explanation
The function first evaluates `if` the condition `(wasThatTrue)` evaluates to `true`. If it does, ir returns the statement between the curly braces. If it doesn't, it returns the next `return` statement outside them. 

#### Relevant Links
- ["Boolean" - MDN Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)

- ["if...else" - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

</details>
