---
title: Specify Only the Lower Number of Matches
---
## Specify Only the Lower Number of Matches

The Problem
Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

Solution
```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
