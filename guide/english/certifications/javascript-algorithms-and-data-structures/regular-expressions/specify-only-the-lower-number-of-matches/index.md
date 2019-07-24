---
title: Specify Only the Lower Number of Matches
---
# Specify Only the Lower Number of Matches


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
</details>
