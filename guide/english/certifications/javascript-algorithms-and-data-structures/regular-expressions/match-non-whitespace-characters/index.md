---
title: Match Non-Whitespace Characters
---
## Match Non-Whitespace Characters

To finish this challenge, it's necessary to use the __/S__ character class in your regexp pattern.

__\S__ matches a single character other than white space.

For example: 
```javascript
/\S\w*/ 
// matches "foo" in "foo bar".
```

__important:__ Characters are case sensitive in regexp. 


### Spoiiler Alert: Solution ahead
```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
