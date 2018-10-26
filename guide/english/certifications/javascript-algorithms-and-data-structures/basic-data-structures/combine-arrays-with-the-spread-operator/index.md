---
title: Combine Arrays with the Spread Operator
---
## Combine Arrays with the Spread Operator

- The solution is exactly like the example given. Simply insert the `fragment[]` array into the `sentence[]` array at the desired index.

## Solution:
```javascript
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
```
