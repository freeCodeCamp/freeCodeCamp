---
title: Sort disjoint sublist
---
# Sort disjoint sublist

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function (a, b) { return a - b; });
  
  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }
  
  sublist.sort((a, b) => { return a - b; });
  
  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```

</details>