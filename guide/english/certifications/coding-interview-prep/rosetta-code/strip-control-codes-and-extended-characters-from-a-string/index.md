---
title: Strip control codes and extended characters from a string
---
# Strip control codes and extended characters from a string

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function strip(s) {
  return s.split('').filter(function(x) {
    var n = x.charCodeAt(0);

    return 31 < n && 127 > n;
  }).join('');
}
```

</details>