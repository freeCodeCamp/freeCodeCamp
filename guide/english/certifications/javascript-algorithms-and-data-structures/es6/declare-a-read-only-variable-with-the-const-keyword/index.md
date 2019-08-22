---
title: Declare a Read-Only Variable with the const Keyword
---

# Declare a Read-Only Variable with the const Keyword

---
## Problem Explanation

Change all the variables to `let` or `const` and rename `sentence`.


---
## Hints

### Hint 1

*   Replace `var` for string with read-only `const`.

### Hint 1

*   Replace `var` in `for` loop to `let`.

### Hint 1

*   Common convention is to name `const` variables with ALL CAPS.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function printManyTimes(str) {
  "use strict";
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");
```

#### Code Explanation

By using `const` on `sentence` we can make it read-only and by using `let` on `i` inside the for loop we can avoid using `var` all together. For added code clarity we can also change `sentence` to `SENTENCE` to show that it is a constant.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const' target='_blank' rel='nofollow'>const</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let' target='_blank' rel='nofollow'>let</a>

</details>
