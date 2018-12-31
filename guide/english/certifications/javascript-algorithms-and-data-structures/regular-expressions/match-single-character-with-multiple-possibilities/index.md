---
title: Match Single Character with Multiple Possibilities
---
## Match Single Character with Multiple Possibilities

### Extract 
Using the match() method, you can extract parts of a string that match with your regular expression. In this challenge, you are extracting the vowels "a, e, i, o, u" from a provided string.

### Hint 1:
Are you attempting to use the test() method? Remember this method only returns True or False -- we need to extract the vowels from the string.

### Hint 2:
Have you tried using the '[]' character case match without commas? i.e. [abcd] vs [a, b, c, d]

### Spoiler Alert - Solution Ahead!

## Solution
```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
