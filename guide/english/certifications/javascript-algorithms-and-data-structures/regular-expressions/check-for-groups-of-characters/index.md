---
title: Check for Groups of Characters
---
## Check for Groups of Characters

### Hint 1

Use `|` to check for either....or.

### Hint 2

Use escape characters.

### Solution

```javascript
let myString = "This is FreeCodeCamp";
let myRegex = /(Python|JavaScript)/g;
let result = myRegex.test(myString);
```
