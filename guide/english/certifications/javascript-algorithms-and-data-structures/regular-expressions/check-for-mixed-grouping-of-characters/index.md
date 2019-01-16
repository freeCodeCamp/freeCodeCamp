---
title: Check For Mixed Grouping of Characters
---
## Check For Mixed Grouping of Characters

### Hint 1

Use `a|b` to check for either `a` or `b`.

### Hint 2

Your regex should use mixed grouping like `/P(engu|umpk)in/g`.

### Hint 3

Use `.*` to allow for middle names.

### Solution

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```