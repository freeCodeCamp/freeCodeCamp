---
title: Compare Scopes of the var and let Keywords
---

# Compare Scopes of the var and let Keywords

---
## Problem Explanation

Change the code so that the variable `i` declared in the if block is separately scoped than the variable `i` declared at the beginning of the function.


---
## Hints

### Hint 1

*  _Be certain not to use the `var` keyword anywhere in your code._

### Hint 2
*   _Remember that `let`'s scope is limited to the block, function or statement in which you declare it._


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
```

#### Code Explanation

By using `let` you can declare variables in relation to their scope.

#### Relevant Links
- ["let" - *MDN Javascript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Rauschmayer, Axel. "Variables and scoping in ECMAScript 6". *2ality.com*, 2015-02-07.](http://2ality.com/2015/02/es6-scoping.html) Accessed 11 Dec 2018. 
- [Bos, Wes. "Quick Tip: Use let with for Loops in JavaScript". *wesbos.com*, 16 Aug 2016.](https://wesbos.com/for-of-es6/) Accessed 11 Dec 2018. 
</details>

