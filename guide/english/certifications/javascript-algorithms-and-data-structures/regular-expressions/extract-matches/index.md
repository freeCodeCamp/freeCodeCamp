---
title: Extract Matches
---
# Extract Matches

---
## Problem Explanation
Using the `match()` method, you can extract parts of a string that match with your regular expression. In this challenge, you are extracting the word "coding" from the string provided.


---
## Hints

### Hint 1

Change your regex to detect the word "coding".

### Hint 2

Did you call the `match()` method on the string?


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
```

</details>