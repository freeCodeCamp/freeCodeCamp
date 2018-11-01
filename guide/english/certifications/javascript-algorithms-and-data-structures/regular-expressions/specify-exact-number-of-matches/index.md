---
title: Specify Exact Number of Matches
---
## Specify Exact Number of Matches
---

## Hint 1

* Use the {n} syntax to count the number of letters.

## Hint 2

* A global operator is not needed, but if you use one, the test will still pass.

# Spoiler Alert!! Solution Ahead!

## Solution

 ```javascript
 
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

## Explanation

* The {n} syntax counts the number of the proceeding character (or set of characters).
