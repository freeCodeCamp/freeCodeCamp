---
title: Positive and Negative Lookahead
---
## Positive and Negative Lookahead

- Remeber to use 2 `lookaheads` to check the patterns in the string. The first `lookahead` is very similar to that given in the example - '(?=\w{3,6})' - only the `lower-number` 3 is too low for our test cases, and an `upper-number` is completely unneccesarry. This first `lookahead` is only used to find a string consisting of a certain amount of characters. A second `lookahead` must be used to check for consecutive numerical values at the end of the string.

- The second `lookahead` is also similar to that given in the example - `(?=\D*\d)` - however, this expression too must be modified to pass all test cases. Remember to specify the exact amount of numbers you want to appear at the end of the string. 

## Solution : 

```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
```
