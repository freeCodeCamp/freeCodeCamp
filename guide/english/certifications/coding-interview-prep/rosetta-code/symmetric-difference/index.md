---
title: Symmetric difference
---
# Symmetric difference

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length;) {
      if (u[i - 1] === u[i])
        u.splice(i, 1);
      else
        i++;
    }
    return u;
  }

  return unique(relative_complement(A, B).concat(relative_complement(B, A))).sort();
}
```

</details>