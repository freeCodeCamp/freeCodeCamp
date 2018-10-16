---	
title: Match Everything But Letters and Numbers	
---

## Match Everything But Letters and Numbers

### Problem:

We need to use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

### Solution:

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
