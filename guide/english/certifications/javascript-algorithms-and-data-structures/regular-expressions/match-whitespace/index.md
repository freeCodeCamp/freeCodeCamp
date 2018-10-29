---
title: Match Whitespace
---
## Match Whitespace

To finish this challenge, it's necessary to use the __/s__ character class in your regexp pattern.

__\s__ matches a single white space character. (including space, tab, form feed, line feed and other Unicode spaces. 

For example: 
```javascript
/\s\w*/ 
// matches " bar" in "foo bar".
```

__important:__ Characters are case sensitive in regexp. __\S__ matches a single character other than white space.


### Spoiiler Alert: Solution ahead
```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```
