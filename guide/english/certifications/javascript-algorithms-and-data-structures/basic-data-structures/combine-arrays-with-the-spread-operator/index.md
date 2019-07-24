---
title: Combine Arrays with the Spread Operator
---
# Combine Arrays with the Spread Operator


---
## Solutions

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line
  return sentence;
}

// do not change code below this line
console.log(spreadOut());
```
#### Code Explanation
- The solution is exactly like the example given. Simply insert the `fragment[]` array into the `sentence[]` array at the desired index.
</details>