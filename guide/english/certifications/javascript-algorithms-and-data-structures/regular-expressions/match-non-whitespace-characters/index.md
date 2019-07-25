---
title: Match Non-Whitespace Characters
---
# Match Non-Whitespace Characters


---
## Hints

### Hint 1

* A global flag will help you get through this challenge.

### Hint 2

* Try using a shorthand character for `S` non-whitespace.



---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

#### Code Explanation

* The `\S` shorthand character is a shortcut for non-whitespace. The regular expresssion returns the number of characters that match it.
</details>
