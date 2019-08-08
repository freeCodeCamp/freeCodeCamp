---
title: Check For The Presence of an Element With indexOf()
---
# Check For The Presence of an Element With indexOf()


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

#### Code Explanation
- A simple `if-statement` can be used to check whether or not the value returned by the `indexOf()` function is less than 0.
- Once the value is discovered then you can return either `true` or `false`.
- demonstrates how a simple `if-statement` can return the correct result.
</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```javascript
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

#### Code Explanation
- demonstrates how the problem can be solved using the `? : (conditional)` operator.
</details>


<details><summary>Solution 3 (Click to Show/Hide)</summary>

```javascript
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

#### Code Explanation
- demonstrates how the problem can be solved by directly returning result of the comparison.
</details>
