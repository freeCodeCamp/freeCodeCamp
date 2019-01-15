---
title: Check For Mixed Grouping of Characters
---
## Check For Mixed Grouping of Characters

### Hint 1

Use `|` to check for either....or.

### Hint 2

The code footprint should be as small as possible.

### Solution

```javascript
let myString = "This is FreeCodeCamp";
let myRegex = /H(a|el)lo/g;
let result = myRegex.test(myString);
```
