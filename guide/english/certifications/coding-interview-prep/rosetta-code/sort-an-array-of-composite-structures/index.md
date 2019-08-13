---
title: Sort an array of composite structures
---
# Sort an array of composite structures

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sortByKey (arr) {
  return arr.sort(function(a, b) {
    return a.key - b.key
  });
}
```

</details>