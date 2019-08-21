---
title: Stream Merge
---
# Stream Merge

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function mergeLists(lists) {
  function merge (l1, l2) {
    var result = [], i=0, j=0;
    while (l1.length && l2.length) {
      if(l1[i]<=l2[j]){
        result.push(l1.shift());
      }else{
        result.push(l2.shift());
      }
    }

    result.push.apply(result, l1);
    result.push.apply(result, l2);
    return result;
  }

  var result=lists[0];
  for (var i = 1; i < lists.length; i++) {
    result=merge(result, lists[i]);
  }

  return result;
}
```

</details>