---
title: Chaining If Else Statements
---
# Chaining If Else Statements

---
## Problem Explanation

* ```If```: the first conditional in every if/else statement, case the conditional is *true*, execute the code and ignore the rest.
* ```Else if```: can never be used as the first conditional. It is always a conditional after an ```if```, case the conditional is true, execute the code. Otherwise jumps into the next conditional.
* ```Else```: case all the previous conditionals are *false*, **else** is executed.


---
## Hints

### Hint 1
Remember that you can combine (chain) several `if...else` statements one after the other until your last one using `else if (condition) {do this}`.

> 
### Hint 2
Sometimes, when you write more code than you are used to and it doesn't work, the little things are what betray us. Checking for missing semicolons, brackets, etc. can prove very useful.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
  // Only change code above this line
}
```

#### Code Explanation
The function first checks the `if` condition `(num < 5)`. If it evaluates to `true`, it returns the statement between the curly braces ("Tiny"). If it doesn't, it checks the next condition until the last `else` statement. 


#### Relevant Links

- ["if...else" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
</details>
