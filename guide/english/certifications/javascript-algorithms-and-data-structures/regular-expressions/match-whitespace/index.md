---
title: Match Whitespace
---
## Match Whitespace

## Hint 1

* A global flag will help you get through this challenge.

## Hint 2

* Try using a shorthand character for `s` whitespace. Note, 'w' means word characters, so letters and numbers.

# Spoiler Alert!! Solution Ahead!

## Solution

 ```javascript
 
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);
```

## Explanation

* The `\s` shorthand character is a shortcut for whitespace.
