---
title: Balanced brackets
---
# Balanced brackets


---
## Solutions

<details><summary>### Solution #1 (Click to Show/Hide)</summary>

```js
function isBalanced(str) {
  if (str === "") return true;

  str = str.split("");
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push("[");
    } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    }
  }
  return stack.length === 0;
}
```

#### Code Explanation
- Split the input string into individual characters & loop over them.
- Push every `[` into a stack.
- Check if the item stored on the stack is `[` when a `]` occurs. This makes it a pair & `[` can be removed from the stack.
- The brackets are balanced if there is no item present in the stack.

</details>