---
title: Match Anything with Wildcard Period
---

# Match Anything with Wildcard Period


---
## Hints

### Hint 1
The dot `.` is the key in this challenge.

### Hint 2
You should put the dot on the right position.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
#### Code Explanation
The period `.` will be any one character so the strings "run", "sun", "fun" and "pun" have the same un charaters.
</details>

