---
title: Use Recursion to Create a Range of Numbers
---

# Use Recursion to Create a Range of Numbers


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```

</details>