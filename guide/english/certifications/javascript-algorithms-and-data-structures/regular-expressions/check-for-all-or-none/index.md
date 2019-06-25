---
title: Check for All or None
---
## Check for All or None
In this challenge, you are asked to change the regex so that it defines the existence of the letter u, resulting in the acceptance of both American and British versions of the word favourite/favorite. 

### Hint 1:
The variable favWord already contains the American version — favorite. Does the regular expression in favRegex also match the British version?

### Hint 2:
Have you used the question mark, ? symbol, if so, have you placed it in the correct position?

### Spoiler Alert - Solution Ahead!

## Solution

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);
```
