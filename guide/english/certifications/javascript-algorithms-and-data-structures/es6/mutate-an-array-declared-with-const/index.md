---
title: Mutate an Array Declared with const
---

# Mutate an Array Declared with const

---
## Problem Explanation

Reassign the values of the `const` variable `s` using various element assignment.


---
## Hints

### Hint 1

*   You can change array values on `const` like you can with `var` or `let`.

### Hint 1

*   To access array value use array[index]


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```

#### Code Explanation

Trying to reassign a read-only `const` variable will throw an error, but by using various element assignment you can access and change the value of an array just like you would with `let` or `var`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const' target='_blank' rel='nofollow'>const</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array' target='_blank' rel='nofollow'>Array</a>

</details>
