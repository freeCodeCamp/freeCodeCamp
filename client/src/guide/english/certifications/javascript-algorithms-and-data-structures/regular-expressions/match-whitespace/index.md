---	
title: Match Whitespace	
---

## Match Whitespace

### Problem:

We need to change the regex ```countWhiteSpace``` to look for multiple whitespace characters in a string.

### Solution:

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```
