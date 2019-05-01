---
title: Match Everything But Letters and Numbers
---
## Match Everything But Letters and Numbers


To finish this challenge, it's necessary to use __character classes__. 

The __\W__ matches any character that is not a word character from the basic Latin alphabet. 
__Equivalent to [^A-Za-z0-9_].__

For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".




### Spoiiler Alert: Solution ahead
```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
