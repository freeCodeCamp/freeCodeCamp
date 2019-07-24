---
title: Introducing Else statements
---
# Introducing Else statements


---
## Hints

### Hint 1
When the first  `if` statement returns `false` the next piece of code is executed/evaluated (like `return`, `if` or `else` statements).

### Hint 2
Sometimes `if` (`condition`) statements can be replaced by `else {code to execute instead} ` statements (in essence you are telling your function to do _"y"_ if it can't do _"x"_ instead of specifying _"x"_ several times) .  



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
```

#### Code Explanation
The function first evaluates `if` the condition `val > 5` evaluates to `true`. If it doesn't, it executes the next statement (`else { return "5 or smaller";})`.  

#### Relevant Links

- ["if...else" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
</details>
