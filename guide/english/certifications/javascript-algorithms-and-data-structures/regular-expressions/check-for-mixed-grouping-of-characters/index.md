---
title: Check For Mixed Grouping of Characters
---
## Check For Mixed Grouping of Characters

### Hint 1

Use `a|b` to check for either `a` or `b`.

### Hint 2

Your RegEx should use mixed grouping like `/P(engu|umpk)in/g`.

### Solution

```javascript
let myString = "Hello from the other side";
let myRegex = /H(a|el)lo/g;
let result = myRegex.test(myString);
```