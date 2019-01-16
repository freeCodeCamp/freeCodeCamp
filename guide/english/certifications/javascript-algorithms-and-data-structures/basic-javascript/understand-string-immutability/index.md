---
title: Understand String Immutability
---
## Understand String Immutability

## Problem Explanation
Correct the assignment to ```myStr``` so it contains the string value of ```Hello World``` using the approach shown in the example above.

## Hint
Instead of  ```Jello World ```, ```myStr``` should be assigned ```Hello World```.

 ## Spoiler Alert! Solution ahead.
**Solution**
```javascript
// Setup
var myStr = "Jello World";
 // Only change code below this line
 myStr = "Hello World";
```
 ## Code Explanation
String literals such as ```"Jello World"``` cannot be changed by the individual letter (hence being *immutable*), so the variable containing the incorrect string must be replaced with the desired string using the assignment operator ```=```
