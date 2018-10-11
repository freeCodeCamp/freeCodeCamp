---
title: Catch Arguments Passed in the Wrong Order When Calling a Function
---
## Catch Arguments Passed in the Wrong Order When Calling a Function

```javascript
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
```

- The above function is used to raise the base number `b` to the power of the exponent `e`. 
- The function must be called specifically with variables in the correct order. Otherwise the function will mix up both variables and return an undesired answer.
- Make sure tha variable `power` is implementing the `raiseToPower` function correctly.

## Solution:
```javascript
let power = raiseToPower(base, exp);
```
