---
title: Match All Non-Numbers
---
## Match All Non-Numbers

## Hint 1

* You should try using a global flag.

## Hint 2

* Try a shorthand character for non-digits characters.

# Spoiler Alert!! Solution Ahead!

## Solution

```javascript
let noNumRegex = /\D/g;
```

## Explanation

* The `\D` shorthand character is used to match non-digits characters, it has the same result as using `[^0-9]`;
