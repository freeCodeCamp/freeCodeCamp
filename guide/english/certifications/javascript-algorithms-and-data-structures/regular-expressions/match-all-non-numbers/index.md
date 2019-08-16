---
title: Match All Non-Numbers
---
# Match All Non-Numbers


---
## Hints

### Hint 1

* You should try using a global flag.

### Hint 2

* Try a shorthand character for non-digits characters.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let noNumRegex = /\D/g;
```

#### Code Explanation

* The `\D` shorthand character is used to match non-digits characters, it has the same result as using `[^0-9]`;
</details>
