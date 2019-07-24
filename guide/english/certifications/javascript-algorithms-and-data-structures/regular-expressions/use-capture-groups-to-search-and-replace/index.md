---
title: Use Capture Groups to Search and Replace
---
# Use Capture Groups to Search and Replace

---
## Problem Explanation
Using `.replace()` with the first parameter set to find the part of the original string to replace, and the second parameter should be the replacement. 


---
## Hints

### Hint 1

Modify the regex so that `fixRegex` detects the part of the string to replace and the variable `replaceText` should be modified to the string that will replace `fixRegex`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```
</details>
