---
title: Remove Whitespace from Start and End
---
# Remove Whitespace from Start and End

---
## Problem Explanation
To solve this challenge you simply have to create a regex string that matches any spaces at the beginning or at the end of the string. 


---
## Hints

### Hint 1
Think of how you can select substrings at the beginning or end of a string.

### Hint 2
Think of how you can select whitespace


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
```

</details>