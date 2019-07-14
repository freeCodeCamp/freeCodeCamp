---
title: Match Single Characters Not Specified
---
## Match Single Characters Not Specified
In this challenge, we are asked to return a collection of matches that are not exactly specified. Whereas previous regexp challenges would have you match within the character case [a-z], this challenge instead asks us to negate these matches using the caret character [^a-z]. Our goal then is to return a negated collection (non-matches) of letters that are not vowels nor numbers.

## Hint 1:
Did you remember to surround your regexp in both brackets and slashes?
```javascript
let exampleRegExp = /[^a-z]/;
```
If so, then double check you're adding the appropriate flags:
* i  : Ignores upper and lower case from search/match
* g  : Retrieves multiple values; default is set to return the first match it encounters
* ^  : Negates the matches following this flag

### Hint 2:
Be sure to check whether your number range is correct -- the challenge asks us to negate all numbers from 0 to 9. This can be done using the negate caret placed immediately after the first opening bracket of your regexp.
```js
let numbersRegExp = /[^0-9]/ig;
```

### Spoiler Alert - Solution Ahead

## Solution
```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
