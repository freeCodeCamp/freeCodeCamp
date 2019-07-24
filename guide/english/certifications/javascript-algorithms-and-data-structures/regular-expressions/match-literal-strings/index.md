---
title: Match Literal Strings
---
# Match Literal Strings

---
## Problem Explanation
This challenge is not any different from the previous; in this case though, you are learning that string literals are case-sensitive. That means, when you test to see if a string has a literal, it will search for the exact case (lower or upper) inside the string. You will learn how to find string literals regardless of their case, in an upcoming lesson.

In this challenge, you're finding Waldo...inside a string!


---
## Hints

### Hint 1

Change the line to have the correct string literal.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>


```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

</details>