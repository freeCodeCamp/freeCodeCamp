---
title: Ignore Case While Matching
---
# Ignore Case While Matching

---
## Problem Explanation
When creating a regular expression, you might want to match parts of string that are same in spelling, but different in case. To do this, you add the `i` flag to the end of the regex. In this challenge, you are doing just that.


---
## Hints

### Hint 1

Modify the regex so that it detects "freeCodeCamp", "FREECODECAMP", and "FrEeCoDeCaMp". Maybe using the `i` flag might help?


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);
```
</details> 