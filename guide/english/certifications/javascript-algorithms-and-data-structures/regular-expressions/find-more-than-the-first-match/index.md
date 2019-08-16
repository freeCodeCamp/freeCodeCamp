---
title: Find More Than the First Match
---
# Find More Than the First Match

---
## Problem Explanation
If you have multiple occurrences of your regex inside a string, you can get the `match()` function to detect all of them. Simply tag along the `g` flag at the end of your regex! That's what you're doing in this challenge.


---
## Hints

### Hint 1

Change the regex so that it detects the word "twinkle".

### Hint 2

You can add multiple tags to a regex! For example, a regex that detects multiple occurrences, and detects regardless of case, can be structured like `gi` or `ig`.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

</details>