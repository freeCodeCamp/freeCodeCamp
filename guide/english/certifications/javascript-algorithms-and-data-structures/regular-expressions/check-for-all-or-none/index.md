---
title: Check for All or None
---
## Check for All or None

With Regular Expressions (RegExp) you can have modify your testing pattern with special charaters. To pass this challenge you the __quantifiers__ are very helpful. A quantifier is __?__ in __x?__.

__x?__ Matches the preceding item x 0 or 1 time.

For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle."

If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy (matching the minimum number of times), as opposed to the default, which is greedy (matching the maximum number of times).  
 

__Challenge Solution:__  

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```
