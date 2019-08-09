---
title: Explore Differences Between the var and let Keywords
---

# Explore Differences Between the var and let Keywords

---
## Problem Explanation

We need to change each `var` to `let` in our code.


---
## Hints

### Hint 1

*   Find each `var` and replace with `let`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
```

#### Code Explanation

By using `let` instead of `var` we can avoid overriding `catName` and `quote`.

#### Relevant Links

- ["var" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- ["let" - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
</details>


