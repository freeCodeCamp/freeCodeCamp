---
title: Match All Numbers
---
# Match All Numbers


---
## Hints

### Hint 1

* A global flag will help you get through this challenge.

### Hint 2

* Try using a shorthand character for `d`igits.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let numRegex = /\d/g;
```

#### Code Explanation

* The `\d` shorthand character is a shortcut for `[0-9]`, it search for any number between 0 and 9.
</details>